import React from 'react'

export const ImagenItem = ( {titulo, url, id} ) => {
  return (
    <div className='card'>
        <img src={ url } alt={ titulo }/>
        <p>{ titulo }</p>

    </div>
  )
}
