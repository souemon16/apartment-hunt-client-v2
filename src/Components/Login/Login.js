import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Login.css';
import fb from '../../Images/logos/Group 2.png';
import google from '../../Images/logos/Group 573.png';


const Login = () => {
    return (
        <section className="login">
            <Navbar />
            <div className="body container d-flex flex-column align-items-center">
                <form action="" className="login-form">
                    <h2>Login</h2>
                    <input type="text" name="username" id="username" className="form-control" placeholder='Username or Email' />
                    <input type="password" name="password" id="password" className="form-control" placeholder='Password' />
                    <div className='mt-4 d-flex justify-content-between'>
                        <div class="form-check d-flex">
                            {/* <input type="checkbox" class="form-check-input" id="remember-me" /> */}
                        
                            <label class="form-check-label" for="remember-me">Remember Me</label>
                         </div>
                            <Link className='forgot-pass link' to='/'> Forgot Password </Link>
                    </div>
                    <button type='button' className="btn btn-submit">Login</button>
                    <p className='text-center mt-4'>Don't Have an account? <Link className='link' to='/registration'>Create an account</Link></p>
                </form>

                <p className="hr-text">Or</p>
                <button className="btn auth-login">
                    <img src={fb} alt="fb"/>
                    <p>Continue with Facebook</p>
                </button>
                <button className="btn auth-login">
                    <img src={google} alt='google'/>
                    <p>Continue with Google</p>
                </button>
            </div>
        </section>
    );
};

export default Login;