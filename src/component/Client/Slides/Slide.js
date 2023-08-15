import React from 'react';

import g1 from '../../images/pp.jpg';

const Slide = () => {
    return (
        <div>
             <div class=" md:block mx-0 max-w-xl flex rounded-2xl bg-gray-700  ">
                  <div class="swiper-container flex-col flex  self-center">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <blockquote class="text-left ">
                          <div class="relative">
                            <div class="relative">
                              <img src={g1} alt="aji"
                                class="object-cover w-full h-60 mx-auto rounded-t-2xl" />
                               <div class="rounded-t-2xl absolute bg-gradient-to-t from-gray-800 opacity-75 inset-0 z-0"></div> 
                            </div>
                          </div>

                          <div class="relative m-5 p-5">
                            <svg class="absolute left-0 w-6  fill-indigo-500" viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                            </svg>
                            <p class="text-gray-100 text-xl px-5">
                              You will Win If you want something like your girl.
                            </p>
                            <svg class="absolute right-0  w-6 fill-indigo-500" viewBox="0 0 512 512"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
                            </svg>
                            <div class="text-sm mt-5 mx-5">
                              <p class="font-medium text-white">MONIRUZZAMAN</p>
                              <p class="mt-1 text-gray-300">CEO Of Tech-BD </p>
                            </div>
                          </div>

                        </blockquote>
                      </div>
                      </div>
                      </div>
                      </div>
        </div>
    );
};

export default Slide;