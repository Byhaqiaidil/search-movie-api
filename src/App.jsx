import { useEffect, useState } from 'react';
import './App.css';
import {getMovieList, searchMovie} from './api'

function App() {
const [popularMovies, setPopularMovies] = useState([])

useEffect (() =>{
  getMovieList().then((result)=>{
    setPopularMovies(result)
  })
}, [])



const PopularList = ()=>{
  return popularMovies.map((movie, i)=>{
    return(
        <div className="movie-wrapper" key={i}>
            <div className="movie-title">{movie.title}</div>
            <img className='movie image' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}></img>
              <div className="movie-date">release: {movie.release_date}</div>
              <div className="movie-rate">{movie.vote_average}</div>
          </div>
    )
  })
}

const search = async(q) => {
  if (q.length> 3){
const cari= await searchMovie(q)
setPopularMovies(cari.results)
}
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>ByMovie</h1>
        <input type="text" placeholder='search movie...' className='search'
        onChange={({target})=> search (target.value)}/>
        <div className="movie-container">
        <PopularList/>
        </div>
      </header>
    </div>
  );
}

export default App;
