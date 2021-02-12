import React from 'react';
import Logo from '../images/MoonViewsLogo.png'
import {Link} from '@reach/router'

const ErrorPage = () => {
    return (
        <div> 
            <h1 className='text-light p-3 m-3'>Oh Nooooooo! We couldnt find what you were looking for!</h1>
            <h2>Make sure to serach by the ticker ant not company name (ex. Apple search AAPL)</h2>
                <Link className ='d-block text-light m-3 p-3' to='/'><h2>Click Me to Return Home to Try Again!</h2></Link>
            <img 
            src={Logo}
            alt='MoonViews Logo'
            style ={{height:'25rem'}}
            className='border rounded-circle'
            />
        </div>
    )
}

export default ErrorPage