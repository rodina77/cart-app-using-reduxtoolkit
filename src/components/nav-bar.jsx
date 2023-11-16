import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Nav_bar() {
  const cart = useSelector(state=>state.cart);
  return (
    <Navbar fixed='top' expand="lg" className="bg-dark mb-5">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/' className='text-white text-decoration-none p-3'>products</Link>
            <Link to='/products' className='text-white text-decoration-none p-3'>Cart - {cart.length}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav_bar;