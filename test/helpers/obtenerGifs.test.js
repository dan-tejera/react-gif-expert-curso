import { obtenerGifs } from "../../src/helpers/obtenerGifs";

describe('Pruebas de ka función obtenerGifs', () => {

    test('Debe de retornar un array de gifs', async() => {
        
        const  gifs = await obtenerGifs('Dragon Ball');
        //console.log(gifs);
        // Evaluamos que el array devuelva elementos más que cero //
        expect( gifs.length ).toBeGreaterThan( 0 );
        // Evaluamos la estructura de los objetos que va a devolver, por ejemplo utilizamos la posición 0 //
        expect( gifs[0] ).toEqual({
            id: expect.any( String ), // Devuelve un string en cada uno de los atributos //
            titulo: expect.any( String ),
            url: expect.any( String )
        });

    });

});