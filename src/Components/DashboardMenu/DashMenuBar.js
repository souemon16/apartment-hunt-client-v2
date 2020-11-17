import React from 'react';
import logo from '../images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList,faPlusSquare,faHome } from '@fortawesome/free-solid-svg-icons'
import './DashBoardMenu.css'



const DashMenuBar = () => {
    return (
       <div>
           <div class="container">
                  
                <div className="pt-3">
                   <img style={{height:'60px'}} src={logo} alt=""/>
                </div>

                <div className="pt-5 menu-bar">
                    <ul>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faClipboardList} /> Booking list</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faPlusSquare} /> Add Rent House</a>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <a href="#"><FontAwesomeIcon icon={faHome} />My Rent</a>
                        </li>
                    </ul>
                </div>
           </div>
       </div>
    );
};

export default DashMenuBar;