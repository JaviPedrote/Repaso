/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03-examples/MultipleCustomHook';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHook />', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
        });

    
        render( <MultipleCustomHook /> );
        
        
        expect( screen.getByText('Cargando') );
        expect( screen.getByText('Informacion de pokemon') );
        
        const nextButton = screen.getByRole('button',{ name: 'Siguiente' });
        expect(nextButton.disabled).toBeFalsy();
        
    });
    
    test('debe de mostrar un Pokemon', () => {
        
        useFetch.mockReturnValue({
            data: [{
              id: 1,
              name: "Pikachu",
              sprites: {
                front_default: "front_default_url",
                front_shiny: "front_shiny_url",
                back_default: "back_default_url",
                back_shiny: "back_shiny_url",
              },
            }],
            isLoading: false,
          });
        
        render( <MultipleCustomHook /> );
        screen.debug();
        const nextButton = screen.getByRole('button',{ name: 'Siguiente' });
        expect(nextButton.disabled).toBeFalsy();
    });


    test('debe de llamar la función de incrementar', () => {

    
  useFetch.mockReturnValue({
        data: {
            id: 1,
            name: "Pikachu",
            sprites: {
              front_default: "front_default_url",
              front_shiny: "front_shiny_url",
              back_default: "back_default_url",
              back_shiny: "back_shiny_url",
            },
          },
          isLoading: false,
          hasError: null,
        });

        
        render( <MultipleCustomHook /> );
        const nextButton = screen.getByRole('button',{ name: 'Siguiente' });
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });

    
});