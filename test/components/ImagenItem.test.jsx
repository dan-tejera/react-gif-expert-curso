import { render, screen } from "@testing-library/react";
import { ImagenItem } from "../../src/components/ImagenItem";

const titulo = 'Titulo para pruebas';
const url = 'https://www.pruebas.com/imagenitem.html';

describe('Pruebas del componente <ImagenItem />', () => {

    test('Debe de hacer un match con el snapshot', () => {
        
        const { container } = render(<ImagenItem titulo={ titulo } url={ url } />);
        
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el url y el alt indicado', () => {
         
        const { container } = render(<ImagenItem titulo={ titulo } url={ url } />);
        screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( titulo );
        // Cuando evalamos más de una propiedad del mismo elemento, es mejor desestructurarlo
        // Desesctructoruramos //
        const { src, alt } = screen.getByRole('img'); // getByRole buscar por atributo en el render del componente
        expect( src ).toBe( url );
        expect( alt ).toBe( titulo );
    });

    test('Debe de existir el título en el componente', () => {

        const { container } = render(<ImagenItem titulo={ titulo } url={ url } />);
        expect( screen.getByText( titulo ) ).toBeTruthy(); //getByText buscar por texto en el render del componente
    });
});