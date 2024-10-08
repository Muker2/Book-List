import { useState } from "react";
import { useEffect } from "react";

function Books() {
    const [books, setBooks] = useState([]);
    const [favorites, setFavorites] = useState([]);

    //Get products from API
    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyCrzZbMrZtyrmSvFrBQH5NEoiMxjf1CbO4")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooks(data.items)
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