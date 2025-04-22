// Custom Hook //

import { useEffect, useState } from "react";
import { obtenerGifs } from "../helpers/obtenerGifs";

export const useFetchGifs = ( categoria ) => {

  const [imagenes, setImagenes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImagenes = async () => {
    const nuevasImagenes = await obtenerGifs(categoria);
    setImagenes(nuevasImagenes);
    setIsLoading(false);
  };

  useEffect(() => {
      getImagenes();
  }, []) 
  

  return {
    imagenes,
    isLoading
  }

}