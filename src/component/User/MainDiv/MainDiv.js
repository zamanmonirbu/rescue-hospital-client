import React from 'react';
import Services from '../../../screen/User/Departments';
import OurDoctorsSection from '../../../screen/User/Doctors';
import AboutHospitalSection from '../../../screen/User/About';
import LatestNewsSection from '../../../screen/User/LatestNews';
import ContactUsSection from '../ContactUs/Contact';
import Footer from '../Footer/Footer';
import Navigation from '../Navbar/Navbar';
import MainView from '../../../screen/User/MainView';

const MainDiv = () => {
    return (
        <div>

            <Navigation/>
            <MainView />
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