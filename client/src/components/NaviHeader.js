import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Logo from '../images/MoonViewsLogo.png';
import {Link} from '@reach/router'



const NaviHeader = ({ticker, setTicker, handleSubmit, isSomeoneLoggedIn, logout}) => {

    return (
        <Navbar className='sticky-top w-100 border border-bottom-black' bg="white" expand="lg">
            <Navbar.Brand href="#home">
                <Link to='/'>
                    <img src={Logo}
                    alt='Moonviews logo'
                    width ='75rem'
                    className='d-inline-block align-top mt-1 pt-1'
                    />
                </Link>
                <h5 className='mt-.5'>MoonViews</h5>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="bg-white mr-auto navbar-link-font">
                <Nav.Link href="/#news" className='text-primary'>News</Nav.Link>
                <Nav.Link href="/#summary" className='text-primary'>Summary</Nav.Link>
                <Nav.Link href="/#trending" className='text-primary'>Trending</Nav.Link>
                <Nav.Link href="/#search" className='text-primary'>Search</Nav.Link>
                {isSomeoneLoggedIn === false ?<Nav.Link href='/login' className='text-primary'>Login</Nav.Link>: null}
                {isSomeoneLoggedIn === false ?<Nav.Link href='/register' className='text-primary'>Register</Nav.Link> :null}
            </Nav>
                {isSomeoneLoggedIn === false ? null : <Button className='align-self-right' onClick={logout}>Log Out</Button>}
                <Form inline className='align-right bg-white navbar-link-font'>
                    <FormLabel className='px-2 text-primary'>Search:</FormLabel>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" defaultValue={ticker} onClick={(e)=> e.target.value =""} onChange={(e)=> setTicker(e.target.value)} />
                    <Button onClick = {handleSubmit} variant="outline-primary m-1">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NaviHeader ;