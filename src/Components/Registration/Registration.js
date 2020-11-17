import React from 'react';
import './Registration.css';
import Navbar from '../Navbar/Navbar';
import fb from '../../Images/logos/Group 2.png';
import google from '../../Images/logos/Group 573.png';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <section className="registration container-fluid">
            <Navbar />
            <div className="body container d-flex flex-column align-items-center">
                <form action="" className="login-form">
                    <h2>Registration</h2>
                    <input type="text" name="first-name" id='first-name' className="form-control" placeholder='First Name' />
                    <input type="text" name="last-name" id="last-name" className="form-control" placeholder='Last Name'/>
                    <input type="email" name="email" id="email" className="form-control" placeholder='Username or Email' />
                    <input type="password" name="password" id="password" className="form-control" placeholder='Password' />
                    <input type="password" name="confirm-password" id="confirm-password" className="form-control" placeholder='Confirm Password' />
                   
                    <button type='button' className="btn btn-submit mb-2">Create an account</button>
                    <p className='text-center mt-5'>Already have an account? <Link className='link' to='/login'>Login</Link></p>
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

export default Registration;