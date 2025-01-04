import { render, screen } from "@testing-library/react";

import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en GifItem", () => {
  const titulo = "Pruebas en GifItem";

  const url = "https://localhost/algo.jpg";

  render(<GifItem title={titulo} url={url} />);

  test("debe mostrar el componente correctamente", () => {
    const { container } = render(<GifItem title={titulo} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostar la imagen con el url y el alt indicado", () => {
    render(<GifItem title={titulo} url={url} />);

    // screen.debug();
    // expect(screen.getByRole('img').src).toBe(url);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(titulo);
  });

  test("debe mostar el titulo en el parrafo", () => {

    render(<GifItem title={titulo} url={url} />);
    
    expect(screen.getByText(titulo)).toBeTruthy();
  });
});
