import { Children, createContext, useContext, useEffect, useRef, useState } from "react"

 const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider =({children})=>{

    const [favorites, setFavorites] = useState([])
    const isFirstRender = useRef(true);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")
        if (storedFavs) setFavorites(JSON.parse(storedFavs))
        
    }, [])

  useEffect(() => {

    if (isFirstRender.current) {
        isFirstRender.current = false;  
        return;
    }
        localStorage.setItem('favorites', JSON.stringify(favorites))

    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }
    
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>

 

}

