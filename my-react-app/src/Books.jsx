import styles from "./Books.module.css";
import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Books() {
    const [searchText, setSearchText] = useState("");
    const [favorites, setFavorites] = useState([]);
    const { books, searchBooks, setSearchBooks, category } = useFetch("https://www.googleapis.com/books/v1/volumes?q=search+terms&maxResults=40&key=AIzaSyCrzZbMrZtyrmSvFrBQH5NEoiMxjf1CbO4");

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
        console.log(favorites);
      }, [favorites]);

    const handleInputChange = (e) => {
        var input = e.target.value;
        setSearchText(input);

        if (input === " ") {
            setSearchBooks(books);
        }
        else {
            const searchT = books.filter((book) =>
                book.volumeInfo.title.toLowerCase().includes(input)
            );

            setSearchBooks(searchT);
        }
    }

    const handleInputClick = (e) => {
        const input = e.target.textContent;

        const searchC = books.filter((book) =>
            book.volumeInfo.categories?.some((category) =>
                category === input)
        );

        setSearchBooks(searchC);


    }

    const handleReset = (e) => {
        setSearchBooks(books);
        setSearchText("hello");
    }

    const handleFavorites = (book) => {
        setFavorites((prevFavorites) => [...prevFavorites, book]);
    };

    console.log(books);

    return (
        <div className={styles.bookContent}>
            <Sidebar value={searchText} array={category} onChange={handleInputChange} onClick={handleInputClick} onReset={handleReset}
                className="sidebar"></Sidebar>
            <div className={styles.Mainbar}>
                <div className={styles.bookListHeader}>


                    <ul className={styles.bookList}>{searchBooks.length == 0 ?
                        <p>No books found</p> : searchBooks.map((book) =>
                            <div className={styles.bookEntry} key={book.id}>
                                <div className={styles.bookImage}>
                                    <img src={book.volumeInfo.imageLinks?.smallThumbnail}></img></div>
                                <div className={styles.bookText}>
                                    <div classname={styles.booklink}>
                                    <Link to={`/bookdetails/${book.id}`}>{book.volumeInfo.title}</Link>
                                    </div>
                                    <p>{book.volumeInfo.authors}</p>
                                    <button onClick={() => handleFavorites(book)}>Add to Favorites</button>
                                </div>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </div>)
}

export default Books;