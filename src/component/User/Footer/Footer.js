import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div class=" bg-gray-900">
        <div class="max-w-2xl mx-auto text-white py-10">
          <div class="text-center">
            <h3 class="text-3xl mb-3"> Download our Health app </h3>
            <p> Stay fit. All day, every day. </p>
            <div class="flex justify-center my-10">
              <div class="flex items-center border  rounded-lg px-4 py-2 w-52 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  class="w-7 md:w-8"
                  alt="hello"
                />
                <div class="text-left ml-3">
                  <p class="text-xs text-gray-200"><Link to={"#"}>Download on</Link>  </p>
                  <p class="text-sm md:text-base"> <Link to={"#"}> Google Play Store</Link> </p>
                </div>
              </div>
              <div class="flex items-center border  rounded-lg px-4 py-2 w-44 mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  class="w-7 md:w-8"
                  alt="hello"
                />
                <div class="text-left ml-3">
                  <p class="text-xs text-gray-200"><Link to={"#"}>Download on</Link> </p>
                  <p class="text-sm md:text-base"><Link to={"#"}>Apple Store</Link>  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p class="order-2 md:order-1 mt-8 md:mt-0">
              {" "}
              <Link to={"#"}>
              &copy;Rescue Hospital, 2024. </Link>{" "}
            </p>
            <div class="order-1 md:order-2">
              <span class="px-2"><Link to={"#"}>About us</Link></span>
              <span class="px-2 border-l"><Link to={"#"}>Contact us</Link></span>
              <span class="px-2 border-l"><Link to={"#"}>Privacy Policy</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
