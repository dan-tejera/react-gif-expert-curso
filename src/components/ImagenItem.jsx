import React from 'react'
import PropTypes from 'prop-types';

export const ImagenItem = ( {titulo, url, id} ) => {
  return (
    <div className='card'>
        <img src={ url } alt={ titulo }/>
        <p>{ titulo }</p>

    </div>
  )
}

ImagenItem.propTypes = {
  titulo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
