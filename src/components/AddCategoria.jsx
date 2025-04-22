import { useState } from "react"

export const AddCategoria = ({ onNuevaCategoria }) => {
  
  const [inputValor, setInputValor] = useState('');

  const cambiandoElInputValor = ( evento ) => {
    // console.log( evento.target.value );
    setInputValor( evento.target.value )
  }

  const onSumbit = ( evento ) => {
    evento.preventDefault(); // Evita que se recargue la pagina al enviar el formulario
    //console.log( inputValor );

    if( inputValor.trim().length <= 1 ) return; // Evita que se agregue una categoria vacia o con solo espacios en blanco

    //setCategorias( (categorias) => [inputValor, ...categorias] ); // ... es el operador spread, que permite copiar el contenido de un array en otro.

    onNuevaCategoria( inputValor ); // Llama a la funcion onNuevaCategoria que se pasa como prop desde el componente padre GifExpertApp

    setInputValor(''); // Limpia el input al enviar el formulario
  }

  return (
    <form onSubmit={ onSumbit }>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValor }
            onChange={ cambiandoElInputValor }
        />
    </form>
  )
}
