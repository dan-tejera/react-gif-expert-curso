import { render, screen } from "@testing-library/react";
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// Hacemos un mock del custom hook //
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas del componente <GifGrid />', () => {

    const miCategoria = 'Warhammer 40K';

    test('Debe de mostrar el loading inicialmente', () => {

        // Después de hacer el mock del custom hook hay que indicar que devuelve el array de imagenes y el texto cargando //
        /*
        retorna esto
         return {
            imagenes,
            isLoading
        }
        */
        useFetchGifs.mockReturnValue({
            imagenes: [],
            isLoading: true
        });

        render(<GifGrid categoria={ miCategoria } />);
        //screen.debug();
        // Evaluamos que exista el texto "cargando..." //
        expect( screen.getByText('Cargando...') ).toBeTruthy();
        // Evaluamos que exista la categoría //
        expect( screen.getByText( miCategoria ) ).toBeTruthy();
    });

    test('Debe de mostrar items cuando se cargan las imágenes useFetchGifs (Custom Hook)', () => {

        const misImagenes = [{
            id: 1,
            titulo: 'Roubute',
            url: 'http://roubute-40K.es'
        },
        {
            id: 2,
            titulo: 'Lion',
            url: 'http://lionel-40K.es'
        }
        ];

        useFetchGifs.mockReturnValue({
            imagenes: misImagenes,
            isLoading: false
        });

        render(<GifGrid categoria={ miCategoria } />);

        //screen.debug();

        // Tenemos cargadas dos imágenes //
        expect( screen.getAllByRole('img').length ).toBe(2);
    });

});