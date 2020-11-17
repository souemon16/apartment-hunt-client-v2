import React from 'react';
import './HouseService.css';
import service1 from '../../../Images/logos/service 1.png';
import service2 from '../../../Images/logos/service 2.png';
import service3 from '../../../Images/logos/service 3.png';

const HouseService = () => {
    return (
      <section className="house-service">
          <div className="heading">
                <p>Service</p>
                <h1>We're an agency tailored to all <br/> clients' needs that always delivers</h1>
            </div>
            <div className="body container d-flex justify-content-center">
                <div className="service-card col-md-3">
                    <img src={service1} alt="icon" className="img-fluid"/>
                    <h3>Wide Range of Properties</h3>
                    <p>With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                </div>

                <div style={{margin: '0 10rem'}} className="service-card col-md-3">
                    <img src={service2} alt="icon" className="img-fluid"/>
                    <h3>Financing Made Easy</h3>
                    <p>Our stress-free finance department that can find financial solutions to save you money.</p>
                </div>

                <div className="service-card col-md-3">
                    <img src={service3} alt="icon" className="img-fluid"/>
                    <h3>Trusted by Thousands</h3>
                    <p>10 new offers every day. 350 offers on site, trusted by a community of thousands of users.</p>
                </div>
            </div>
      </section>
    );
};

export default HouseService;