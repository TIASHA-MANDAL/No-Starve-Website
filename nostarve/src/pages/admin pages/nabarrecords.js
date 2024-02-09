import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './nabarrecords.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbarrecords() {
    const Navigate = useNavigate();
   function fff2(){
    Navigate("/admin")
   }
   function fff3(){
    Navigate("/hubsadmin")
}
function fff4() {
    window.open('https://www.google.co.in/maps/@22.6507718,88.4423709,13.53z?hl=en&authuser=0','_blank')
   
  }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <div className='navy1010'>
                    <div className='logo10'><img src="https://res.cloudinary.com/dosofpk8l/image/upload/v1677935337/No_starve__2_-removebg-preview_yv01rg.png" width="40" height="40" alt="" /></div>
                    <div className='name10'> <Navbar.Brand href="#home"> No Starve</Navbar.Brand></div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto10">
                            <Nav.Link onClick={fff2}>Dashboard</Nav.Link>
                            <Nav.Link onClick={fff4}>Map</Nav.Link>
                            <Nav.Link onClick={fff3} >Hubs</Nav.Link>
                            <NavDropdown title="More Info" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                   
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className='signbutton1010'>
                 {/* <div className='sy'> <h1>Suravi Roy</h1></div>   */}
                {/* <div className='b110'><a href='/signup'><Button variant="primary">Sign Up</Button> </a>{' '}</div> */}
                
                </div> 
            </Container>
        </Navbar>
    )
}
export default Navbarrecords;