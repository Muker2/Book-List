import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";
import Sidebar from "./Sidebar";

function Books() {
    const [searchText, setSearchText] = useState("");
    const [favorites, setFavorites] = useState([]);
    const { books, searchBooks, setSearchBooks, category } = useFetch();

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

    return (
        <div className="bookContent">
            <Sidebar value={searchText} array={category} onChange={handleInputChange} onClick={handleInputClick} onReset={handleReset}
                className="sidebar"></Sidebar>
            <div className="Mainbar">
                <div className="bookListHeader">


                    <ul className="bookList">{searchBooks.length == 0 ?
                        <p>No books found</p> : searchBooks.map((book) =>
                            <div className="bookEntry" key={book.id}>
                                <div className="bookImage">
                                    <img src={book.volumeInfo.imageLinks?.smallThumbnail}></img></div>
                                <div className="bookText">
                                    <h3>{book.volumeInfo.title}</h3>
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