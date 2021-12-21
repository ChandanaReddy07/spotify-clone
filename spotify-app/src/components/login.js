import React from 'react';
import  './login.css';
import { loginUrl } from './spotify';
const Login = () => {
    return (
        <div className='login'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekGypvUL21krLxR7paDJhTLQc-Ekoe1bKmwpeOoHGwdVoGReDQQ0BqcbnVxPZExZJUZY&usqp=CAU" alt="logoi"/>
            <a href={loginUrl}>Login with spotify</a>
        </div>
    )
}

export default Login
