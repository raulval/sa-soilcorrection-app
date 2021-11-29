import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import Input from "../../components/Input";
import "../../styles/correcaoPotassio.css";

export function CorrecaoPotassio() {
  const history = useHistory();
  const dispatch = useDispatch();
  const potassio = useSelector((state) => state.potassio);
  const ctccmol = useSelector((state) => state.ctccmol);
  const aposCorrecaoFosforo = useSelector((state) => state.aposCorrecaoFosforo);

  const participacaoAtual = ((potassio * 100) / ctccmol).toFixed(2);

  const [participacaoDesejada, setParticipacaoDesejada] = useState();
  const [fontePotassio, setFontePotassio] = useState();
  const [custoFontePotassio, setCustoFontePotassio] = useState();
  const [participacaoApos, setParticipacaoApos] = useState();
  const [qtdAplicar, setQtdAplicar] = useState();
  const [custoHa, setCustoHa] = useState();
  const [qtdNutrienteA, setQtdNutrienteA] = useState();
  const [qtdNutrienteB, setQtdNutrienteB] = useState();
  const [nutrienteA, setNutrienteA] = useState();
  const [nutrienteB, setNutrienteB] = useState();

  const dadosCorrecao = {
    teorSolo: parseFloat(potassio),
    fontePotassio: fontePotassio,
    custoFontePotassio: parseFloat(custoFontePotassio),
    participacaoAtual: (potassio * 100) / ctccmol / 100,
    participacaoDesejada: parseFloat(participacaoDesejada) / 100,
  };

  const corrigir = () => {
    const headers = {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=UTF-8",
    };

    axios
      .post("http://localhost:8080/correcao/potassio", dadosCorrecao, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
        setQtdAplicar(res.data.qntAplicar.toFixed(2));
        setCustoHa(res.data.custoHa.toFixed(2));

        if (fontePotassio === "CLORETO_POTASSIO") {
          setNutrienteA("");
          setNutrienteB("");
          setQtdNutrienteA(0);
          setQtdNutrienteB(0);
        } else if (fontePotassio === "SULFATO_POTASSIO") {
          setNutrienteA("Enxofre");
          setNutrienteB("");
          setQtdNutrienteA(
            res.data.nutrientesAdicionais[0].correcaoAdicional.toFixed(2)
          );
          setQtdNutrienteB(0);
        } else if (fontePotassio === "SULFATO_POTASSIO_MAGNESIO") {
          setNutrienteA("Enxofre");
          setNutrienteB("Magnésio");
          setQtdNutrienteA(
            res.data.nutrientesAdicionais[0].correcaoAdicional.toFixed(2)
          );
          setQtdNutrienteB(
            res.data.nutrientesAdicionais[1].correcaoAdicional.toFixed(2)
          );
        }
      });

    const aposCorrecaoPotassio = (
      (potassio * parseFloat(participacaoDesejada)) /
      participacaoAtual
    ).toFixed(2);

    dispatch({
      type: "CORRECAO",
      aposCorrecaoFosforo: aposCorrecaoFosforo,
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
              <Input
                label="Participação do Potássio na CTC, desejada %"
                type="number"
                placeholder="Participação desejada na CTC"
                value={participacaoDesejada}
                onChange={(e) => setParticipacaoDesejada(e.target.value)}
              />
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
                  <option value="CLORETO_POTASSIO">Cloreto de Potássio</option>
                  <option value="SULFATO_POTASSIO">Sulfato de Potássio</option>
                  <option value="SULFATO_POTASSIO_MAGNESIO">
                    Sulfato de Potássio/Magnésio
                  </option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Container>

          <Container className="container-correcao-potassio">
            <Form>
              <Input
                label="Custo da Fonte de Potássio"
                type="number"
                placeholder="Custo da Fonte R$"
                value={custoFontePotassio}
                onChange={(e) => setCustoFontePotassio(e.target.value)}
              />
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
              <Form.Control value={participacaoDesejada} disabled />
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
            {fontePotassio === "SULFATO_POTASSIO_MAGNESIO" && (
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
