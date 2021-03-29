import React, {useState} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';
import { navigate } from '@reach/router';

const Login = ({setLoggedinUser, setIsSomeoneLoggedIn}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("/api/login", 
        { email:email , password:password},
            {
            withCredentials: true
            }
        )
            .then (res => {
                console.log('login succesful')
                axios.get("/api/users/loggedin", {
                    withCredentials: true
                    })
                    .then(res => {
                        console.log(res);
                        setLoggedinUser(res.data);
                        setIsSomeoneLoggedIn(true);
                        navigate('/')
                    })
                    .catch(err => console.log(err))
        })
            .catch( err => {
                console.log(err);
            })
    }
    return (
        <div className='p-3'>
            <h2 className='p-3 mt-2 text-light'>Login into Your MoonViews account.</h2>  
                <Form inline-block className='align-right navbar-link-font p-5'>
                    <FormLabel className='px-2 text-light font-weight-bold'>Email:</FormLabel>
                        <FormControl type="text"  className="col-lg-8 col-sm-10 mx-auto my-3" 
                        defaultValue={email} onChange={(e)=> setEmail(e.target.value)} onClick={(e)=> e.target.value =""} />
                    <FormLabel className='px-2 text-light font-weight-bold'>Password:</FormLabel>
                        <FormControl type="password" className="col-lg-8 col-sm-10 mx-auto my-3" 
                        onChange={(e)=> setPassword(e.target.value)} onClick={(e)=> e.target.value =""} />
                    <Button  onClick = {handleLogin} variant="light" className='m-3 text-primary'>Login</Button>
                </Form>
        </div> 
    )
}

export default Login