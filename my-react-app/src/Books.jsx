import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

function Books() {
    const [books, setBooks] = useState([]);
    const [searchBooks, setSearchBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

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

    return (
        <div className="bookContent">
            <Sidebar className="sidebar"></Sidebar>
            <div className="Mainbar">
            <div className="bookListHeader">
                <h2>From silent films to modern-day slashers, the world of horror cinema has evolved into a genre
                     that both terrifies and captivates audiences. This collection delves deep into the artistry, cultural impact,
                      and psychological power of horror films, exploring iconic monsters, groundbreaking directors, and th
                      e fear-inducing techniques that have left viewers trembling for decades. Discover how horror on the
                       big screen reflects society’s darkest fears and why we can’t look away.</h2>
            </div>
            <div className="books">
                <input type="text" className="bookSearch"
                    value={searchTerm}
                    onChange={handleInputChange} />

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