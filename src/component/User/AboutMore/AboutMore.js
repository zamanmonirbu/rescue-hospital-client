import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const AboutMore = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imageUrls = [
    "https://plus.unsplash.com/premium_photo-1681967103563-871828436e1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1485848395967-65dff62dc35b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
   
    <>
      <Navbar/>
      <div className="mt-8">
      <Slider {...sliderSettings}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img
              src={imageUrl}
              alt="img"
              className="w-[30%] mx-auto rounded-lg"
            />
          </div>
        ))}
      </Slider>
      <div className="mt-8 p-4 bg-gray-100">
        <h2 className="text-2xl font-semibold mt-10 text-center text-red-500">Our Hospital</h2>
        <p className="p-16 text-justify">
          Our state-of-the-art facility, Kolakhet Hospital, is dedicated to
          providing exceptional healthcare services. Our commitment extends
          across various medical disciplines, ensuring that our patients receive
          comprehensive and personalized care. Our team comprises skilled
          surgeons, attentive nurses, experienced specialists, and friendly
          administrative staff who collectively contribute to the well-being and
          comfort of every patient. Equipped with cutting-edge technology, our
          hospital ensures that patients receive advanced and innovative
          treatments. Our emergency care services operate 24/7, staffed by a
          dedicated team prepared to deliver rapid and life-saving
          interventions. This commitment to urgent care reflects our mission to
          be a reliable resource for the community in times of medical crises.
          Beyond emergency care, Kolakhet Hospital offers a wide spectrum of
          medical services designed to address diverse healthcare needs. Whether
          it's routine check-ups, specialized treatments, or surgical
          procedures, our medical professionals strive to provide top-notch
          services with a focus on patient safety, comfort, and positive
          outcomes. Your health is our priority, and we are honored to serve you
          with excellence and compassion. Our multidisciplinary approach at
          Kolakhet Hospital ensures a seamless continuum of care for our
          patients. We prioritize preventive healthcare through routine
          check-ups and health education programs to empower individuals with
          the knowledge to make informed decisions about their well-being. In
          addition to emergency care, our hospital specializes in various
          medical services, such as diagnostic imaging, laboratory testing, and
          advanced surgical procedures. Our diagnostic capabilities encompass
          state-of-the-art imaging technologies, enabling precise and accurate
          assessments for timely and effective treatment plans. The hospital's
          commitment to patient-centric care is evident in our focus on creating
          a healing environment. Comfortable and modern patient rooms, coupled
          with compassionate nursing care, contribute to a positive hospital
          experience. We take pride in fostering a collaborative and
          patient-friendly atmosphere, ensuring open communication between our
          healthcare providers and patients. Our commitment to excellence
          extends beyond medical treatments; we are dedicated to promoting
          overall wellness and supporting individuals on their health journeys.
          Kolakhet Hospital stands as a beacon of healthcare excellence,
          combining advanced medical technologies with compassionate care to
          meet the diverse healthcare needs of our community. Your health and
          satisfaction are at the forefront of our mission, and we look forward
          to serving you with the highest standards of medical care and
          compassion.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutMore;
