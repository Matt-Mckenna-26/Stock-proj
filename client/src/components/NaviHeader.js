import react from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/esm/FormLabel';



const NaviHeader = () => {
    return (
        <Navbar className='sticky-top' style ={{height : '7rem', width: '100%'}}bg="white" expand="lg">
            <Navbar.Brand href="#home">MoonViews</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="bg-light mr-auto">
                <Nav.Link href="#news">News</Nav.Link>
                <Nav.Link href="#summary">Summary</Nav.Link>
                <Nav.Link href="#trending">Trending</Nav.Link>
                <Nav.Link href="#movers">Movers</Nav.Link>
                </Nav>
                <Form inline className='align-right bg-light'>
                    <FormLabel className='px-2'>Search for a ticker here:</FormLabel>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success m-1">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NaviHeader ;