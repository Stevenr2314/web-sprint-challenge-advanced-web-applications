import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login = () => {
    const [form , setForm] = useState({username: '', password: ''})
    const [error, setError] = useState('')
    const history = useHistory()

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/login', form)
            .then(resp => {
                localStorage.setItem('token', resp.data.token)
                setError('')
                history.push('/view')
            })
            .catch(err => setError('Username/Password combination not found'))
    }
    
    return(<ComponentContainer>
        <ModalContainer>
            <h1>Welcome to Blogger Pro</h1>
            <h2>Please enter your account information.</h2>
            {
                error && <Error id='error'>{error}</Error>
            }
            <FormGroup onSubmit={handleSubmit}>
                <Label htmlFor='username'>Username:
                    <Input name='username' id='username' value={form.username} onChange={handleChange}/>
                </Label>
                <br />
                <Label htmlFor='password'>Password:
                    <Input type='password' name='password' id='password' value={form.password} onChange={handleChange}/>
                </Label>
                <Button type='submit' id='submit'>Login</Button>
            </FormGroup>
        </ModalContainer>
    </ComponentContainer>);
}

export default Login;

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1.4rem;
    padding: 1rem 0 1rem 1rem;
    width:100%;
`

const Button = styled.button`
    font-size: 1.3rem;
    padding:1rem;
    width: 100%;
`

const Error = styled.p`
    background-color: #d16767;
    border: 2px solid #773939;
    border-radius: 3px;
    padding: 1rem;
    margin: 0;
    font-size: 2rem;
`
