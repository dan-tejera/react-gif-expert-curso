import { useState } from 'react';
import { AddCategoria, GifGrid } from './components'

export const GifExpertApp = () => {

  const [categorias, setCategorias] = useState( ['Dragon Ball'] );

  const agregarCategoria = ( nuevaCategoria ) => {   
    
    if ( categorias.includes( nuevaCategoria ) ) return; // Evita que se agregue una categoria repetida

    // setCategorias( [ 'Naruto', ...categorias ] ); // ... es el operador spread, que permite copiar el contenido de un array en otro. 
    // setCategorias( (cats) => [...cats, 'Naruto'] ); // ... es el operador spread, que permite copiar el contenido de un array en otro.
    // console.log( nuevaCategoria );
    setCategorias( [nuevaCategoria, ...categorias] );

  }

  //console.log( categorias );

  return (
    <>
        <h1>GifExpertApp</h1>
        
        <AddCategoria onNuevaCategoria={ agregarCategoria } 
            //setCategorias={ setCategorias }
        />

        {   categorias.map( (categoria) => (
            <GifGrid 
                key={ categoria } 
                categoria={ categoria } 
            />) 
            )
        }

    </>
  )
}
