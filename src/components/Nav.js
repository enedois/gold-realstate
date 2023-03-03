import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './Nav.css';



const Navigation = () => {
    // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (  <>   
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={require("./logo.png")} 
            width="50"
            height="50"
           
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto txtwhite">
            <Nav.Link className='txtwhite' href="/">Home</Nav.Link>
            <Nav.Link className='txtwhite' href="/properties">Properties</Nav.Link>
            <Nav.Link className='txtwhite' href="/neighborhoods">Neighborhoods</Nav.Link>
            <Nav.Link className='txtwhite' href="/agents">Agents</Nav.Link>
          </Nav>
        
      </Container>      
    </Navbar>
  </>
  )
}

export default Navigation