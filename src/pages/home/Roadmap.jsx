// import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import vid from "../../assets/video/roadmap-anime.mp4";
import pic1 from "../../assets/images/r1.png";
import nft from "../../assets/images/nft.png";
import "../../styling/global.css";

const Roadmap = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-black py-8">
      <div className="max-w-screen-xl w-full h-fit px-4 sm:px-8 lg:px-8">
        <div>
          {/* Heading Section */}
          <div className="heading flex flex-col justify-center items-center py-4 gap-2">
            <h4 className="text-3xl font-zed text-white">
              Road<span className="text-primaryLight">map</span>
            </h4>
            <p className="text-slate-100 my-2 text-xl  lg:text-2xl">
              Guiding the fusion of culture, AI, and Web3 innovation
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="relative z-10"
          >
            <SwiperSlide>
              <div className="phases  pb-8 mt-8 ">
                <div className="phase1 relative z-10 pt-20">
                  <h4 className="text-xl py-3 pl-8 text-primaryDark bg-red-800/40 w-1/2 font-medium">
                    Phase - Ⅰ
                  </h4>

                  <div className="conditions bg-primaryDark w-full mt-8 pl-8 py-2 text-slate-100 relative z-20 ">
                    <div className=" absolute  border-t-2 border-r-2 w-8 h-8 right-0 top-0 -mt-2 -mr-2  border-yellow-50"></div>
                    <ul className="list-disc pl-4 lg:pl-12 text-sm md:text-xl pb-2">
                      <li>Goal Defining</li>
                      <li>Market Research</li>
                      <li>Whitepaper v1</li>
                      <li>Initial Funding Secured</li>
                    </ul>
                    <img
                      src={pic1}
                      className="absolute top-0  -mt-56 right-12 z-10  "
                      alt="phase 1 pic"
                    />
                  </div>

                  <div className="anime absolute right-0 top-0 z-10 w-[400px] h-[400px] overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 top-0 right-0 -mt-20 w-full h-full object-cover z-0"
                    >
                      <source src={vid} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="phase2 relative z-10 pt-40">
                  <h4 className="text-xl py-3 pl-16 text-primaryDark bg-red-800/40 ml-[30%] z-40 w-1/2 font-medium">
                    Phase - Ⅱ
                  </h4>

                  <div className="conditions bg-primaryDark w-full mt-8 pl-8 py-2 text-slate-100 relative z-20 ">
                    <div className=" absolute  border-t-2 border-r-2 w-8 h-8 right-0 top-0 -mt-2 -mr-2  border-yellow-50"></div>
                    <ul className="list-disc w-fit ml-[30%] pl-12 text-xl pb-2">
                      <li>Goal Defining</li>
                      <li>Market Research</li>
                      <li>Whitepaper v1</li>
                      <li>Initial Funding Secured</li>
                    </ul>
                    <img
                      src={pic1}
                      className="absolute top-0  -mt-56 left-8 z-10  "
                      alt="phase 1 pic"
                    />
                  </div>

                  <div className="anime absolute left-0 top-0 z-10 w-[400px] h-[400px] overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 -ml-4 right-0  w-full h-full object-cover z-0"
                    >
                      <source src={vid} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="phase3 relative z-10 pt-40">
                  <h4 className="text-xl py-3 pl-8 text-primaryDark bg-red-800/40 w-1/2 font-medium">
                    Phase - Ⅲ
                  </h4>

                  <div className="conditions bg-primaryDark w-full mt-8 pl-8 py-2 text-slate-100 relative z-20 ">
                    <div className=" absolute  border-t-2 border-r-2 w-8 h-8 right-0 top-0 -mt-2 -mr-2  border-yellow-50"></div>
                    <ul className="list-disc pl-12 text-xl pb-2">
                      <li>Goal Defining</li>
                      <li>Market Research</li>
                      <li>Whitepaper v1</li>
                      <li>Initial Funding Secured</li>
                    </ul>
                    <img
                      src={pic1}
                      className="absolute top-0  -mt-56 right-12 z-10  "
                      alt="phase 1 pic"
                    />
                  </div>

                  <div className="anime absolute right-0 top-0 z-10 w-[400px] h-[400px] overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0  right-0  w-full h-full object-cover z-0"
                    >
                      <source src={vid} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="phase4 relative z-10 pt-40">
                  <h4 className="text-xl py-3 pl-16 text-primaryDark bg-red-800/40 ml-[30%] z-40 w-1/2 font-medium">
                    Phase - Ⅳ
                  </h4>

                  <div className="conditions bg-primaryDark w-full mt-8 pl-8 py-2 text-slate-100 relative z-20 ">
                    <div className=" absolute  border-t-2 border-r-2 w-8 h-8 right-0 top-0 -mt-2 -mr-2  border-yellow-50"></div>
                    <ul className="list-disc w-fit ml-[30%] pl-12 text-xl pb-2">
                      <li>Goal Defining</li>
                      <li>Market Research</li>
                      <li>Whitepaper v1</li>
                      <li>Initial Funding Secured</li>
                    </ul>
                    <img
                      src={pic1}
                      className="absolute top-0  -mt-56 left-8 z-10  "
                      alt="phase 1 pic"
                    />
                  </div>

                  <div className="anime absolute left-0 top-0 z-10 w-[400px] h-[400px] overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 -ml-4 right-0  w-full h-full object-cover z-0"
                    >
                      <source src={vid} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="phases  pb-8 mt-8 ">
                <div className="phase1 relative z-10 pt-20">
                  <h4 className="text-xl py-3 pl-8 text-primaryDark bg-red-800/40 w-1/2 font-medium">
                    Phase - V
                  </h4>

                  <div className="conditions bg-primaryDark w-full mt-8 pl-8 py-2 text-slate-100 relative z-20 ">
                    <div className=" absolute  border-t-2 border-r-2 w-8 h-8 right-0 top-0 -mt-2 -mr-2  border-yellow-50"></div>
                    <ul className="list-disc pl-12 text-xl pb-2">
                      <li>Goal Defining</li>
                      <li>Market Research</li>
                      <li>Whitepaper v1</li>
                      <li>Initial Funding Secured</li>
                    </ul>
                    <img
                      src={pic1}
                      className="absolute top-0  -mt-56 right-12 z-10  "
                      alt="phase 1 pic"
                    />
                  </div>

                  <div className="anime absolute right-0 top-0 z-10 w-[400px] h-[400px] overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 top-0 right-0 -mt-20 w-full h-full object-cover z-0"
                    >
                      <source src={vid} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="phase2 relative z-10 pt-40">
                  <h4 className="text-xl py-3 pl-16 text-primaryDark bg-red-800/40 ml-[30%] z-40 w-1/2 font-medium">
                    Phase - VI
                  </h4>

                  <div className="conditions bg-primaryDark w-full mt-8 pl-8 py-2 text-slate-100 relative z-20 ">
                    <div className=" absolute  border-t-2 border-r-2 w-8 h-8 right-0 top-0 -mt-2 -mr-2  border-yellow-50"></div>
                    <ul className="list-disc w-fit ml-[30%] pl-12 text-xl pb-2">
                      <li>Goal Defining</li>
                      <li>Market Research</li>
                      <li>Whitepaper v1</li>
                      <li>Initial Funding Secured</li>
                    </ul>
                    <img
                      src={pic1}
                      className="absolute top-0  -mt-56 left-8 z-10  "
                      alt="phase 1 pic"
                    />
                  </div>

                  <div className="anime absolute left-0 top-0 z-10 w-[400px] h-[400px] overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 -ml-4 right-0  w-full h-full object-cover z-0"
                    >
                      <source src={vid} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="phase3 relative z-10 pt-40">
                  <h4 className="text-xl py-3 pl-8 text-primaryDark bg-red-800/40 w-1/2 font-medium">
                    Phase - VII
                  </h4>

                  <div className="conditions bg-primaryDark w-full mt-8 pl-8 py-2 text-slate-100 relative z-20 ">
                    <div className=" absolute  border-t-2 border-r-2 w-8 h-8 right-0 top-0 -mt-2 -mr-2  border-yellow-50"></div>
                    <ul className="list-disc pl-12 text-xl pb-2">
                      <li>Goal Defining</li>
                      <li>Market Research</li>
                      <li>Whitepaper v1</li>
                      <li>Initial Funding Secured</li>
                    </ul>
                    <img
                      src={pic1}
                      className="absolute top-0  -mt-56 right-12 z-10  "
                      alt="phase 1 pic"
                    />
                  </div>

                  <div className="anime absolute right-0 top-0 z-10 w-[400px] h-[400px] overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0  right-0  w-full h-full object-cover z-0"
                    >
                      <source src={vid} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="phase4 relative z-10 pt-40">
                  <h4 className="text-xl py-3 pl-16 text-primaryDark bg-red-800/40 ml-[30%] z-40 w-1/2 font-medium">
                    Phase - VIII
                  </h4>

                  <div className="conditions bg-primaryDark w-full mt-8 pl-8 py-2 text-slate-100 relative z-20 ">
                    <div className=" absolute  border-t-2 border-r-2 w-8 h-8 right-0 top-0 -mt-2 -mr-2  border-yellow-50"></div>
                    <ul className="list-disc w-fit ml-[30%] pl-12 text-xl pb-2">
                      <li>Goal Defining</li>
                      <li>Market Research</li>
                      <li>Whitepaper v1</li>
                      <li>Initial Funding Secured</li>
                    </ul>
                    <img
                      src={pic1}
                      className="absolute top-0  -mt-56 left-8 z-10  "
                      alt="phase 1 pic"
                    />
                  </div>

                  <div className="anime absolute left-0 top-0 z-10 w-[400px] h-[400px] overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 -ml-4 right-0  w-full h-full object-cover z-0"
                    >
                      <source src={vid} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="nft mr-auto py-4 ">
        <img src={nft} className="" alt="nft img" />
      </div>
    </section>
  );
};

export default Roadmap;
