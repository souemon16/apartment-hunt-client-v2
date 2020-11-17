import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HomeDetail.css';
import housebig from '../../Images/images/Rectangle 406.png';
import house1 from '../../Images/images/Rectangle 407.png';
import house2 from '../../Images/images/Rectangle 408.png';
import house3 from '../../Images/images/Rectangle 409.png';
import house4 from '../../Images/images/Rectangle 410.png';


const HomeDetail = () => {
    return (
        <section className="home-detail">
            <Navbar />
            <div className="header d-flex justify-content-center align-items-center">
                <h1>Apartment</h1>
            </div>

            <div className="body container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="row main-house">
                            <img src={housebig} alt="house" className="img-fluid" />
                        </div>
                        <div className="row sub-house d-flex justify-content-between">
                            <img src={house1} alt="house" className="img-fluid" />
                            <img src={house2} alt="house" className="img-fluid" />
                            <img src={house3} alt="house" className="img-fluid" />
                            <img src={house4} alt="house" className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-md-3">
                        <form className='d-flex flex-column align-items-center' action="">
                            <input type="text" name="name" id="name" className='form-control mt-5' placeholder='Full Name' />
                            <input type="number" name="number" id="number" className="form-control" placeholder='Phone No.' />
                            <input type="email" name="email" id="email" className="form-control" placeholder='Email Address' />
                            <textarea name="message" id="message" cols="30" rows="10" className="form-control" placeholder='Message'></textarea>
                            <button className="btn req-booking">Request Booking</button>
                        </form>
                    </div>
                </div>

                <div className="row home-des">
                    <div className="col-md-8">
                        <div className="row mb-5">
                            <div style={{width: '77rem'}} className='d-flex justify-content-between mb-3'>
                                <h1>Family Apartment</h1>
                                <h1><span>$256</span></h1>
                            </div>
                            <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                        </div>

                        <div className="row mb-5">
                            <h3>Price Details-</h3>
                            <br/> <br/>
                            <p>Rent/Month: $550 (negotiable)
                            Service Charge : 8,000/= Tk per month, subject to change
                            Security Deposit : 3 month’s rent
                            <br/>
                            Flat Release Policy : 3 months earlier notice required</p>
                        </div>

                        <div className="row mb-5">
                            <h3>Property Details-</h3>
                            <br/> <br/>
                            <p>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
                            Flat Size : 3000 Sq Feet.
                            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
                            Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
                            <br/> <br/>
                            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
                            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HomeDetail;