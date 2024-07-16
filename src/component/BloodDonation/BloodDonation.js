import React from 'react';
import { Link } from 'react-router-dom';
import donationSystem from '../assets/images/bloodDonation.PNG';

const BloodDonation = () => {
  return (
    <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12 mb-4">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center space-y-4 bg-blue-50 rounded-2xl mb-4 lg:mb-0 ">
        <Link to={"blood/donation"}>
          <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 mt-10">
            Blood Donation
          </button>
        </Link>
        <Link to={"blood/need"}>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 my-10">
            Blood Needed
          </button>
        </Link>
      </div>
      <div className="w-full lg:w-1/2">
        <img src={donationSystem} alt="Blood Donation" className="h-full w-full object-cover rounded-2xl" />
      </div>
    </div>
  );
};

export default BloodDonation;
