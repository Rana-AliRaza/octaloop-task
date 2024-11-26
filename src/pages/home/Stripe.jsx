// import React from 'react'
import vid from "../../assets/video/strips.mp4"
const Stripe = () => {
  return (
    <div className=" ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" inset-0 w-full h-fit z-0"
      >
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
         </video>
         <p className="h-2 sm:h-4 bg-red-600"></p>
    </div>
  )
}

export default Stripe