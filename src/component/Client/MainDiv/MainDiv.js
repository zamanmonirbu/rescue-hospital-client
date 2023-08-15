import React from 'react';
import MainHeaderManu from '../MainHeaderManu/MainHeaderManu';
import Services from '../Services/Services';
import OurDoctorsSection from '../OurDouctors/OurDoctors';
import AboutHospitalSection from '../AboutOurSelf/AboutOurSelf';
import LatestNewsSection from '../LattestNews/LattestNews';
import ContactUsSection from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

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