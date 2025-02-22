export const API_KEY = "7b3b749f1fe5e4b96fdedf035f6cafc4"
export const BASE_URL = "https://api.themoviedb.org/3";

export const getPopulateMovies=async()=>{
    const reponse = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await reponse.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query
      )}`
    );
    const data = await response.json();
    
    return data.results;
  };