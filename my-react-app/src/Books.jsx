import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

function Books() {
    const [books, setBooks] = useState([]);
    const [searchBooks, setSearchBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchCategory, setSearchCategory] = useState("");

    //Get products from API
    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=horror+subjectt&key=AIzaSyCrzZbMrZtyrmSvFrBQH5NEoiMxjf1CbO4")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooks(data.items);
                setSearchBooks(data.items);
            })
    }, [])

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchTerm(searchTerm);

        const filteredItems = books.filter((book) =>
            book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchBooks(filteredItems);
    }

    const handleCategoryChange = (e) => {
        const searchCategory = e.target.textContent;
        setSearchCategory(searchCategory);

        const filteredCategory = books.filter((book) => {
            const bookCategory = book.volumeInfo.categories?.[0];
            return bookCategory === searchCategory;
        });
        setSearchBooks(filteredCategory);
        console.log(searchCategory);
    }

    return (
        <div className="bookContent">
            <Sidebar value={searchTerm} onChange={handleInputChange} onClick={handleCategoryChange}
                className="sidebar"></Sidebar>
            <div className="Mainbar">
                <div className="bookListHeader">


                    <ul className="bookList">{searchBooks.map((book) =>
                        <div className="bookEntry" key={book.id}>
                            <div className="bookImage">
                                <img src={book.volumeInfo.imageLinks?.smallThumbnail}></img></div>
                            <div className="bookText">
                                <h3>{book.volumeInfo.title}</h3>
                                <h4>{book.volumeInfo.subtitle}</h4>
                                <h5>{book.volumeInfo.description}</h5>
                            </div>
                        </div>
                    )}
                    </ul>
                </div>
            </div>
        </div>)
}

export default Books;