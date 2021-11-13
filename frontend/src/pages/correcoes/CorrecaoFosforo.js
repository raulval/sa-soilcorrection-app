import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import "../../styles/correcaoFosforo.css";

export function CorrecaoFosforo() {
  const dispatch = useDispatch();
  const fosforo = useSelector((state) => state.fosforo);

  const [teorFosforo, setTeorFosforo] = useState();
  const [fonteFosforo, setFonteFosforo] = useState();
  const [custoFonteFosforo, setCustoFonteFosforo] = useState();
  const [eficienciaFosforo, setEficienciaFosforo] = useState();
  const [qtdAplicar, setQtdAplicar] = useState();
  const [custoHa, setCustoHa] = useState();
  const [qtdNutrienteA, setQtdNutrienteA] = useState();
  const [qtdNutrienteB, setQtdNutrienteB] = useState();
  const [nutrienteA, setNutrienteA] = useState();
  const [nutrienteB, setNutrienteB] = useState();

  const calcularQtdAplicar = (divisor) => {
    const res = (
      ((parseFloat(teorFosforo) - parseFloat(fosforo)) * 2 * 2.29 * 100) /
      (parseFloat(eficienciaFosforo) / 100) /
      divisor
    ).toFixed(2);
    setQtdAplicar(res);
    return res;
  };

  const calcularCustoHa = () => {
    const res = (
      (parseFloat(custoFonteFosforo) *
        ((parseFloat(qtdAplicar) * 2.42) / 1000)) /
      2.42
    ).toFixed(2);
    setCustoHa(res);
  };

  const calcularQtdNutrienteB = (multiplicador) => {
    const res = (
      (parseFloat(qtdAplicar) * 2.42 * multiplicador) /
      2.42
    ).toFixed(1);
    setQtdNutrienteB(res);
  };

  function corrigir() {
    if (fonteFosforo === "1") {
      setNutrienteA("Enxofre");
      setNutrienteB("Cálcio");
      calcularQtdAplicar(18);
      calcularCustoHa();
      calcularQtdNutrienteB(0.28);
      setQtdNutrienteA(
        ((parseFloat(qtdAplicar) * 2.42 * 0.1) / 2.42).toFixed(1)
      );
    } else if (fonteFosforo === "2") {
      setNutrienteA("");
      setNutrienteB("Cálcio");
      calcularQtdAplicar(41);
      calcularCustoHa();
      calcularQtdNutrienteB(0.2);
      setQtdNutrienteA(0);
    } else if (fonteFosforo === "3") {
      setNutrienteA("");
      setNutrienteB("Nitrogênio");
      calcularQtdAplicar(48);
      calcularCustoHa();
      calcularQtdNutrienteB(0.09);
      setQtdNutrienteA(0);
    } else if (fonteFosforo === "4") {
      setNutrienteA("");
      setNutrienteB("Nitrogênio");
      calcularQtdAplicar(45);
      calcularCustoHa();
      calcularQtdNutrienteB(0.16);
      setQtdNutrienteA(0);
    } else if (fonteFosforo === "5") {
      setNutrienteA("Magnésio");
      setNutrienteB("Cálcio");
      calcularQtdAplicar(18);
      calcularCustoHa();
      calcularQtdNutrienteB(0.28);
      setQtdNutrienteA((parseFloat(qtdAplicar) * 0.15).toFixed(1));
    } else if (fonteFosforo === "6") {
      setNutrienteA("");
      setNutrienteB("Cálcio");
      calcularQtdAplicar(33);
      calcularCustoHa();
      calcularQtdNutrienteB(0.52);
      setQtdNutrienteA(0);
    } else if (fonteFosforo === "7") {
      setNutrienteA("");
      setNutrienteB("Cálcio");
      calcularQtdAplicar(29);
      calcularCustoHa();
      calcularQtdNutrienteB(0.52);
      setQtdNutrienteA(0);
    } else if (fonteFosforo === "8") {
      setNutrienteA("");
      setNutrienteB("Cálcio");
      calcularQtdAplicar(32);
      calcularCustoHa();
      calcularQtdNutrienteB(0.45);
      setQtdNutrienteA(0);
    } else if (fonteFosforo === "9") {
      setNutrienteA("");
      setNutrienteB("Cálcio");
      calcularQtdAplicar(24);
      calcularCustoHa();
      calcularQtdNutrienteB(0.28);
      setQtdNutrienteA(0);
    } else if (fonteFosforo === "10") {
      setNutrienteA("");
      setNutrienteB("Cálcio");
      calcularQtdAplicar(18.5);
      calcularCustoHa();
      calcularQtdNutrienteB(0.34);
      setQtdNutrienteA(0);
    } else if (fonteFosforo === "11") {
      setNutrienteA("");
      setNutrienteB("");
      calcularQtdAplicar(52);
      calcularCustoHa();
      calcularQtdNutrienteB(0);
      setQtdNutrienteA(0);
    } else if (fonteFosforo === "12") {
      setNutrienteA("Enxofre");
      setNutrienteB("Cálcio");
      calcularQtdAplicar(18);
      calcularCustoHa();
      calcularQtdNutrienteB(0.18);
      setQtdNutrienteA(
        ((parseFloat(qtdAplicar) * 2.42 * 0.11) / 2.42).toFixed(1)
      );
    }

    dispatch({
      type: "CORRECAO",
      aposCorrecaoFosforo: teorFosforo,
    });
  }

  return (
    <div id="page-correcao-fosforo">
      <Header />
      <div>
        <h2>Correção/Recuperação de Fósforo</h2>
      </div>
      <Container>
        <Row>
          <Container className="container-correcao-fosforo">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Teor de Fósforo a atingir</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Teor de Fósforo"
                  value={teorFosforo}
                  onChange={(e) => setTeorFosforo(e.target.value)}
                  required
                />
              </Form.Group>
              {teorFosforo < 9 && (
                <span style={{ color: "red" }}>
                  Teor de fósforo tem que ser maior ou igual a 9
                </span>
              )}
            </Form>
          </Container>

          <Container className="container-correcao-fosforo">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Fonte de Fósforo a utilizar</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setFonteFosforo(e.target.value)}
                  required
                >
                  <option>Selecione uma Fonte de Fósforo</option>
                  <option value="1">Superfosfato Simples</option>
                  <option value="2">Superfosfato Triplo</option>
                  <option value="3">MAP</option>
                  <option value="4">DAP</option>
                  <option value="5">Yoorin</option>
                  <option value="6">Fosfato Reat. Arad</option>
                  <option value="7">Fosfato Reat. de Gafsa</option>
                  <option value="8">Fosfato Reat. Daoui</option>
                  <option value="9">Fosf. Nat. Patos Minas</option>
                  <option value="10">Escória de Thomas</option>
                  <option value="11">Ácido Fosfórico</option>
                  <option value="12">Multifosfato Magnesiano</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Container>

          <Container className="container-correcao-fosforo">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Custo da Fonte de Fósforo (R$)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Custo da Fonte R$"
                  value={custoFonteFosforo}
                  onChange={(e) => setCustoFonteFosforo(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Container>

          <Container className="container-correcao-fosforo">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Eficiência do fósforo %</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Sugerimos uma eficiência entre 70% a 90%"
                  value={eficienciaFosforo}
                  onChange={(e) => setEficienciaFosforo(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Container>
        </Row>

        <Button variant="primary" onClick={corrigir} className="btn">
          Corrigir
        </Button>
      </Container>
      <Container
        className="container-correcao-fosforo"
        style={{ marginTop: "25px" }}
      >
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Quantidade a Aplicar (kg/hectare)</Form.Label>
                <Form.Control value={qtdAplicar} disabled />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Custo (R$/ha)</Form.Label>
                <Form.Control value={custoHa} disabled />
              </Form.Group>
            </Form>
          </Col>
          <Form>
            <h4 style={{ marginTop: "30px" }}>
              Essa correção de Fósforo, fornecerá também (kg/ha)
            </h4>
            <Form.Group>
              <Form.Label>{nutrienteA}</Form.Label>
              <Form.Control value={qtdNutrienteA} disabled />
              <Form.Label>{nutrienteB}</Form.Label>
              <Form.Control value={qtdNutrienteB} disabled />
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </div>
  );
}
