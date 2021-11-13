import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import "../../styles/correcaoPotassio.css";

export function CorrecaoPotassio() {
  const history = useHistory();
  const dispatch = useDispatch();
  const potassio = useSelector((state) => state.potassio);
  const ctccmol = useSelector((state) => state.ctccmol);

  const participacaoAtual = (potassio / (ctccmol * 100))
    .toExponential(1)
    .replace(/e\-[0-9]?/, "");

  const [participacaoDesejadaPot, setParticipacaoDesejadaPot] = useState();
  const [fontePotassio, setFontePotassio] = useState();
  const [custoFontePotassio, setCustoFontePotassio] = useState();
  const [participacaoApos, setParticipacaoApos] = useState();
  const [qtdAplicar, setQtdAplicar] = useState();
  const [custoHa, setCustoHa] = useState();
  const [qtdNutrienteA, setQtdNutrienteA] = useState();
  const [qtdNutrienteB, setQtdNutrienteB] = useState();
  const [nutrienteA, setNutrienteA] = useState();
  const [nutrienteB, setNutrienteB] = useState();

  const calcularQtdAplicar = (divisor) => {
    const res = (
      (((potassio * parseFloat(participacaoDesejadaPot)) /
        parseFloat(participacaoAtual) -
        potassio) *
        39.1 *
        10 *
        2 *
        1.2 *
        100) /
      0.85 /
      divisor
    ).toFixed(2);

    setQtdAplicar(res);
  };

  const calcularCustoHa = (divisor) => {
    const res = (
      (((((((potassio * parseFloat(participacaoDesejadaPot)) /
        parseFloat(participacaoAtual) -
        potassio) *
        39.1 *
        10 *
        2 *
        1.2 *
        100) /
        (85 / 100)) *
        100) /
        divisor) *
        2.42) /
      1000 /
      2.42
    ).toFixed(2);
    setCustoHa(res);
  };

  const calcularQtdNutrienteA = (multiplicador) => {
    const res = (parseFloat(qtdAplicar) * multiplicador).toFixed(2);
    setQtdNutrienteA(res);
  };

  const corrigir = () => {
    if (fontePotassio === "1") {
      setNutrienteA("");
      setNutrienteB("");
      calcularQtdAplicar(58);
      calcularCustoHa(58);
      calcularQtdNutrienteA(0);
    } else if (fontePotassio === "2") {
      setNutrienteA("Enxofre");
      setNutrienteB("");
      calcularQtdAplicar(52);
      calcularCustoHa(52);
      calcularQtdNutrienteA(0.17);
    } else if (fontePotassio === "3") {
      setNutrienteA("Enxofre");
      setNutrienteB("Magnésio");
      calcularQtdAplicar(22);
      calcularCustoHa(22);
      calcularQtdNutrienteA(0.22);
    }

    const aposCorrecaoPotassio = (
      (potassio * parseFloat(participacaoDesejadaPot)) /
      participacaoAtual
    ).toFixed(2);

    dispatch({
      type: "CORRECAO",
      aposCorrecaoPotassio: aposCorrecaoPotassio,
    });

    // history.push("/teores");
  };
  return (
    <div id="page-correcao-potassio">
      <Header />
      <div>
        <h2>Correção/Recuperação de Potássio</h2>
      </div>
      <Container>
        <Row>
          <Container className="container-correcao-potassio">
            <Form>
              <Form.Group>
                <Form.Label>
                  Participação atual do Potássio na CTC do solo %
                </Form.Label>
                <Form.Control value={participacaoAtual} disabled />
              </Form.Group>
            </Form>
          </Container>

          <Container className="container-correcao-potassio">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>
                  Participação do Potássio na CTC, desejada %
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Participação desejada na CTC"
                  value={participacaoDesejadaPot}
                  onChange={(e) => setParticipacaoDesejadaPot(e.target.value)}
                  required
                />
              </Form.Group>
              <span>Participação ideal do Potássio na CTC: 3.0%</span>
            </Form>
          </Container>

          <Container className="container-correcao-potassio">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Fonte de Potássio a utilizar</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setFontePotassio(e.target.value)}
                  required
                >
                  <option>Selecione uma Fonte de Potássio</option>
                  <option value="1">Cloreto de Potássio</option>
                  <option value="2">Superfosfato Triplo</option>
                  <option value="3">Sulfato de Potássio/Magnésio </option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Container>

          <Container className="container-correcao-potassio">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Custo da Fonte de Potássio</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Custo da Fonte R$"
                  value={custoFontePotassio}
                  onChange={(e) => setCustoFontePotassio(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Container>
        </Row>

        <Button
          variant="primary"
          type="submit"
          onClick={corrigir}
          className="btn"
        >
          Corrigir
        </Button>
      </Container>
      <Container
        className="container-correcao-potassio"
        style={{ marginTop: "25px" }}
      >
        <Row>
          <Form style={{ marginBottom: "20px" }}>
            <Form.Group>
              <Form.Label>
                Participação do Potássio na CTC, após correção %
              </Form.Label>
              <Form.Control value={participacaoDesejadaPot} disabled />
            </Form.Group>
          </Form>
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
            {fontePotassio === "3" && (
              <span style={{ color: "red" }}>
                Atenção para o teor de Magnésio no solo
              </span>
            )}
          </Form>
        </Row>
      </Container>
    </div>
  );
}
