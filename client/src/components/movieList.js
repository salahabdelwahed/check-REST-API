import React from 'react'
import oneMovie from "./oneMovie.js"

const movieList = ({movies}) => {
  return (
    <div className='allmovies'>
    { movies.map(film => 
       <oneMovie key={film.id}  film={film}/> 
      ) }
    </div>
  )
}


export default movieList
