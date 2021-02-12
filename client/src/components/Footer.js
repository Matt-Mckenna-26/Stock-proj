import React from 'react';
import LinkedIn from '../images/linkedinIcon.png';
import GitHubIcon from '../images/githublogo.png';
import {Link} from '@reach/router';


const Footer = () => {
    return (
        <footer className='bg-light h-18 position-sticky-bottom mt-5 pb-3'>
                <h3 className='py-3 text-primary'>Developed using the MERN Stack by Matt McKenna</h3>
                    <div className='d-inline-block mx-3 text-primary'>
                        <h4>View Code</h4>
                        <a href='https://github.com/Matt-Mckenna-26/Stock-proj' target='blank'>
                            <img src={GitHubIcon} className ='mx-4' style={{height:'4rem'}}/>
                        </a>
                    </div>
                    <div className='d-inline-block mx-3 text-primary'>
                        <h4>Connect</h4>
                        <a href='https://www.linkedin.com/in/matt-mckenna-621682113/' target='blank'>
                            <img src={LinkedIn} className ='mx-4' style={{height:'4rem'}}/>
                        </a>
                    </div>
        </footer>
    )
}

export default Footer 