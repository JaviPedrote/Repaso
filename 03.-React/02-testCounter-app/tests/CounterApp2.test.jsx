import { render , screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en el <CounterApp />', () => {

    const value = 100;


    test('debe de hacer match con el snapshot', () => {
        
        const {container} =render(<CounterApp value={value} />);
        expect(container).toMatchSnapshot();
    });

    test('debe tener como valor inicial 100', () => {
        
        render(<CounterApp value={value} />);
        expect(screen.getByText(value)).toBeTruthy();
    });
});