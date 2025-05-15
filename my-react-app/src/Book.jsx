import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useFetch from "./useFetch";
import styles from "./Book.module.css";
import Navbar from "./Navbar"


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

    const publishedLanguage = book.volumeInfo.language;
    const language = publishedLanguage.charAt(0).toUpperCase() + publishedLanguage.slice(1);

    return (
        <>
        <Navbar />
        <div className={styles.bookDetails}>
            <div className={styles.bookCover}>
                <img src={book.volumeInfo.imageLinks?.smallThumbnail}></img>
            </div>

            <div className={styles.bookInfo}>
                <div className={styles.bookTitle}>
                    <h1>{book.volumeInfo.title}</h1>
                    <h2>{book.volumeInfo.subtitle}</h2>
                    <h3>{book.volumeInfo.authors}</h3>
                    <h4>{book.volumeInfo.description}</h4>
                </div>
                <div className={styles.bookPublish}>
                    <h3>Publisher {book.volumeInfo.publisher} </h3>
                    <h3>Date {book.volumeInfo.publishedDate} </h3>
                    <h3>Page Number {book.volumeInfo.printedPageCount} </h3>
                    <h3>Language {language}</h3>
                </div>
                <button>Add to favorites</button>
            </div>
        </div>
        </>
    )
}

export default Book;