import react from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Logo from '../images/MoonViewsLogo.png'

const JumboTron = ({searched}) => {
    return (
        <>
        {searched === true? null :
            <Jumbotron className ='d-block w-100'id='home'>
            <h1 className='mb-3 jumbo-header-font'>Welcome to MoonViews!</h1>
            <img src={Logo} alt ='MoonViews Logo' className='d-inline-block my-2' style={{height:'7rem'}}/>
            <p>
                MoonViews is dedicated to providing insights into the market.
                <br/>
                Get data such as the overall market summary, trending movers, and news from CNBC.
                <br/>
                Want to dive deep into a specific asset/security? No problem, search above or click on the ticker for more info.
                <br/>
                What stocks are your ticket to the moon?
            </p>
            <p>
                <Button variant="outline-primary" className=' btn-md mt-2'><a href='#trending'>Explore trending stocks</a></Button>
            </p>
    </Jumbotron>}
    </>
    )
}

export default JumboTron