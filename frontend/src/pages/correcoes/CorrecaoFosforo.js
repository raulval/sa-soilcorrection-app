import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Input from "../../components/Input";
import "../../styles/correcaoFosforo.css";

export function CorrecaoFosforo() {
  const dispatch = useDispatch();
  const fosforo = useSelector((state) => state.fosforo);
  const aposCorrecaoPotassio = useSelector(
    (state) => state.aposCorrecaoPotassio
  );

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

  const dadosCorrecao = {
    fosforo: fosforo,
    teorFosforo: parseFloat(teorFosforo),
    fonteFosforo: fonteFosforo,
    custoFonteFosforo: parseFloat(custoFonteFosforo),
    eficienciaFosforo: parseFloat(eficienciaFosforo),
  };

  function corrigir() {
    const headers = {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=UTF-8",
    };

    axios
      .post("http://localhost:8080/correcao/fosforo", dadosCorrecao, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
        setQtdAplicar(res.data.qntAplicar.toFixed(2));
        setCustoHa(res.data.custoHa.toFixed(2));
        if (fonteFosforo === "SUPERFOSFATO_SIMPLES") {
          setNutrienteA("Enxofre");
          setNutrienteB("Cálcio");
          setQtdNutrienteA(
            res.data.nutrientesAdicionais[0].correcaoAdicional.toFixed(2)
          );
          setQtdNutrienteB(
            res.data.nutrientesAdicionais[1].correcaoAdicional.toFixed(2)
          );
        } else if (fonteFosforo === "SUPERFOSFATO_TRIPLO") {
          setNutrienteA("");
          setNutrienteB("Cálcio");
          setQtdNutrienteB(res.data.nutrientesAdicionais[0].correcaoAdicional);
        } else if (fonteFosforo === "MAP") {
          setNutrienteA("");
          setNutrienteB("Nitrogênio");
          setQtdNutrienteB(res.data.nutrientesAdicionais[0].correcaoAdicional);
        }
      });

    dispatch({
      type: "CORRECAO",
      aposCorrecaoPotassio: aposCorrecaoPotassio,
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
              <Input
                label="Teor de Fósforo a atingir"
                type="number"
                placeholder="Teor de Fósforo"
                value={teorFosforo}
                onChange={(e) => setTeorFosforo(e.target.value)}
              />
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
                  <option value="SUPERFOSFATO_SIMPLES">
                    Superfosfato Simples
                  </option>
                  <option value="SUPERFOSFATO_TRIPLO">
                    Superfosfato Triplo
                  </option>
                  <option value="MAP">MAP</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Container>

          <Container className="container-correcao-fosforo">
            <Form>
              <Input
                label="Custo da Fonte de Fósforo (R$)"
                type="number"
                placeholder="Custo da Fonte R$"
                value={custoFonteFosforo}
                onChange={(e) => setCustoFonteFosforo(e.target.value)}
              />
            </Form>
          </Container>

          <Container className="container-correcao-fosforo">
            <Form>
              <Input
                label="Eficiência do fósforo %"
                type="number"
                placeholder="Sugerimos uma eficiência entre 70% a 90%"
                value={eficienciaFosforo}
                onChange={(e) => setEficienciaFosforo(e.target.value)}
              />
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
