import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";


function Book() {
    const { id } = useParams();
    const { book, loading, error } = useFetch(`https://www.googleapis.com/books/v1/volumes/${id}`);

    console.log(book);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!book || !book.volumeInfo) {
        return <p>No book details found</p>;
    }

    return (
    <div>
        <img src={book.volumeInfo.imageLinks?.smallThumbnail}></img>
        <h1>{book.volumeInfo.title}</h1>
        <h3>{book.volumeInfo.authors}</h3>
        <h3>Published by {book.volumeInfo.publisher} on {book.volumeInfo.publishedDate} </h3>

        <h2>{book.volumeInfo.description}</h2>
        </div>
)
}

export default Book;