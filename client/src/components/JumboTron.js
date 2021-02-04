import react from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const JumboTron = () => {
    return (
        <Jumbotron className ='d-block w-100 my-5'>
            <h1 className='mb-3'>Welcome to MoonViews!</h1>
            <p>
                This page is dedicated to providing insights into the market. Get data such as the overall market summary, top movers, and trendings assests.
                You can also search for individual securities by ticker in the navigation bar or scrolling below. 
                What assets are going to send you to the moon?
            </p>
            <p>
                <Button variant="outline-primary" className=' btn-lg m-3'>Explore trending stocks</Button>
            </p>
        </Jumbotron>
    )
}

export default JumboTron