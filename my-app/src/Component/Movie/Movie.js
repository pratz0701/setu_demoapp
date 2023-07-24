import React,{useEffect, useState,useCallback} from 'react';
import '../Movie/Movie.css';
import MovieCard from './MovieCard/MovieCard';

const Movie = () => {
const [movie,setMovie] = useState([]);
const URL = "https://www.omdbapi.com/?s=game&apikey=dab40600";

const fetchData = useCallback(async() => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        const realdata = data?.Search;
        setMovie(realdata);
        console.log(realdata)
      } catch (error) {
        console.log(error);
    }   
},[movie]);

  useEffect(() => {
    fetchData();
  },[movie]);

  return (
    <>
      <div className='container'>
       {
        movie.map((item)=>(
            <MovieCard 
            title={item.Title}
            poster={item.Poster}
            year={item.Year}
            />       
        ))
       }
    </div>
    </>
  )
}
                                                                                                                                                                                                                    
export default Movie;