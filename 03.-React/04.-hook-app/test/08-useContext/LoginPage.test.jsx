/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import { UserContexto } from "../../src/08-useContext/context/UserContext";
import { LoginPage } from "../../src/08-useContext/LoginPage";


describe('Pruebas en <LoginPage />', () => {
    
    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContexto.Provider value={{ user: null }}>
                <LoginPage />
            </UserContexto.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe('null');


    });


    test('debe de llamar el setUser cuando se hace click en el boton', () => {
        
        const setUserMock = jest.fn();

        render(
            <UserContexto.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContexto.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( setUserMock ).toHaveBeenCalledWith({"email": "javi@google.com", "id": 123, "name": "Javier"})


    });


});