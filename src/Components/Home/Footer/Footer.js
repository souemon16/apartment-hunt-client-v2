import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import fb from '../../../Images/logos/Vector.png';
import insta from '../../../Images/logos/Vector-1.png';
import linkdin from '../../../Images/logos/Vector-2.png';
import youtube from '../../../Images/logos/Vector-3.png';


const Footer = () => {
    return (
        <footer>
            <div className="container pt-5">
               <div className="row mt-5 d-flex justify-content-around">
               <div className="col-md-3 location d-flex justify-content-between">
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /></p>
                    <p>H#340 (4th Floor), Road #24,
                    New DOHS, Mohakhali, Dhaka, Bangladesh
                    Phone: 018XXXXXXXX
                    E-mail: info@company.com</p>
                </div>

                <div className="col-sm-2">
                    <h4>Company</h4>
                    <li><Link className='footer-links' to='/'>About</Link></li>
                    <li><Link className='footer-links' to='/'>Site Map</Link></li>
                    <li><Link className='footer-links' to='/'>Support Center</Link></li>
                    <li><Link className='footer-links' to='/'>Support Center</Link></li>
                    <li><Link className='footer-links' to='/'>Submit Listing</Link></li>
                </div>

                <div className="col-sm-2">
                    <h4>Quick Links</h4>
                    <li><Link className='footer-links' to='/'>Quick Links</Link></li>
                    <li><Link className='footer-links' to='/'>Rentals</Link></li>
                    <li><Link className='footer-links' to='/'>Sales</Link></li>
                    <li><Link className='footer-links' to='/'>Contact</Link></li>
                    <li><Link className='footer-links' to='/'>Terms Conditions</Link></li>
                    <li><Link className='footer-links' to='/'>Our blog</Link></li>
                </div>
                <div className="col-md-3">
                    <h4>About us</h4>
                    <p>We are the top real estate
                    agency in Sydney, with agents
                    available to answer any
                    question 24/7.</p>

                    <div className="social-icons d-flex justify-content-around align-items-center">
                        <Link to=''><img src={fb} alt="icons"/></Link>
                        <Link to=''><img src={insta} alt="icons"/></Link>
                        <Link to=''><img src={linkdin} alt="icons"/></Link>
                        <Link to=''><img src={youtube} alt="icons"/></Link>
                    </div>
                </div>
               </div>
            </div>
        </footer>
    );
};

export default Footer;