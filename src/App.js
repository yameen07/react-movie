import './App.css';
import Movie from './components/Movie';
import React,{useEffect,useState} from 'react'

const api="https://api.themoviedb.org/3/discover/movie?api_key=ac8df11cdc59b06ece38ac9b0ce5cd9c&language=en-US&sort_by=popularity.desc&page=1&with_watch_monetization_types=flatrate"

function App() {
const [movies,setMovies] = useState([]);


const fetchd= async ()=>{
  const res = await fetch(api)
  const data = await res.json()
  

  return(data.results)
}

useEffect(()=>{
  const getT= async ()=>{
    const movieFromServer = await fetchd()
    
    setMovies(movieFromServer)
  }
 
  getT()
},[])

  return (

  

    <div className='movie-container'>
      {movies.map((movie)=>(
        <Movie key={movie.id} {...movie}/>

      ))}
    </div>
  );
}

export default App;
