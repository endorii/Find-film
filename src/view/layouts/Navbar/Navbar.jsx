import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './navbar.scss';

const MainNavbar = () => {
    return(
        <Navbar className='nav_main' expand="lg">
            <Container>
                <Navbar.Brand href="#home" className='logo'>FilmFind</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/" className='nav_item'>Main</Nav.Link>
                    <Nav.Link href="#films" className='nav_item'>Films</Nav.Link>
                    <Nav.Link href="#cartoons" className='nav_item'>Cartoons</Nav.Link>
                    <NavDropdown title="More" id="basic-nav-dropdown" className='nav_item'>
                    <NavDropdown.Item href="#anime" className='nav_item'>Anime</NavDropdown.Item>
                    <NavDropdown.Item href="#series" className='nav_item'>Series</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MainNavbar;