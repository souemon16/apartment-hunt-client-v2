import React from 'react';
import './MainHeader.css';


const MainHeader = () => {
    return (
    <section className="main-header d-flex flex-column justify-content-center align-items-center">
        <div className="heading">
            <h1>FIND YOUR HOUSE RENT</h1>
        </div>
        <div className="body d-flex">
            <input type="text" className="form-control header-search" placeholder="Search..." />
            <button className="btn find-now">Find Now</button>
        </div>
    </section>
    );
};

export default MainHeader;