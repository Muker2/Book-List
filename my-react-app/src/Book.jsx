import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


function Book () {
    const [books, setBooks] = useState([]);
    
    const {bookID} = useParams();

    useEffect(() => {
            fetch("https://www.googleapis.com/books/v1/volumes/" + bookID + "?key=AIzaSyCrzZbMrZtyrmSvFrBQH5NEoiMxjf1CbO4")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setBooks(data);
                })
        }, [])

    return <div>Book</div>
}

export default Book;