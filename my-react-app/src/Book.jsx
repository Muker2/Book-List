import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";


function Book() {
    const { id } = useParams();
    //const { books, loading, error } = useFetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
    const { books, loading, error } = useFetch("https://www.googleapis.com/books/v1/volumes?q=search+terms&maxResults=40&key=AIzaSyCrzZbMrZtyrmSvFrBQH5NEoiMxjf1CbO4");

    const bookDetails = books.find(book => book.id === id);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!books || !books.volumeInfo) {
        return <p>No book details found</p>;
    }

    return (
    <div>
        <h1>{bookDetails.volumeInfo.title}</h1>
        </div>
)
}

export default Book;