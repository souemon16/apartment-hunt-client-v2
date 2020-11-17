import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../Images/logos/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

    return (
        <nav className='nav d-flex justify-content-between align-items-center'>
            <div className="logo">
                <Link to='/'><img src={logo} alt="Logo" /></Link>
            </div>
            <div className="nav-items d-flex align-items-center">
                <li><Link className='link' to='/'> Home </Link></li>
                <li><Link className='link' to=''> About </Link></li>
                <li><Link className='link' to=''> Service </Link></li>
                <li><Link className='link' to=''> Concerns </Link></li>
                <li><Link className='link' to=''> Event </Link></li>
                <li><Link className='link' to=''> Contact </Link></li>
                <Link to='/login'><button className="btn login">Login</button></Link>
                <input type="checkbox" id="nav-res"/>
           <label for='nav-res'> <FontAwesomeIcon className='nav-icon' icon={faBars} /></label>
            </div>
        </nav>
    );
};

export default Navbar;