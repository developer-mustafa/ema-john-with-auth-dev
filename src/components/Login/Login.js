import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import  './Login.css'
const Login = () => {
    
    const user = useContext(AuthContext);
    console.log(user);

    return (
        <div className='form-container'>
            <h2 className="form-title">
                Login
            </h2>
            <form>
        <div className='form-control'>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" />
        </div>
        
         <div className='form-control'>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" />
        </div>
            <div className="btn-container">
            <input className='btn-submit' type="submit" value="submit" />
            </div>
            </form>
            <p className='text'>New to Ema-john? <Link to='/signup'>Create new Account</Link> </p>
        </div>

    );
};

export default Login;