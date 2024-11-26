// import React from "react";
import vid from "../../assets/video/hero.mp4";

const Header = () => {
  return (
    <header className="relative w-full  h-[80vh] lg:h-[100vh] -mt-20">
      {/* Gradient Overlay */}
      <div className="absolute w-1/6 inset-0 bg-gradient-to-r from-black  to-transparent z-10"></div>

      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative  max-w-screen-md xl:max-w-screen-xl flex-col items-center md:items-start justify-center w-full mx-auto  z-20 font-zed flex px-4  h-full">
        <div className="text-center md:text-start">
         <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semi-bold block ">
            <span className="block">Generate With AI,</span>
            <span className="block">Scan, Mint, Sell </span>& Trade
         </h1>
         <p className=" py-4 text-gray-200 w-2/3 mx-auto md:mx-2">
           <span></span>Explore 3dotlink, where Web3 meets cultural legacy, and AI breathes life into NFTs
         </p>
         <button className="bg-primaryLight text-white text-sm py-3 px-8 mt-4 rounded-md font-sans">
            {`Buy NFT'S`}
         </button>

        </div>
      </div>
      <p className="h-2 md:h-4 xl:h-6 bg-red-700"></p>

    </header>
  );
};

export default Header;
