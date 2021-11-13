import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import "../../styles/correcaoCalcioMg.css";

export function CorrecaoCalcioMg() {
  const calcio = useSelector((state) => state.calcio);
  const magnesio = useSelector((state) => state.magnesio);
  const ctccmol = useSelector((state) => state.ctccmol);

  const participacaoAtualCal = (
    (calcio / (ctccmol * 100)).toExponential(2).replace(/e\-[0-9]?/, "") * 10
  ).toFixed(2);

  const participacaoAtualMg = (
    (magnesio / (ctccmol * 100)).toExponential(2).replace(/e\-[0-9]?/, "") * 10
  ).toFixed(2);

  // const participacaoAposCal = (calcio + algumacoisa) / (ctccmol * 100);

  // const participacaoAposMg = (magnesio + algumacoisa) / (ctccmol * 100);

  const [participacaoDesejadaCal, setParticipacaoDesejadaCal] = useState();
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

  function corrigir() {}

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
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>
                  Participação do Cálcio na CTC, desejada %
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Participação desejada na CTC"
                  value={participacaoDesejadaCal}
                  onChange={(e) => setParticipacaoDesejadaCal(e.target.value)}
                  required
                />
              </Form.Group>
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
                  <option value="1">Calcário Dolomítico</option>
                  <option value="2">Calcário Calcítico</option>
                  <option value="3">Calcário de Concha</option>
                  <option value="4">Gesso Agrícola</option>
                  <option value="5">Hidróxido de cálcio</option>
                  <option value="6">Calcário Magnesiano</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Container>

          <Container className="container-correcao-calmg">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>PRNT %</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="PRNT"
                  value={prnt}
                  onChange={(e) => setPRNT(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Container>

          <Container className="container-correcao-calmg">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Teor de CaO do corretivo %</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Teor de CaO"
                  value={teorCaO}
                  onChange={(e) => setTeorCaO(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Container>

          <Container className="container-correcao-calmg">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Custo da Fonte de Cálcio e Magnésio</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Custo da Fonte R$"
                  value={custoFonteCalMg}
                  onChange={(e) => setCustoFonteCalMg(e.target.value)}
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
        </Row>
      </Container>
    </div>
  );
}
