import { useState } from "react";
import { useEffect } from "react";

function Books() {
    const [books, setBooks] = useState([]);
    const [searchBooks, setSearchbooks] = useState([]);
    const [filteredBooks, setfilteredBooks] = useState([]);

    //Get products from API
    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=horror+subjectt&key=AIzaSyCrzZbMrZtyrmSvFrBQH5NEoiMxjf1CbO4")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooks(data.items)
            })
    }, [])

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchbooks(searchTerm)

        const filteredItems = books.filter((book) =>
            book.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
            );

        setfilteredBooks(filteredItems);
    }

    return (
        <div className="books">
            <input type="text" className="bookSearch"
                value={searchBooks}
                onChange={handleInputChange} />

            <ul className="bookList">{filteredBooks.map((book) =>
                <div className="bookEntry" key={book.id}>
                    <div className="bookImage">
                        <img src="{book.volumeInfo.imageLinks.smallThumbnail}"></img></div>
                    <h3>{book.volumeInfo.title}</h3>
                    <h4>{book.volumeInfo.subtitle}</h4>
                    <button onClick={() => handleClick(book)}></button>
                </div>
            )}
            </ul>
        </div>)
}

export default Books;