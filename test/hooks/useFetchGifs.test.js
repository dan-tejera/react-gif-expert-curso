import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Pruebas del custom hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', () => {
        
        // renderHook para poder renderizar un hook directamente //
        const { result } = renderHook(() => useFetchGifs('Dragon Ball') );
        console.log( result );
        const { imagenes, isLoading } = result.current;

        //console.log(imagenes);

        // Evaluamos que en estado inical del hook no haya ninguna imagen //
        expect( imagenes.length ).toBe(0);
        // Evaluamos que exista is Loading //
        expect( isLoading ).toBeTruthy();
    });

    test('Debe de retornar un array de imágenes y el isLoading = false', async () => {
        
        // renderHook para poder renderizar un hook directamente //
        const { result } = renderHook(() => useFetchGifs('Dragon Ball') );
        console.log( result );

        // Espera a que las imágenes sean mayor a cero despues de disparar el hook //
        await waitFor(() => expect( result.current.imagenes.length).toBeGreaterThan(0) );
    
        const { imagenes, isLoading } = result.current;

        // Evaluamos que las imágenes sean mayor a cero //
        expect( imagenes.length ).toBeGreaterThan(0);
        // Evaluamos que ya no exista is Loading //
        expect( isLoading ).toBeFalsy();
    });
});