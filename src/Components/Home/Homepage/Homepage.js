import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Footer from '../Footer/Footer';
import HouseRent from '../HouseRent/HouseRent';
import HouseService from '../HouseService/HouseService';
import MainHeader from '../MainHeader/MainHeader';

const Homepage = () => {
    return (
        <>
        <Navbar />
        <MainHeader />
        <HouseRent />
        <HouseService />
        <Footer />
        </>
    );
};

export default Homepage;