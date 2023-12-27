import React from 'react';
import Hospital from '../component/images/hospital.jpg'
const AboutHospitalSection = () => {
    return (
        <div className="section relative pt-20 pb-20 bg-gray-300">
            <h2 className="text-2xl leading-normal m-8 font-bold text-black">About Our Hospital</h2>

            <div className="container xl:max-w-6xl mx-auto px-4 flex flex-wrap items-center">
                {/* Image */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 ">
                    <img
                        src={Hospital}
                        alt="About Hospital"
                        className="object-cover object-center w-full h-full rounded-lg"
                    />
                </div>
                {/* Text */}
                <div className="w-full md:w-1/2 md:pl-8">
                    <p className="text-gray-500 leading-relaxed text-justify">
                        Our state-of-the-art facility is equipped with cutting-edge technology and staffed by a team of highly skilled and compassionate healthcare professionals. From skilled surgeons to attentive nurses, from experienced specialists to friendly administrative staff, every member of our team is committed to ensuring the well-being and comfort of our patients.

                        At [Hospital Name], we offer a comprehensive range of medical services, including but not limited to:

                        Emergency Care: Our 24/7 emergency department is always ready to provide rapid and life-saving care to those in need.



                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutHospitalSection;
