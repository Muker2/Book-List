import { useState } from "react";
import { useEffect } from "react";

function Books() {
    const [books, setBooks] = useState([]);
    const [favorites, setFavorites] = useState([]);

    //Get products from API
    useEffect(() => {
        fetch("https://freetestapi.com/api/v1/books?limit=15")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooks(data)
            })
    }, [])

    const handleClick = (book) => {
        setFavorites([...favorites, book])
    }

    useEffect(() =>{
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    return (
        <div className="books">
            <input type="text" />
            <ul className="bookList">{books.map((book) => 
                <div className="bookEntry" key={book.id}>
                    <div className="bookImage"></div>
                    <h3>{book.title}</h3>
                    <h4>{book.description}</h4>
                    <button onClick={() => handleClick(book)}></button>
                </div>
                )}
            </ul>
        </div>)
}

export default Books;