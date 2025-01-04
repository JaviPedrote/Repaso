import { fireEvent, render,screen } from '@testing-library/react';
import {AddCategory} from'../../src/components/AddCategory';


describe('Prueba en AddCategory', () => { 

    test('debe cambiar el valor de la caja texto',()=>{

        render( <AddCategory onNewCategory={()=>{}}/> );
        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { value: 'Goku' } });

        expect( input.value ).toBe('Goku');    
    });

    test('debe de llamar onNewCategory si el input tiene un valor' , () => {

        const inputValue = 'Goku';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={onNewCategory}/> );
        const inpu = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.change( inpu, { target: { value: inputValue } });
        fireEvent.submit( form );
        
        expect( inpu.value ).toBe(''); // Prueba que se haya lanzado el submit y sde haya limpiado el input
        expect( onNewCategory ).toHaveBeenCalled(); // Prueba que se haya llamado la función onNewCategory al menos una vez
        expect( onNewCategory ).toHaveBeenCalledTimes(1); // Prueba que se haya llamado la función onNewCategory una sola vez 
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); // Prueba que se haya llamado la función onNewCategory con el argumento correcto
    });

    test('no debe de llamar onNewCategory si el está vacío' , () => {

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={onNewCategory}/> );
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        
        expect( onNewCategory ).not.toHaveBeenCalled(); 
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
      
    });
    

})