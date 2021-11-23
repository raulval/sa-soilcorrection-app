import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Input from "../../components/Input";
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
  const halSalvo = useSelector((state) => state.hidrogenioAluminio);
  const moSalvo = useSelector((state) => state.mo);
  const scmolSalvo = useSelector((state) => state.scmol);
  const ctccmolSalvo = useSelector((state) => state.ctccmol);
  const vatualSalvo = useSelector((state) => state.vatual);
  const moPercentualSalvo = useSelector((state) => state.moPercentual);
  const carbonoSalvo = useSelector((state) => state.carbono);

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
  const [hidrogenioAluminio, setHal] = useState();
  const [mo, setMo] = useState();
  const [scmol, setScmol] = useState();
  const [ctccmol, setCTCcmol] = useState();
  const [vatual, setVatual] = useState();
  const [moPercentual, setMoPercentual] = useState();
  const [carbono, setCarbono] = useState();

  const teores = {
    fosforo: fosforo,
    potassio: potassio,
    calcio: calcio,
    magnesio: magnesio,
    enxofre: enxofre,
    aluminio: aluminio,
    hidrogenioAluminio: hidrogenioAluminio,
    mo: mo,
  };

  function calcularTeores() {
    const headers = {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=UTF-8",
    };

    axios
      .post("http://localhost:8080/equilibrioteores", teores, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
        setScmol(res.data.scmol.toFixed(2));
        setCTCcmol(res.data.ctccmol.toFixed(2));
        setVatual(res.data.vatual.toFixed(2));
        setMoPercentual(res.data.mo.toFixed(2));
        setCarbono(res.data.carbono.toFixed(2));
      });

    dispatch({
      type: "TEORES",
      fosforo: fosforo,
      potassio: potassio,
      calcio: calcio,
      magnesio: magnesio,
      enxofre: enxofre,
      aluminio: aluminio,
      hidrogenioAluminio: hidrogenioAluminio,
      mo: mo,
      scmol: scmol,
      ctccmol: ctccmol,
      vatual: vatual,
      moPercentual: moPercentual,
      carbono: carbono,
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
              <Input
                label="Fósforo (mg.dm3 | mehlich)"
                type="number"
                placeholder="Fósforo"
                value={fosforo ? fosforo : fosforoSalvo}
                onChange={(e) => setFosforo(e.target.value)}
              />
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
              <Input
                label="Potássio (cmol)"
                type="number"
                placeholder="Potássio"
                value={potassio ? potassio : potassioSalvo}
                onChange={(e) => setPotassio(e.target.value)}
              />
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
              <Input
                label="Cálcio (cmol)"
                type="number"
                placeholder="Cálcio"
                value={calcio ? calcio : calcioSalvo}
                onChange={(e) => setCalcio(e.target.value)}
              />
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
              <Input
                label="Magnésio (cmol)"
                type="number"
                placeholder="Magnésio"
                value={magnesio ? magnesio : magnesioSalvo}
                onChange={(e) => setMagnesio(e.target.value)}
              />
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
              <Input
                label="Enxofre (mg.dm3)"
                type="number"
                placeholder="Enxofre"
                value={enxofre ? enxofre : enxofreSalvo}
                onChange={(e) => setEnxofre(e.target.value)}
              />
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
              <Input
                label="Alumínio"
                type="number"
                placeholder="Alumínio"
                value={aluminio ? aluminio : aluminioSalvo}
                onChange={(e) => setAluminio(e.target.value)}
              />
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
              <Input
                label="H + AL"
                type="number"
                placeholder="H + AL"
                value={hidrogenioAluminio ? hidrogenioAluminio : halSalvo}
                onChange={(e) => setHal(e.target.value)}
              />
            </Form>
          </Container>

          <Container className="container-teores">
            <Form>
              <Input
                label="M.O. (g.dm3)"
                type="number"
                placeholder="M.O."
                value={mo ? mo : moSalvo}
                onChange={(e) => setMo(e.target.value)}
              />
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
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>M.O. %</Form.Label>
                <Form.Control
                  value={moPercentual ? moPercentual : moPercentualSalvo}
                  onChange={(e) => setMoPercentual(e.target.value)}
                  disabled
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Carbono</Form.Label>
                <Form.Control
                  value={carbono ? carbono : carbonoSalvo}
                  onChange={(e) => setCarbono(e.target.value)}
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
