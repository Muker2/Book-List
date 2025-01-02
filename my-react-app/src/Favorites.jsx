import { useState } from "react";
import { useEffect } from "react";

function Favorites(){
    const [favorites, setFavorites] = useState("");

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        if (favorites) {
         setFavorites(favorites);
        }
      }, []);

    return(
        <>
        <ul className="bookList">{favorites.length == 0 ?
                        <p>No books found</p> : favorites.map((favorite) =>
                            <div className="bookEntry" key={favorite.id}>
                                <div className="bookImage">
                                    <img src={favorite.volumeInfo.imageLinks?.smallThumbnail}></img></div>
                                <div className="bookText">
                                    <h3>{favorite.volumeInfo.title}</h3>
                                    <button onClick={() => handleFavorites(book)}>Add to Favorites</button>
                                </div>
                            </div>
                        )}
                    </ul></>
        
    )
}

export default Favorites;