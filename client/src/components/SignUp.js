import React, {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';
import {Link, navigate} from "@reach/router";

const SignUp = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState("");

    const handleReg = (e) => {
        e.preventDefault();
        const newUser = {username:username, email:email, password:password, confirmPassword:confirmPassword};
        axios.post("http://localhost:8000/api/register", newUser, 
            {
            withCredentials: true
            }
        )
        .then (res => {
            navigate('/login');
            setUsername("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        })
        .catch( err => {
            console.log(err);
            setErrors(err.response.data.errors);
        })
    }
    return (
        <div className='p-3'>
            <h2 className='p-3 mt-2 text-light'>Create your own MoonViews account.</h2>  
                <Form inline-block className='align-right navbar-link-font p-5'>
                    <FormLabel className='px-2 text-light font-weight-bold'>Username:</FormLabel>
                        <FormControl type="text" className="col-lg-8 col-sm-10 mx-auto my-3" 
                        defaultValue={username} onChange={(e)=> setUsername(e.target.value)} onClick={(e)=> e.target.value =""} />
                    <FormLabel className='px-2 text-light font-weight-bold'>Email:</FormLabel>
                        <FormControl type="text"  className="col-lg-8 col-sm-10 mx-auto my-3" 
                        defaultValue={email} onChange={(e)=> setEmail(e.target.value)} onClick={(e)=> e.target.value =""} />
                    <FormLabel className='px-2 text-light font-weight-bold'>Password:</FormLabel>
                        <FormControl type="password"  className="col-lg-8 col-sm-10 mx-auto my-3" 
                        onChange={(e)=> setPassword(e.target.value)} onClick={(e)=> e.target.value =""} />
                    <FormLabel className='px-2 text-light font-weight-bold'>Confirm Password:</FormLabel>
                        <FormControl type="password"  className="col-lg-8 col-sm-10 mx-auto my-3" 
                        onChange={(e)=> setConfirmPassword(e.target.value)} onClick={(e)=> e.target.value =""} />
                    <Button  onClick = {handleReg} variant="light" className='m-3 text-primary'>Sign up!</Button>
                    <Button  variant="light" className='m-3 text-primary'><Link to='/'>Cancel</Link></Button>
                </Form>
        </div> 
    )
}

export default SignUp 