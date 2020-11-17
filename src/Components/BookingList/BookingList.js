import React from 'react';
import './BookingList.css';
import DashboardMenu from '../DashboardMenu/DashboardMenu';


const BookingList = () => {
    return (
        <div className="dashboard-section d-flex justify-content-between">
            <DashboardMenu />
            <div className="my-booking">
                <div className="top-bar d-flex justify-content-between align-items-center">
                    <h1>Booking List</h1>
                    <h2>Name</h2>
                </div>

                <div className="client-table">
                    <table className="table">
                        <thead style={{ borderRadius: '10px'}} class="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Phone No</th>
                                <th scope="col">Message</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Sourav Emon</th>
                                <td>souemon16@gmail.com</td>
                                <td> 018****** </td>
                                <td> Lorem ipsum dolor sit. </td>
                                <td>  <select id="status" name="Service Status">
                                        <option className="text-warning" value="On Going">On Going</option>
                                        <option className="text-danger" value="Pending">Pending</option>
                                        <option className="text-success" value="Done">Done</option>
                                    </select> 
                                    </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingList;