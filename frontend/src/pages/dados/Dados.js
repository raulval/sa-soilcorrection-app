import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Header from "../../components/Header";
import Input from "../../components/Input";
import "../../styles/dados.css";

export function Dados() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [produtor, setProdutor] = useState();
  const [data, setData] = useState();
  const [municipio, setMunicipio] = useState();
  const [lote, setLote] = useState();
  const [areaTotal, setAreaTotal] = useState();
  const [talhao, setTalhao] = useState();
  const [areaTalhao, setAreaTalhao] = useState();
  const [matriculaLote, setMatriculaLote] = useState();
  const [textura, setTextura] = useState();
  const [cultivo, setCultivo] = useState();
  const [responsavel, setResponsavel] = useState();
  const [profundidade, setProfundidade] = useState();
  const [resultado, setResultado] = useState();

  function handleSubmit() {
    dispatch({
      type: "DADOS",
      produtor: produtor,
      data: data,
      municipio: municipio,
      lote: lote,
      areaTotal: areaTotal,
      talhao: talhao,
      areaTalhao: areaTalhao,
      matriculaLote: matriculaLote,
      textura: textura,
      cultivo: cultivo,
      responsavel: responsavel,
      profundidade: profundidade,
      resultado: resultado,
    });
    history.push("/teores");
  }

  return (
    <div id="page-dados">
      <Header />
      <div>
        <h2>Dados Gerais</h2>
      </div>

      <Container className="container-dados">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Input
                label="Produtor"
                type="text"
                placeholder="Nome do Produtor"
                value={produtor}
                onChange={(e) => setProdutor(e.target.value)}
              />
            </Col>
            <Col>
              <Input
                label="Data"
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Input
                label="Munic??pio"
                type="text"
                placeholder="Nome do Munic??pio"
                value={municipio}
                onChange={(e) => setMunicipio(e.target.value)}
              />
            </Col>

            <Col>
              <Input
                label="Lote"
                type="text"
                placeholder="Lote"
                value={lote}
                onChange={(e) => setLote(e.target.value)}
              />
            </Col>

            <Col>
              <Input
                label="??rea Total (ha)"
                type="number"
                placeholder="??rea total"
                value={areaTotal}
                onChange={(e) => setAreaTotal(e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                label="Talh??o"
                type="number"
                placeholder="Talh??o"
                value={talhao}
                onChange={(e) => setTalhao(e.target.value)}
              />
            </Col>

            <Col>
              <Input
                label="??rea do Talh??o (ha)"
                type="number"
                placeholder="??rea do Talh??o"
                value={areaTalhao}
                onChange={(e) => setAreaTalhao(e.target.value)}
              />
            </Col>

            <Col>
              <Input
                label="Matr??cula do Lote"
                type="text"
                placeholder="Matr??cula do Lote"
                value={matriculaLote}
                onChange={(e) => setMatriculaLote(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group className="mb-4" controlId="formBasicSelect">
                <Form.Label>Textura do Solo</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setTextura(e.target.value)}
                  required
                >
                  <option>Selecione a textura do solo</option>
                  <option value="1">Argiloso (+40% de argila)</option>
                  <option value="2">Texture M??dia (25 a 40% de argila)</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-4" controlId="formBasicSelect">
                <Form.Label>Sistema de Cultivo</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setCultivo(e.target.value)}
                  required
                >
                  <option>Selecione o sistema de cultivo</option>
                  <option value="1">Plantio Direto</option>
                  <option value="2">Convencional</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Input
                label="Respons??vel T??cnico"
                type="text"
                placeholder="Respons??vel T??cnico"
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value)}
              />
            </Col>

            <Col>
              <Input
                label="Profundidade da amostra de solos (cm)"
                type="number"
                placeholder="Profundidade da amostra de solos"
                value={profundidade}
                onChange={(e) => setProfundidade(e.target.value)}
              />
            </Col>
          </Row>
          <Input
            label="Resultado da an??lise de solos N??"
            type="text"
            placeholder="Resultado da an??lise"
            value={resultado}
            onChange={(e) => setResultado(e.target.value)}
          />

          <Button variant="primary" type="submit">
            Pr??ximo
          </Button>
        </Form>
      </Container>
    </div>
  );
}
