import { ImagenItem } from './ImagenItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ categoria }) => {  
  
  // Custom hook definido en el archivo useFetcGifs.js //
  const { imagenes, isLoading } = useFetchGifs( categoria );

  return (
    <>
        <h3>{ categoria }</h3>
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        <div className='card-grid'>
          { 
            imagenes.map( ( imagen ) => (
              <ImagenItem 
                    key={ imagen.id }
                    { ...imagen } // para pasarle todas las propiedades del objeto imagen al componente ImagenItem
              />
            ))            
          }
        </div>
    </>
  )
}
