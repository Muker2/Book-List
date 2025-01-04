import { useEffect, useState } from "react";

function useFetch(url) {
    const [books, setBooks] = useState([]); // Used for book list in main component
    const [book, setBook] = useState([]); // Relevant for book details page 
    const [searchBooks, setSearchBooks] = useState([]); // Used for search function in Main component
    const [category, setCategory] = useState([]); // Used to create the categories for the sidebar in main component
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state


    //Get products from API
    useEffect(() => {
        setLoading(true); // Start loading
        setError(null); // Reset error state
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                return res.json();
            })
            .then(data => {
                if(data.items){
                setBooks(data.items);
                setSearchBooks(data.items);

                const categories = data.items.flatMap((item) => item.volumeInfo.categories || []);
                const uniqueCategories = [...new Set(categories)];
                setCategory(uniqueCategories);
                }else{
                    setBook(data);
                }
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url])

    return { books, book, searchBooks, setSearchBooks, category, loading, error };
};

export default useFetch;
