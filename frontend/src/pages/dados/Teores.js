import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import "../../styles/teores.css";

export function Teores() {
  const dispatch = useDispatch();
  const textura = useSelector((state) => state.textura);
  const fosforoSalvo = useSelector((state) => state.fosforo);
  const potassioSalvo = useSelector((state) => state.potassio);
  const calcioSalvo = useSelector((state) => state.calcio);
  const magnesioSalvo = useSelector((state) => state.magnesio);
  const enxofreSalvo = useSelector((state) => state.enxofre);
  const aluminioSalvo = useSelector((state) => state.aluminio);
  const halSalvo = useSelector((state) => state.hal);
  const scmolSalvo = useSelector((state) => state.scmol);
  const ctccmolSalvo = useSelector((state) => state.ctccmol);
  const vatualSalvo = useSelector((state) => state.vatual);

  const aposCorrecaoFosforo = useSelector((state) => state.aposCorrecaoFosforo);
  const aposCorrecaoPotassio = useSelector(
    (state) => state.aposCorrecaoPotassio
  );

  const [fosforo, setFosforo] = useState();
  const [potassio, setPotassio] = useState();
  const [calcio, setCalcio] = useState();
  const [magnesio, setMagnesio] = useState();
  const [enxofre, setEnxofre] = useState();
  const [aluminio, setAluminio] = useState();
  const [hal, setHal] = useState();
  const [scmol, setScmol] = useState();
  const [ctccmol, setCTCcmol] = useState();
  const [vatual, setVatual] = useState();

  function calcularTeores() {
    const resScmol =
      parseFloat(potassio) + parseFloat(calcio) + parseFloat(magnesio);
    setScmol(resScmol);
    const resCTCcmol = resScmol + parseFloat(hal);
    setCTCcmol(resCTCcmol);
    const resVatual = ((100 * resScmol) / resCTCcmol).toFixed(2);
    setVatual(resVatual);

    dispatch({
      type: "TEORES",
      fosforo: fosforo,
      potassio: potassio,
      calcio: calcio,
      magnesio: magnesio,
      enxofre: enxofre,
      aluminio: aluminio,
      hal: hal,
      scmol: resScmol,
      ctccmol: resCTCcmol,
      vatual: resVatual,
    });
  }

  return (
    <div id="page-teores">
      <Header />
      <div>
        <h2>Teores</h2>
      </div>
      <Container>
        <Row>
          <Container className="container-teores">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Fósforo (mg.dm3 | mehlich)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Fósforo"
                  value={fosforo ? fosforo : fosforoSalvo}
                  onChange={(e) => setFosforo(e.target.value)}
                />
              </Form.Group>
              {textura === "1" && (
                <span style={{ color: "blue" }}>Valor ideal = 9,0</span>
              )}
              {textura === "2" && (
                <span style={{ color: "blue" }}>Valor ideal = 12,0</span>
              )}
              {aposCorrecaoFosforo && (
                <span style={{ color: "green", display: "flex" }}>
                  Após correção = {aposCorrecaoFosforo}
                </span>
              )}
            </Form>
          </Container>

          <Container className="container-teores">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Potássio (cmol)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Potássio"
                  value={potassio ? potassio : potassioSalvo}
                  onChange={(e) => setPotassio(e.target.value)}
                />
              </Form.Group>
              {textura === "1" && (
                <span style={{ color: "blue" }}>Valor ideal = 0,35</span>
              )}
              {textura === "2" && (
                <span style={{ color: "blue" }}>Valor ideal = 0,25</span>
              )}
              {aposCorrecaoPotassio && (
                <span style={{ color: "green", display: "flex" }}>
                  Após correção = {aposCorrecaoPotassio}
                </span>
              )}
            </Form>
          </Container>

          <Container className="container-teores">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Cálcio (cmol)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Cálcio"
                  value={calcio ? calcio : calcioSalvo}
                  onChange={(e) => setCalcio(e.target.value)}
                />
              </Form.Group>
              {textura === "1" && (
                <span style={{ color: "blue" }}>Valor ideal = 6,0</span>
              )}
              {textura === "2" && (
                <span style={{ color: "blue" }}>Valor ideal = 4,0</span>
              )}
            </Form>
          </Container>

          <Container className="container-teores">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Magnésio (cmol)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Magnésio"
                  value={magnesio ? magnesio : magnesioSalvo}
                  onChange={(e) => setMagnesio(e.target.value)}
                />
              </Form.Group>
              {textura === "1" && (
                <span style={{ color: "blue" }}>Valor ideal = 1,5</span>
              )}
              {textura === "2" && (
                <span style={{ color: "blue" }}>Valor ideal = 1,0</span>
              )}
            </Form>
          </Container>

          <Container className="container-teores">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Enxofre (mg.dm3)</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enxofre"
                  value={enxofre ? enxofre : enxofreSalvo}
                  onChange={(e) => setEnxofre(e.target.value)}
                />
              </Form.Group>
              {textura === "1" && (
                <span style={{ color: "blue" }}>Valor ideal = 9,0</span>
              )}
              {textura === "2" && (
                <span style={{ color: "blue" }}>Valor ideal = 6,0</span>
              )}
            </Form>
          </Container>

          <Container className="container-teores">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>Alumínio</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Alumínio"
                  value={aluminio ? aluminio : aluminioSalvo}
                  onChange={(e) => setAluminio(e.target.value)}
                />
              </Form.Group>
              {textura === "1" && (
                <span style={{ color: "blue" }}>Valor ideal = 0,0</span>
              )}
              {textura === "2" && (
                <span style={{ color: "blue" }}>Valor ideal = 0,0</span>
              )}
            </Form>
          </Container>

          <Container className="container-teores">
            <Form>
              <Form.Group className="mb-4" controlId="formBasicNumber">
                <Form.Label>H + AL</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="H + AL"
                  value={hal ? hal : halSalvo}
                  onChange={(e) => setHal(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Container>
        </Row>
        <Button variant="primary" onClick={calcularTeores} className="btn">
          Salvar
        </Button>
      </Container>
      <Container className="container-teores" style={{ marginTop: "25px" }}>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>S cmol</Form.Label>
                <Form.Control
                  value={scmol ? scmol : scmolSalvo}
                  onChange={(e) => setScmol(e.target.value)}
                  disabled
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>CTC cmol</Form.Label>
                <Form.Control
                  value={ctccmol ? ctccmol : ctccmolSalvo}
                  onChange={(e) => setCTCcmol(e.target.value)}
                  disabled
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>V% atual</Form.Label>
                <Form.Control
                  value={vatual ? vatual : vatualSalvo}
                  onChange={(e) => setVatual(e.target.value)}
                  disabled
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
