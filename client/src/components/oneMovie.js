import React from 'react'
import "../CSS/style.css" 

const oneMovie = ({film}) => {
  return (
    <div>
      <img src={film.image} alt="" />
    </div>
  )
}

export default oneMovie
