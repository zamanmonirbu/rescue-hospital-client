import React from "react";
import { Link } from "react-router-dom";

const SevenDoctorsDisplay = ({doctor}) => {
  return (
    <div
      className="flex-shrink px-4 max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:px-6 wow fadeInUp "
      data-wow-duration="1s"
      style={{
        visibility: "visible",
        animationDuration: "1s",
        animationName: "fadeInUp",
      }}
    >
      <Link to={`doctor/${doctor.name}/${doctor.id}`}>
      <div className="py-8 px-6 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
        <div className="mb-4 rounded-full overflow-hidden ">
          <img
            src={doctor.drImage}
            alt="Doctor"
            className="object-cover object-center w-24 h-24 rounded-full mx-auto"
          />
        </div>
        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
         {doctor.name}
        </h3>
        <p className="text-gray-500">{doctor.specialist}</p>
      </div>
      </Link>
    </div>
  );
};

export default SevenDoctorsDisplay;
