import axios from "axios";
const apiKey='86227a1d4f5a365e41721ab0b2c14e34'
const baseUrl='https://api.themoviedb.org/3'

export const getMovieList = async ()=>{
   const movie = await axios.get (`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
   return movie.data.results
}

export const searchMovie = async (q)=>{
    const search = await axios.get (`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return search.data
}