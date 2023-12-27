import React from 'react';
import d1 from '../component/images/d1.jfif'
import d2 from '../component/images/d2.jfif'
import d3 from '../component/images/d3.jfif'
import d4 from '../component/images/d4.jfif'
import d5 from '../component/images/d5.jfif'
import d6 from '../component/images/d6.jfif'


const OurDoctorsSection = () => {
  return (
    <div id="doctors" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-gray-100">
      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* Heading start */}
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">Our Doctors</h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: '0 auto', height: '35px' }}
            xmlSpace="preserve"
          >
            {/* ... (SVG code for decoration) ... */}
          </svg>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Meet our experienced and dedicated medical professionals.
          </p>
        </header>
        {/* End heading */}
        {/* row */}
        <div className="flex flex-wrap flex-row -mx-4 text-center">
          {/* Doctor 1 */}
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}
          >
            <div className="py-8 px-6 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="mb-4 rounded-full overflow-hidden mx-auto">
                {/* Doctor image */}
                <img
                  src={d1}
                  alt="Doctor"
                  className="object-cover object-center w-24 h-24 rounded-full"
                />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Dr. Jane Smith</h3>
              <p className="text-gray-500">Cardiologist</p>
            </div>
          </div>

          {/* Doctor 2 */}
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".1s"
            style={{
              visibility: 'visible',
              animationDuration: '1s',
              animationDelay: '0.1s',
              animationName: 'fadeInUp',
            }}
          >
            <div className="py-8 px-6 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="mb-4 rounded-full overflow-hidden mx-auto">
                {/* Doctor image */}
                <img
                  src={d2}
                  alt="Doctor"
                  className="object-cover object-center w-24 h-24 rounded-full"
                />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Dr. John Doe</h3>
              <p className="text-gray-500">Pediatrician</p>
            </div>
          </div>

          {/* Doctor 3 */}
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
            style={{
              visibility: 'visible',
              animationDuration: '1s',
              animationDelay: '0.2s',
              animationName: 'fadeInUp',
            }}
          >
            <div className="py-8 px-6 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="mb-4 rounded-full overflow-hidden mx-auto">
                {/* Doctor image */}
                <img
                  src={d3}
                  alt="Doctor"
                  className="object-cover object-center w-24 h-24 rounded-full"
                />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Dr. Sarah Johnson</h3>
              <p className="text-gray-500">Dermatologist</p>
            </div>
          </div>

          {/* Doctor 4 */}
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
            style={{
              visibility: 'visible',
              animationDuration: '1s',
              animationDelay: '0.3s',
              animationName: 'fadeInUp',
            }}
          >
            <div className="py-8 px-6 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="mb-4 rounded-full overflow-hidden mx-auto">
                {/* Doctor image */}
                <img
                  src={d4}
                  alt="Doctor"
                  className="object-cover object-center w-24 h-24 rounded-full"
                />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Dr. Michael Smith</h3>
              <p className="text-gray-500">Orthopedic Surgeon</p>
            </div>
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
            style={{
              visibility: 'visible',
              animationDuration: '1s',
              animationDelay: '0.3s',
              animationName: 'fadeInUp',
            }}
          >
            <div className="py-8 px-6 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="mb-4 rounded-full overflow-hidden mx-auto">
                {/* Doctor image */}
                <img
                  src={d5}
                  alt="Doctor"
                  className="object-cover object-center w-24 h-24 rounded-full"
                />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Dr. Michael Smith</h3>
              <p className="text-gray-500">Orthopedic Surgeon</p>
            </div>
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".3s"
            style={{
              visibility: 'visible',
              animationDuration: '1s',
              animationDelay: '0.3s',
              animationName: 'fadeInUp',
            }}
          >
            <div className="py-8 px-6 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="mb-4 rounded-full overflow-hidden mx-auto">
                {/* Doctor image */}
                <img
                  src={d6}
                  alt="Doctor"
                  className="object-cover object-center w-24 h-24 rounded-full"
                />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Dr. Michael Smith</h3>
              <p className="text-gray-500">Orthopedic Surgeon</p>
            </div>
          </div>
          <div
            className="flex-shrink px-4 max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:px-6 wow fadeInUp"
            data-wow-duration="1s"
            style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}
          >
            <div className="py-8 px-6 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="mb-4 rounded-full overflow-hidden mx-auto">
                {/* Doctor image */}
                <img
                  src={d1}
                  alt="Doctor"
                  className="object-cover object-center w-24 h-24 rounded-full"
                />
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Dr. Jane Smith</h3>
              <p className="text-gray-500">Cardiologist</p>
            </div>
          </div>

          
          <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
            <div className="py-8 px-6 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
              <div className="mb-4 rounded-full overflow-hidden mx-auto">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
  </svg>
              </div>
              <h3 className="text-lg leading-normal mb-2 font-semibold text-black">See More</h3>
              <p className="text-gray-500">Explore additional doctors.If need you more information about our Doctors</p>
            </div>
          </div>
        </div>
        {/* end row */}
      </div>
    </div>
  );
};

export default OurDoctorsSection;
