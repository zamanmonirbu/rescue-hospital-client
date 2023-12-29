import React from "react";
import { Link } from "react-router-dom";

const Departments = () => {
  return (
    <div
      id="departments"
      className=" section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-gray-200"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            Our Departments
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: "0 auto", height: "35px" }}
            xmlSpace="preserve"
          ></svg>
        </header>
        <div className=" flex flex-wrap flex-row -mx-4 text-center">
          <div
            className="rounded-xl flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            <Link to="/doctor/Cardiology">
              <div className="py-8 px-12 mb-12 rounded-xl bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.84 2.395a5.5 5.5 0 0 0-7.779 7.78L8 14.013l3.94-3.84a5.5 5.5 0 0 0-7.78-7.78l-.086.085L8 6.014l2.925-2.93z" />
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Cardiology
                </h3>
                <p className="text-gray-500">
                  Comprehensive cardiac care and treatment.
                </p>
              </div>
            </Link>
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            <Link to="/doctor/Laboratory">
              <div className="py-8 px-12 mb-12 rounded-xl bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-flask"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a.5.5 0 0 1 .36.152l3.497 3.665A1.5 1.5 0 0 0 13 3.868V12.5a1.5 1.5 0 0 0 1.5 1.5h.5a.5.5 0 0 1 0 1H1a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 0 3 12.5V3.868a1.5 1.5 0 0 0 1.143-.051L7.64.152A.5.5 0 0 1 8 0zM6.5 1.317L4.192 3.5h7.617L9.5 1.317v.001z" />
                    <path d="M10.363 5.5h-.05a1.5 1.5 0 0 0-1.405 1H7.405a1.5 1.5 0 0 0-2.647 0H5.09a1.5 1.5 0 0 0-1.406-1h-.05a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h8.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5zm-.5 8v1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V13.5h8z" />
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Laboratory
                </h3>
                <p className="text-gray-500">
                  State-of-the-art diagnostic services.
                </p>
              </div>
            </Link>
          </div>
          <div
            className=" flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            <Link to="/doctor/Internal Medicine">
              <div className="py-8 px-12 mb-12 rounded-xl bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-stethoscope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.273 10.165a.5.5 0 0 0-.343.426v1.817c0 1.017.684 1.89 1.657 2.14l4.147 1.294a2 2 0 0 0 1.192-.144l3.44-1.722a.5.5 0 0 0 .183-.668l-3.724-9.31A.5.5 0 0 0 9.98 1.56l-5.85 2.925a2 2 0 0 0-1.192.145l-4.147 1.294a.5.5 0 0 0-.183.667l3.725 9.31a.5.5 0 0 0 .668.183l5.849-2.925a2 2 0 0 0 1.192-.144l3.44-1.722a.5.5 0 0 0 .183-.668L9.384 1.504a.5.5 0 0 0-.668-.183l-4.147 1.294a2 2 0 0 0-1.192.145L.282 4.92a.5.5 0 0 0-.183.667l3.724 9.31a.5.5 0 0 0 .668.183l5.849-2.925a2 2 0 0 0 1.192-.144l4.147-1.722a.5.5 0 0 0 .183-.668l-3.724-9.31a.5.5 0 0 0-.668-.183l-5.849 2.925a2 2 0 0 0-1.192.145L1.084 10.85a.5.5 0 0 0-.183.668l3.725 9.31a.5.5 0 0 0 .667.183l5.85-2.926a2 2 0 0 0 1.192-.143l4.147-1.722a.5.5 0 0 0 .183-.668L9.283 1.892a.5.5 0 0 0-.667-.183l-4.147 1.294a2 2 0 0 0-1.192.145L1.09 5.506a.5.5 0 0 0-.183.667l3.725 9.31a.5.5 0 0 0 .667.183l5.849-2.925a2 2 0 0 0 1.192-.144l4.147-1.722a.5.5 0 0 0 .183-.668l-3.725-9.31a.5.5 0 0 0-.667-.183l-5.85 2.925a2 2 0 0 0-1.192.145L2.273 10.165z" />
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Internal Medicine
                </h3>
                <p className="text-gray-500">
                  Comprehensive care for adults.You are in?
                </p>
              </div>
            </Link>
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            <Link to="/doctor/Dentistry">
              <div className="py-8 px-12 mb-12 rounded-xl bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-teeth"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.722 1.018A1 1 0 0 1 2 1h12a1 1 0 0 1 1 1.018v13.964a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1.018V1.018z" />
                    <path d="M2 3v10.073h12V3H2zm3.333 3.73a.833.833 0 0 1 1.5-.555c.189.41.694.76 1.167.555.472-.205.694-.915.472-1.74-.145-.557.271-1.365 1.5-1.365.63 0 1.028.136 1.248.295.13.1.238.263.295.473.092.291.09.622-.037.978-.128.345.17.647.487.647h.003c.315-.002.581-.36.533-.707-.168-.977-.755-1.794-1.878-2.003a2.503 2.503 0 0 0-1.713.158c-.158.073-.252.228-.193.39.118.403-.105.837-.407.837a.393.393 0 0 0-.183.057 1.836 1.836 0 0 1-1.074.246c-.777-.19-1.292-.84-1.383-1.54-.016-.11-.055-.217-.127-.312a1.694 1.694 0 0 0-.416-.416c-.096-.072-.202-.11-.312-.127a1.533 1.533 0 0 0-1.54.09c-.78.582-.975 1.458-.786 2.157.096.433.238.813.408 1.116.073.116.058.225-.052.335-.252.252-.666.36-1.145.34-.507-.017-.845-.135-1.056-.35a.693.693 0 0 1-.208-.502c.02-.478.19-.95.577-1.352zm8.34 0a.833.833 0 0 1 1.5-.555c.189.41.694.76 1.167.555.472-.205.694-.915.472-1.74-.145-.557.271-1.365 1.5-1.365.63 0 1.028.136 1.248.295.13.1.238.263.295.473.092.291.09.622-.037.978-.128.345.17.647.487.647h.003c.315-.002.581-.36.533-.707-.168-.977-.755-1.794-1.878-2.003a2.503 2.503 0 0 0-1.713.158c-.158.073-.252.228-.193.39.118.403-.105.837-.407.837a.393.393 0 0 0-.183.057 1.836 1.836 0 0 1-1.074.246c-.777-.19-1.292-.84-1.383-1.54-.016-.11-.055-.217-.127-.312a1.694 1.694 0 0 0-.416-.416c-.096-.072-.202-.11-.312-.127a1.533 1.533 0 0 0-1.54.09c-.78.582-.975 1.458-.786 2.157.096.433.238.813.408 1.116.073.116.058.225-.052.335-.252.252-.666.36-1.145.34-.507-.017-.845-.135-1.056-.35a.693.693 0 0 1-.208-.502c.02-.478.19-.95.577-1.352z" />
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Dentistry
                </h3>
                <p className="text-gray-500">
                  Oral health and dental care services.
                </p>
              </div>
            </Link>
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            <Link to="/doctor/Radiology">
              <div className="py-8 px-12 mb-12 rounded-xl bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-diagram-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4zm8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2zm-8 8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H5zm8 0a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2zM7.5 8a1.5 1.5 0 0 1 1.5 1.5 1 1 0 0 1-2 0A1.5 1.5 0 0 1 7.5 8zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM8 2.5a1.5 1.5 0 0 1-1.5 1.5 1 1 0 0 1 0-2A1.5 1.5 0 0 1 8 2.5zm0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM8 12a1 1 0 0 0 1-1h2a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1V12zm-1 2a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-1 0v1zM8 4a1 1 0 0 0-1 1H5a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1V4zm1-2a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0V2zM8 9a1 1 0 0 0 1-1h2a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1v2zm1 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z" />
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Radiology
                </h3>
                <p className="text-gray-500">
                  Imaging and diagnostic services.So for you.
                </p>
              </div>
            </Link>
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{
              visibility: "visible",
              animationDuration: "1s",
              animationName: "fadeInUp",
            }}
          >
            <Link to="/doctor/Orthopedic">
              <div className="py-8 px-12 mb-12 rounded-xl bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                <div className="inline-block text-gray-900 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2rem"
                    height="2rem"
                    fill="currentColor"
                    className="bi bi-stethoscope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.5 2a.5.5 0 0 1 .5.5v3.8a4.5 4.5 0 0 0 9 0V2.5a.5.5 0 0 1 1 0V6a5.5 5.5 0 0 1-11 0V2.5a.5.5 0 0 1 .5-.5zM6 16a.5.5 0 0 1-.5-.5V7.7a4.5 4.5 0 0 0-1 0V15.5a.5.5 0 0 1-1 0V7.7a3.5 3.5 0 0 1 1 0V15.5a.5.5 0 0 1-1 0V7.2a3.5 3.5 0 0 1 1.964-3.14.5.5 0 0 1 .536.027l1.77 1.054a4.44 4.44 0 0 0 3.459 0l1.77-1.054a.5.5 0 0 1 .536-.027A3.5 3.5 0 0 1 14 7.2v8.3a.5.5 0 0 1-.5.5H6zm2.5-6a.5.5 0 0 1 .5.5V15.5a.5.5 0 0 1-1 0V10a.5.5 0 0 1 .5-.5zm2-5a.5.5 0 0 1 .5.5V15.5a.5.5 0 0 1-1 0V5.5a.5.5 0 0 1 .5-.5zm2 5a.5.5 0 0 1 .5.5V15.5a.5.5 0 0 1-1 0V10a.5.5 0 0 1 .5-.5z" />
                  </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                  Orthopedic
                </h3>
                <p className="text-gray-500">
                  Orthopedic surgery concerned on organs.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
