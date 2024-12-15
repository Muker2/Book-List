import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

function Books() {
    const [books, setBooks] = useState([]);
    const [searchBooks, setSearchBooks] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState([]);

    //Get products from API
    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms&maxResults=40&key=AIzaSyCrzZbMrZtyrmSvFrBQH5NEoiMxjf1CbO4")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooks(data.items);
                setSearchBooks(data.items);

                const categories = data.items.flatMap((item) => item.volumeInfo.categories || []);
                const uniqueCategories = [...new Set(categories)];
                setCategory(uniqueCategories);
                console.log("Category" + uniqueCategories);
            })
    }, [])

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
                                </div>
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        </div>)
}

export default Books;