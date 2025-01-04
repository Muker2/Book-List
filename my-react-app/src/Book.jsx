import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";


function Book() {
    const { id } = useParams();
    const { book, books, loading, error } = useFetch(`https://www.googleapis.com/books/v1/volumes/${id}`);

    console.log(book);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!books || !book.volumeInfo) {
        return <p>No book details found</p>;
    }

    return (
    <div>
        <h1>{book.volumeInfo.title}</h1>
        </div>
)
}

export default Book;