import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import HomePage from "./Components/HomePage";
import Shoes from "./Components/Shoes";
import Add from "./Components/Add";
import Shoee from "./Components/Shoee";
import About from "./Components/About";
import Session from "./Components/Session";


function App() {
  return (
    
    <Router>
      <Navbar bg="light"  expand="lg">
        <Navbar.Brand as={Link} to="/">
         Shoes Market
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/About">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/shoes">
              Shoes Products
            </Nav.Link>
            <Nav.Link as={Link} to="/shoes/add">
              Add Product
            </Nav.Link>
            <Nav.Link as={Link} to="/Session">
              session
            </Nav.Link>
            <Nav.Link as={Link} to="/Dark">
              Dark&Light Mode
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Session" element={<Session />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/Dark" element={<Dark />} />
        <Route path="/shoes/add" element={<Add />} />
        <Route path="/shoee/:shoeId" element={<Shoee />} />
      </Routes>
    </Router>
  );
}

export default App;