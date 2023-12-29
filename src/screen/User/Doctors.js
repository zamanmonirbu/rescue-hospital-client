import React, { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../Auth/Firebase/app.config";
import { Link } from "react-router-dom";
import SevenDoctorsDisplay from "../../component/User/DoctorDisplay/SevenDoctorsDisplay";

const Doctors = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  useEffect(() => {
    const fetchSevenDoctors = async () => {
      try {
        const q = query(
          collection(db, "doctors"),
          orderBy("age", "desc"),
          limit(7)
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDoctorsData(data);
      } catch (error) {
        console.error("Error fetching doctors data: ", error);
      }
    };

    fetchSevenDoctors();
  }, []);

  return (
    <div
      id="doctors"
      className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-gray-100"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            Our Doctors
          </h2>

          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Meet our experienced and dedicated medical professionals.
          </p>
        </header>
        <div className="flex flex-wrap flex-row -mx-4 text-center">
          {doctorsData.map((doctor, index) => (
            <SevenDoctorsDisplay key={index} doctor={doctor} />
          ))}
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".4s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationDelay: "0.4s",
              animationName: "fadeInUp",
            }}
          >
            <Link to="/show/doctors">
              <div className="py-8 px-6 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="mb-4 rounded-full overflow-hidden mx-auto">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  See More
                </h3>
                <p className="text-gray-500">
                  Explore additional doctors.If need you more information about
                  our Doctors
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
