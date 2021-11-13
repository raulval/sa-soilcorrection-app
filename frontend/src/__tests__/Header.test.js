import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Header from "../components/Header/index";

describe("Testando o Header", () => {
  it("Renderizar Header", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Soil Correction GUI")).toBeInTheDocument();
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Dados")).toBeInTheDocument();
    expect(getByText("Correção do Solo")).toBeInTheDocument();
  });
});
