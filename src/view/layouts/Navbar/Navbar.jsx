import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MovieSearch from '../../../modules/MovieSearch/MovieSearch';

import './navbar.scss';

const MainNavbar = () => {
    return(
        <Navbar className='nav_main' expand="lg">
            <Container>
                <Navbar.Brand href="/Find-film" className='logo'>Film.Find</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    {/* <Nav.Link href="/" className='nav_item'>Main</Nav.Link> */}
                    <Nav.Link href="/Find-film/films" className='nav_item'>Films</Nav.Link>
                    <Nav.Link href="/Find-film/cartoons" className='nav_item'>Cartoons</Nav.Link>
                    <NavDropdown title="More" id="basic-nav-dropdown" className='nav_item'>
                    <NavDropdown.Item href="/Find-film/anime" className='nav_item'>Anime</NavDropdown.Item>
                    <NavDropdown.Item href="/Find-film/tv" className='nav_item'>Series</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>

                <MovieSearch/>
                
            </Container>
        </Navbar>
    )
}

export default MainNavbar;