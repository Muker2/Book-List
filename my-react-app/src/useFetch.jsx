import { useEffect, useState } from "react";

function useFetch(url) {
    const [books, setBooks] = useState([]);
    const [searchBooks, setSearchBooks] = useState([]);
    const [category, setCategory] = useState([]);
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
                setBooks(data.items);
                setSearchBooks(data.items);
                console.log(data.items)

                const categories = data.items.flatMap((item) => item.volumeInfo.categories || []);
                const uniqueCategories = [...new Set(categories)];
                setCategory(uniqueCategories);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url])

    return { books, searchBooks, setSearchBooks, category, loading, error };
};

export default useFetch;
