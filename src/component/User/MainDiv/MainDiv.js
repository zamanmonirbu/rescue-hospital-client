import React from 'react';
import Services from '../../../screen/User/Departments';
import OurDoctorsSection from '../../../screen/User/Doctors';
import AboutHospitalSection from '../../../screen/User/About';
import LatestNewsSection from '../../../screen/User/LatestNews';
import ContactUsSection from '../ContactUs/Contact';
import Footer from '../Footer/Footer';
import MainView from '../../../screen/User/MainView';
import Navbar from '../Navbar/Navbar';
import BloodDonation from '../../BloodDonation/BloodDonation';
import FAQAccordionData from '../../FAQ/FAQAccordionData';

const MainDiv = () => {
    return (
        <div>
            <Navbar/>
            <MainView />
            <BloodDonation/>
            <Services/>
            <OurDoctorsSection/>
            <AboutHospitalSection/>
            <LatestNewsSection/>
            <FAQAccordionData/>
            <ContactUsSection/>
            <Footer/>
        </div>
    );
};

export default MainDiv;