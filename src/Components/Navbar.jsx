import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import logo from './logo.png';

function Navigationbar() {
  return (
    <Navbar className="beige-navbar">
      <Container fluid>
        <Navbar.Brand href="/">
        <img
        src={logo}
         width="30"          
         height="30"         
         className="d-inline-block align-top"
         alt="Logo"
         />{' '}
          Find.Your.Sent
          </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/recommendation">Perfume Recommendation</Nav.Link>
          <Nav.Link href="/lastlong">Long lasting and projection</Nav.Link>
          <Nav.Link href="/perfumetypes">Different types of perfume</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;