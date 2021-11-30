import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Input from "../../components/Input";
import "../../styles/correcaoCalcioMg.css";

export function CorrecaoCalcioMg() {
  const calcio = useSelector((state) => state.calcio);
  const magnesio = useSelector((state) => state.magnesio);
  const ctccmol = useSelector((state) => state.ctccmol);
  const aposCorrecaoFosforo = useSelector((state) => state.aposCorrecaoFosforo);
  const aposCorrecaoPotassio = useSelector(
    (state) => state.aposCorrecaoPotassio
  );

  const participacaoAtualCal = ((calcio * 100) / ctccmol).toFixed(2);
  const participacaoAtualMg = ((magnesio * 100) / ctccmol).toFixed(2);

  const [participacaoDesejada, setParticipacaoDesejada] = useState();
  const [fonteCorretivo, setFonteCorretivo] = useState();
  const [custoFonteCalMg, setCustoFonteCalMg] = useState();
  const [qtdAplicar, setQtdAplicar] = useState();
  const [custoHa, setCustoHa] = useState();
  const [prnt, setPRNT] = useState();
  const [teorCaO, setTeorCaO] = useState();
  const [qtdNutrienteA, setQtdNutrienteA] = useState();
  const [qtdNutrienteB, setQtdNutrienteB] = useState();
  const [nutrienteA, setNutrienteA] = useState();
  const [nutrienteB, setNutrienteB] = useState();

  const dadosCorrecao = {
    teorSolo: parseFloat(calcio),
    teorCao: parseFloat(teorCaO),
    prnt: parseFloat(prnt),
    fonteCalcioMagnesio: fonteCorretivo,
    custoFonteCalMg: parseFloat(custoFonteCalMg),
    participacaoAtual: (calcio * 100) / ctccmol,
    participacaoDesejada: parseFloat(participacaoDesejada),
  };

  function corrigir() {
    const headers = {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=UTF-8",
    };

    axios
      .post("http://localhost:8080/correcao/calciomagnesio", dadosCorrecao, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
        setQtdAplicar(res.data.qntAplicar.toFixed(2));
        setCustoHa(res.data.custoHa.toFixed(2));
        if (fonteCorretivo === "GESSO_AGRICOLA") {
          setNutrienteB("Enxofre");
          setQtdNutrienteB(
            res.data.nutrientesAdicionais[0].correcaoAdicional.toFixed(2)
          );
        }
      })
      .catch((error) => {
        console.log(error.message);
        return error;
      });

    // dispatch({
    //   type: "CORRECAO",
    //   aposCorrecaoFosforo: aposCorrecaoFosforo,
    //   aposCorrecaoPotassio: aposCorrecaoPotassio,
    //   aposCorrecaoCalcio: aposCorrecaoCalcio,
    //   aposCorrecaoMagnesio: aposCorrecaoMagnesio,
    // });
  }

  return (
    <div id="page-correcao-calmg">
      <Header />
      <div>
        <h2>Correção/Recuperação de Cálcio e Magnésio</h2>
      </div>
      <Container>
        <Row>
          <Container className="container-correcao-calmg">
            <h3>Cálcio</h3>
            <Form>
              <Form.Group>
                <Form.Label>
                  Participação atual do Cálcio na CTC do solo %
                </Form.Label>
                <Form.Control value={participacaoAtualCal} disabled />
              </Form.Group>
              <span>Ideal: 45% a 55%</span>
            </Form>
            <Form style={{ marginTop: "20px" }}>
              <Form.Group>
                <Form.Label>Após as correções %</Form.Label>
                <Form.Control value="0" disabled />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: "20px" }}>
              <Input
                label="Participação do Cálcio na CTC, desejada %"
                type="number"
                placeholder="Participação desejada na CTC"
                value={participacaoDesejada}
                onChange={(e) => setParticipacaoDesejada(e.target.value)}
              />
            </Form>
          </Container>

          <Container className="container-correcao-calmg">
            <h3>Magnésio</h3>
            <Form>
              <Form.Group>
                <Form.Label>
                  Participação atual do Magnésio na CTC do solo %
                </Form.Label>
                <Form.Control value={participacaoAtualMg} disabled />
              </Form.Group>
              <span>Ideal: 10% a 15%</span>
            </Form>
            <Form style={{ marginTop: "20px" }}>
              <Form.Group>
                <Form.Label>Após as correções %</Form.Label>
                <Form.Control value="0" disabled />
              </Form.Group>
            </Form>
          </Container>

          <Container className="container-correcao-calmg">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Fonte de Corretivo a utilizar</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setFonteCorretivo(e.target.value)}
                  required
                >
                  <option>Selecione uma Fonte de Corretivo</option>
                  <option value="CALCARIO_DOLOMITICO">
                    Calcário Dolomítico
                  </option>
                  <option value="CALCARIO_CALCITICO">Calcário Calcítico</option>
                  <option value="CALCARIO_CONCHA">Calcário de Concha</option>
                  <option value="GESSO_AGRICOLA">Gesso Agrícola</option>
                  <option value="HIDROXIDO_CALCIO">Hidróxido de cálcio</option>
                  <option value="CALCARIO_MAGNESIANO">
                    Calcário Magnesiano
                  </option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Container>

          <Container className="container-correcao-calmg">
            <Form>
              <Input
                label="PRNT %"
                type="number"
                placeholder="PRNT"
                value={prnt}
                onChange={(e) => setPRNT(e.target.value)}
              />
            </Form>
          </Container>

          <Container className="container-correcao-calmg">
            <Form>
              <Input
                label="Teor de CaO do corretivo %"
                type="number"
                placeholder="Teor de CaO"
                value={teorCaO}
                onChange={(e) => setTeorCaO(e.target.value)}
              />
            </Form>
          </Container>

          <Container className="container-correcao-calmg">
            <Form>
              <Input
                label="Custo da Fonte de Cálcio e Magnésio"
                type="number"
                placeholder="Custo da Fonte R$"
                value={custoFonteCalMg}
                onChange={(e) => setCustoFonteCalMg(e.target.value)}
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
        className="container-correcao-calmg"
        style={{ marginTop: "25px" }}
      >
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Quantidade a Aplicar (Ton./ha)</Form.Label>
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
