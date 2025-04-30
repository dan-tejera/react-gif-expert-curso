import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategoria } from "../../src/components/AddCategoria"

describe('Pruebas del componente <AddCategoria />', () => {
    
    test('Debe de cambiar el valor de la caja de texto', () => {

        render( <AddCategoria onNuevaCategoria={ () => {} } /> );
        
        // Buscamos con getByRole el campo del formulario //
        const campo = screen.getByRole('textbox');

        //console.log( campo );

        // Disparar el evento del input //
        fireEvent.input( campo, { target: { value: 'Goku' } });

        expect( campo.value ).toBe('Goku');
        //screen.debug();
    });

    test('Debe de llamar onNuevaCategoria si el input tiene algún valor', () => {

        const valorCampo = 'Goku';

        // Esta jest function es un mock de la función real del componente //
        const onNuevaCategoria = jest.fn();

        render( <AddCategoria onNuevaCategoria={ onNuevaCategoria } /> );

        const campo = screen.getByRole('textbox');
        const formulario = screen.getByRole('form'); // form no lo encuentra, es necesario poner un aria-label en el componente //

        // Disparar el evento del input //
        fireEvent.input( campo, { target: { value: valorCampo } });

        // Disparamos el evento del formulario //
        fireEvent.submit( formulario );
        
        //screen.debug();

        // Después de lanzar el evento submit, el campo pasa a ser un string vacío. Comprobamos eso //
        expect( campo.value ).toBe('');
        
        // Evaluamos que la función ha sido llamada //
        expect( onNuevaCategoria ).toHaveBeenCalled();
        // La función sólo ha sido llamada una única vez //
        expect( onNuevaCategoria ).toHaveBeenCalledTimes(1);
        // Evaluamos que la función ha sido llamada con el valor del campo //
        expect( onNuevaCategoria ).toHaveBeenCalledWith( valorCampo );
    });

    test('No debe llamar a la función onNuevaCategoria() si el input text está vacío', () => {

        // Esta jest function es un mock de la función real del componente //
        const onNuevaCategoria = jest.fn();

        render( <AddCategoria onNuevaCategoria={ onNuevaCategoria } /> );

        const campo = screen.getByRole('textbox');
        const formulario = screen.getByRole('form'); // form no lo encuentra, es necesario poner un aria-label en el componente //

        // Disparamos el evento del formulario //
        fireEvent.submit( formulario );

        // El campo es vacío //
        expect( campo.value ).toBe('');
        
        // La función onNuevaCategoría ha sido llamada 0 veces //
        expect( onNuevaCategoria ).toHaveBeenCalledTimes(0);
        // La función no ha sido llamada //
        expect( onNuevaCategoria ).not.toHaveBeenCalled();

    });
});