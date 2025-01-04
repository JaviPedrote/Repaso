import { GifExpertApp } from "../src/GifExpertApp";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

describe("probando el GifsExpertApp", () => {
  
    test("debe de mostrar el componente correctamente con 2 categorias diferentes", async() => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Goku" } });
    fireEvent.submit(screen.getByRole("form"));
    await waitFor(() => expect(screen.getAllByRole("img").length).toBeGreaterThan(0));

    const images = screen.getAllByRole("img").length;

    fireEvent.change(input, { target: { value: "One Punch" } });
    fireEvent.submit(screen.getByRole("form"));
    await waitFor(() => expect(screen.getAllByRole("img").length).toBeGreaterThan(images));
    expect(1).toBe(1);
    expect(screen.getAllByRole("img").length).toBe(12);
  });

  test("debe de mostrar el componente correctamente con 2 categorias repetidas", async () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
  
    // Agregamos la primera categoría "Goku"
    fireEvent.change(input, { target: { value: "Goku" } });
    fireEvent.submit(screen.getByRole("form"));
    await waitFor(() => expect(screen.getAllByRole("img").length).toBeGreaterThan(0));
  
    const images = screen.getAllByRole("img").length;
  
    // Intentamos agregar la misma categoría "Goku"
    fireEvent.change(input, { target: { value: "Goku" } });
    fireEvent.submit(screen.getByRole("form"));
  
    // Verificamos que el número de imágenes sigue siendo igual
    await waitFor(() => expect(screen.getAllByRole("img").length).toBe(images));
  
    // Debug para verificar el DOM si es necesario
    screen.debug();
    expect(screen.getAllByRole("img").length).toBe(6); // Ajustar según el comportamiento esperado
  });
});
