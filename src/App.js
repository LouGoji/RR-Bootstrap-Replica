import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
          <Navbar.Brand style={{margin:"5px 0 0 20px"}}>
            <img
              src="./Instacart_Logo.jpg"
              alt="Instacart logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse>
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link href="#Login">Log In</Nav.Link>
              <Button variant="success">Sign Up</Button>{' '}
            </Nav>
          </Navbar.Collapse>
      </Navbar>

      <h1>Hello World</h1>
    </div>
  );
}

export default App;
