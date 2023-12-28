import React from "react";
import GoogleMap from "../../../screen/User/Map";
import ContactUsForm from "../ContactForm/ContactForm";

const Contact = () => {
  return (
    <div className="section relative py-10 bg-gray-200">
      <h2 className="text-2xl leading-normal font-bold text-black text-center mb-10">
        Contact Us
      </h2>

      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <div className="h-auto rounded-xl overflow-hidden">
              <GoogleMap />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <div className="bg-white rounded-xl p-6">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
