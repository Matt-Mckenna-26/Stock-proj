import react from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Logo from '../images/MoonViewsLogo.png';
import {navigate} from '@reach/router'



const NaviHeader = ({ticker, setTicker, handleSubmit}) => {

    return (
        <Navbar className='sticky-top w-100 border border-bottom-black' bg="white" expand="lg">
            <Navbar.Brand href="#home">
                <img src={Logo}
                width ='115rem'
                className='d-inline-block align-top mt-3 pt-1'
                />
                <h5 className='mt-.5'>MoonViews</h5>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="bg-light mr-auto navbar-link-font">
                <Nav.Link href="#news">News</Nav.Link>
                <Nav.Link href="#summary">Summary</Nav.Link>
                <Nav.Link href="#trending">Trending</Nav.Link>
                <Nav.Link href="#search">Search</Nav.Link>
                </Nav>
                <Form inline className='align-right bg-light navbar-link-font'>
                    <FormLabel className='px-2'>Search for a ticker here:</FormLabel>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" defaultValue={ticker} onChange={(e)=> setTicker(e.target.value)} />
                    <Button  onClick = {handleSubmit} variant="outline-success m-1">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NaviHeader ;