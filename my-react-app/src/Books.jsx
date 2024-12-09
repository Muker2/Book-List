import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

function Books() {
    const [books, setBooks] = useState([]);
    const [category, setCategory] = useState([]);
    const [searchBooks, setSearchBooks] = useState([]);
    const [searchText, setSearchText] = useState("");

    //Get products from API
    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms&maxResults=40&key=AIzaSyCrzZbMrZtyrmSvFrBQH5NEoiMxjf1CbO4")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooks(data.items);
                setSearchBooks(data.items);

                const categories = data.items.flatMap((item) => item.volumeInfo.categories || []); // Handle cases where categories might be undefined
                const uniqueCategories = [...new Set(categories)];
                setCategory(uniqueCategories);
                console.log("Category" + uniqueCategories);
            })
    }, [])

    const handleInputChange = (e) => {
        const input = e.target.value;
        setSearchText(input);

        if(input === " "){
            setSearchBooks(books);}
            else{
        const search = books.filter((book) => 
            book.volumeInfo.title.toLowerCase().includes(input)    
        );

        setSearchBooks(search);
    }
    }


    return (
        <div className="bookContent">
            <Sidebar value={searchText} array={category} onChange={handleInputChange}
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