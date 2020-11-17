import React from 'react';
import './MyRent.css';
import DashboardMenu from '../DashboardMenu/DashboardMenu';


const MyRent = () => {
    return (
        <div className="dashboard-section d-flex justify-content-between">
            <DashboardMenu />
            <div className="my-rent">
                <div className="top-bar d-flex justify-content-between align-items-center">
                    <h1>My Rent</h1>
                    <h2>Name</h2>
                </div>

                <div className="client-table">
                    <table className="table">
                        <thead style={{ borderRadius: '10px'}} class="thead-dark">
                            <tr>
                                <th scope="col">House Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Sourav Emon</th>
                                <td>$195</td>
                                <td>
                                    <button className="btn view-details">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyRent;