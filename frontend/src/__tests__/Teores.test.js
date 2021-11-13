import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Teores from "../pages/dados/Teores";

describe("Testando página Teores", () => {
  it("Renderizando a pagina sem erros", () => {
    const { getByText } = render(<Teores />);
    expect(getByText("Soil Correction GUI")).toBeInTheDocument();
    expect(getByText("Teores")).toBeInTheDocument();
  });
  it("Pegando inputs", () => {
    const { getByTestId } = render(<Teores />);
    expect(getByTestId("formBasicText")).toBeInTheDocument();
  });
  it("Pegando botão", () => {
    const { getByRole } = render(<Teores />);
    expect(getByRole("button").textContent).toBe("Salvar");
  });
});
