import react from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Logo from '../images/MoonViewsLogo.png'
import {Link} from '@reach/router'

const JumboTron = ({searched}) => {
    return (
        <>
        {searched === true? null :
    <Jumbotron className ='d-block w-90 mx-auto blue-bg' 
    style={{backgroundColor: '#659DBD', marginBottom: '0rem'}} id='home'>
            <h2 className='mb-3 jumbo-header-font text-light'>Welcome to MoonViews</h2>
            <img src={Logo} alt ='MoonViews Logo' className='d-inline-block my-2' style={{height:'7rem'}}/>
            <p className='text-light border border-light rounded-circle p-5'>
                MoonViews is dedicated to providing insights into the market.
                <br/>
                Get data such as the overall market summary, trending movers, and news from CNBC.
                <br/>
                Want to dive deep into a specific asset/security? No problem, search above or click on the ticker for more info.
                <br/>
                Be sure to register below so you can pin stocks to your own personalized watchlist! 
                <br/>
                What stocks are your ticket to the moon?
            </p>
            <p>
                <Button variant="light" className=' btn-md m-2'><a href='#trending'className='text-primary text-decoration-none'>Explore trending stocks</a></Button>
                <Button variant="light" className=' btn-md m-2'><Link to='/register'className='text-primary text-decoration-none'>Register to create your own watchlist</Link></Button>
            </p>
    </Jumbotron>}
    </>
    )
}

export default JumboTron