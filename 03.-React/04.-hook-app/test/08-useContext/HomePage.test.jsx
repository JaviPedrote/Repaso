/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { UserContexto } from '../../src/08-useContext/context/UserContext';
import { HomePage } from '../../src/08-useContext/HomePage';


describe('Pruebas en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Fernando'
    }

    test('debe de mostrar el componente sin el usuario', () => {
        
        render( 
            <UserContexto.Provider value={{ user: null }}>
                <HomePage /> 
            </UserContexto.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect( preTag.innerHTML ).toBe( 'null' );
        // screen.debug()
    });


    test('debe de mostrar el componente CON el usuario', () => {
        
        render( 
            <UserContexto.Provider value={{ user }}>
                <HomePage /> 
            </UserContexto.Provider>
        );

        const preTag = screen.getByLabelText('pre'); // aria-label
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( `${user.id}` );
        screen.debug()
    });
    
});