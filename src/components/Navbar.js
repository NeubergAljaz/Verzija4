//react
import React from 'react';

//styling
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './css/styles.css';

const NavbarNew = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="custome-nav" variant="dark">
      <Navbar.Brand href="/">
        <img

          src={require('../img/opsilight.png').default}
          width="30"
          height="30"
          className="d-inline-block align-top photo"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Brand href="/">Vizualizacija OPSI</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

          
        </Nav>
        <Nav>
        <Nav.Link href="/statistika">Statistika</Nav.Link>
          <NavDropdown title="Zemljevidi" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/regije">Statistične regije</NavDropdown.Item>
            <NavDropdown.Item href="/obcine">Občine</NavDropdown.Item>

          </NavDropdown>
          <Nav.Link href="/onas">O nas</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
};

export default NavbarNew;