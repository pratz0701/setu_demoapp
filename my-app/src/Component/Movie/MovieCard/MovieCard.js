import React from 'react';
import './MovieCard.css';

const MovieCard = ({title,year,poster}) => {
  return (
    <div className='moviebox'>
    <div className='image'>
       <img src={poster} alt='movie' className='img'/>
    </div>
    <div className='text-title'>{title}</div>
    <div className='year'>{year}</div>
    </div>
  )
}

export default MovieCard