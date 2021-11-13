import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Dados from "../pages/dados/Dados";

describe("Testando página Dados", () => {
  it("Renderizando a pagina sem erros", () => {
    const { getByText } = render(<Dados />);
    expect(getByText("Soil Correction GUI")).toBeInTheDocument();
    expect(getByText("Dados Gerais")).toBeInTheDocument();
  });
  it("Renderizando inputs", () => {
    const { getByTestId } = render(<Dados />);
    expect(getByTestId("formBasicText")).toBeInTheDocument();
  });
  it("Renderizando botão", () => {
    const { getByRole } = render(<Dados />);
    expect(getByRole("button").textContent).toBe("Próximo");
  });
  it("É possível digitar nos inputs", () => {
    render(<Dados />);
    const input = screen.getByPlaceholderText("Nome do Produtor");
    fireEvent.change(input, { target: { value: "Teste" } });
    expect(input.value).toBe("Teste");
  });
});
