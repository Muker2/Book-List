import { useEffect, useState } from "react";

function useFetch (url) {
    const [books, setBooks] = useState([]);
    const [searchBooks, setSearchBooks] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState([]);
    const [favorites, setFavorites] = useState([]);

    //Get products from API
    useEffect(() => {
        fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms&maxResults=40&key=AIzaSyCrzZbMrZtyrmSvFrBQH5NEoiMxjf1CbO4")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBooks(data.items);
                setSearchBooks(data.items);

                const categories = data.items.flatMap((item) => item.volumeInfo.categories || []);
                const uniqueCategories = [...new Set(categories)];
                setCategory(uniqueCategories);
            })
    }, [])

return { books, searchBooks, setSearchBooks, category };
};

export default useFetch;
