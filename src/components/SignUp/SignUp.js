import React from 'react';
import { Link } from 'react-router-dom';
import './signUp.css'
const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className="form-title">
                Sign Up
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
         <div className='form-control'>
            <label htmlFor="confirm">Confirm Password: </label>
            <input type="password" name="confirm" id="confirm" />
        </div>
            <div className="btn-container">
            <input className='btn-submit' type="submit" value="Signup" />
            </div>
            </form>
            <p className='text'>All ready have an account? <Link to='/login'>Login</Link> </p>
        </div>
    );
};

export default SignUp;