import { Link } from "react-router-dom";
import Head from "../../component/assets/images/pp.jpg";

const MainView = () => {
  return (
    <div>
      <section className="relative py-32 lg:py-36 bg-white">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
          </div>
          <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1
              className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900"
            >
              Caring Person{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">
                Rescue{" "}
              </span>
              Your All Illness.
            </h1>
            <p className="mt-8 text-gray-700">
              Our hospital is dedicated to providing top-notch healthcare
              services that cater to your needs. With a team of experienced
              doctors, nurses, and staff, we offer a wide range of medical
              services, including diagnostic procedures, surgeries, emergency
              care, and more.
            </p>
            <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
              <div className="flex sm:flex-row flex-col gap-5 w-full">
                <div>
                  <Link to="/appointment">
                    {" "}
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                      {" "}
                      Appointment Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img
              src={Head}
              alt="Hero "
              width="2350"
              height="2359"
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainView;
