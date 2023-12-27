import React from 'react';
import MainHeaderManu from '../../screen/MainView';
import Services from '../../screen/Services';
import OurDoctorsSection from '../../screen/OurDoctors';
import AboutHospitalSection from '../../screen/AboutOurSelf';
import LatestNewsSection from '../../screen/LattestNews';
import ContactUsSection from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Navigation from '../Navbar/Navbar';

const MainDiv = () => {
    return (
        <div>

            <Navigation/>
            <MainHeaderManu />
            <Services/>
            <OurDoctorsSection/>
            <AboutHospitalSection/>
            <LatestNewsSection/>
            <ContactUsSection/>
            <Footer/>
        </div>
    );
};

export default MainDiv;