import React from 'react';
import DashMenuBar from './DashMenuBar';
import './BookingList.css'
import logo from '../images/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList,faPlusSquare,faHome } from '@fortawesome/free-solid-svg-icons'
import './DashBoardMenu.css'


const BookingList = () => {
    return (
        <div>
           <div class="container">
              
           <div className="row">
          
                <div className="col-4">
                <div class="container">
                  
                  <div className="pt-3">
                     <img style={{height:'60px'}} src={logo} alt=""/>
                     <p className="book-head">Booking List</p>
                  </div>
                 
  
                  <div className="pt-5 menu-bar">
                      <ul>
                          <li>
                              <a style={{color:"#648883"}} href="#" active><FontAwesomeIcon icon={faClipboardList} /> Booking list</a>
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
                
                <div className="col-8 booking-list-design">
                    <div className="booking-sub-content">
                       
                    <table class="table table-borderless">
                       <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Phone No</th>
                            <th scope="col">Massage</th>
                            <th scope="col">Status</th>
                            </tr>
                       </thead>
                        <tbody>
                             <tr>
                           <th scope="row">1</th>
                             <td>Mark</td>
                             <td>Otto</td>
                            <td>@mdo</td>
                            <td>Pending</td>
                             </tr>
    
                       </tbody>
                 </table>

                    </div>

                </div>

            </div>
           </div>
        </div>
    );
};

export default BookingList;