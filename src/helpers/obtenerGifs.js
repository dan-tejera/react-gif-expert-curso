export const obtenerGifs = async ( categoria ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=PNgKvDbaIO7XaoaLhqIlfdi0KJO6taru&q=${ categoria }&limit=10`; 
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
  
    const imagenes = data.map( img => ({
        id: img.id,
        titulo: img.title,
        url: img.images.downsized_medium.url
    }))
    
    //console.log(imagenes);     
    return imagenes;
  };
  