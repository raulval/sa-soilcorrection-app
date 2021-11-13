import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../pages/Home";

describe("Testando a pagina Home", () => {
  it("Renderizar imagem", () => {
    const { getByAltText } = render(<Home />);
    expect(getByAltText("IDR Paraná")).toBeInTheDocument();
  });
});
