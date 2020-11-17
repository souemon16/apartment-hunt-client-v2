import React from 'react';
import './DashboardMenu.css';
import logo from '../../Images/logos/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList,faPlusSquare,faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const DashboardMenu = () => {
    return (
       <div className='sidebar d-flex flex-column align-items-center'>
                  
                <div className="logo">
                   <Link to='/'><img src={logo} alt="Logo" /></Link>
                </div>

                <div className="menu-bar">
                        <li>
                            <Link className='link' to='/booking-list'><FontAwesomeIcon icon={faClipboardList} /> Booking list </Link>
                        </li>

                        <li>
                            <Link className='link' to='/add-rent-house'><FontAwesomeIcon icon={faPlusSquare} /> Add Rent House </Link>
                        </li>

                        <li>
                            <Link className='link' to='/my-rent'><FontAwesomeIcon icon={faHome} />My Rent </Link>
                        </li>
                </div>
       </div>
    );
};

export default DashboardMenu;