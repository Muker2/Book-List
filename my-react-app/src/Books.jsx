import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

function Books() {
    const [books, setBooks] = useState([]);
    const [searchBooks, setSearchBooks] = useState([]);
    const [searchText, setSearchText] = useState("");

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
        const input = e.target.value;
        setSearchText(input);

        const search = books.filter((book) => 
            book.volumeInfo.title.toLowerCase().includes(searchText)    
        );

        setSearchBooks(search);
    }


    return (
        <div className="bookContent">
            <Sidebar value={searchText} onChange={handleInputChange}
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