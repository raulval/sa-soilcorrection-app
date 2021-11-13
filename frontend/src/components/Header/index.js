import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Soil Correction GUI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Dados" id="basic-nav-dropdown">
              <NavDropdown.Item href="/dados">Dados Gerais</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/teores">Teores</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Correção do Solo" id="basic-nav-dropdown">
              <NavDropdown.Item href="/correcao-fosforo">
                Correção/Recuperação de Fósforo
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/correcao-potassio">
                Correção/Recuperação de Potássio
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/correcao-calciomg">
                Correção/Recuperação de Cálcio e Magnésio
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
