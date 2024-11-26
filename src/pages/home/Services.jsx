import service from "../../assets/video/service.mp4";
import { Artist } from "../../constants/Svg";
import "../../styling/global.css";

//icons
import money from "../../assets/images/s-money.png";
import cmask from "../../assets/images/s-mask.png";
import chase from "../../assets/images/s-chase.png";
import health from "../../assets/images/s-health.png";
import prsv from "../../assets/images/s-mmasks.png";
import magic from "../../assets/images/s-magic.png";


const Services = () => {
  const  sSection = [
    {
      id: 1,
      icon: money,
      title: "Long-Term success and stability"
    },
    {
      id: 2,
      icon: cmask,
      title: "Digital cultural exchange"
    },
    {
      id: 3,
      icon: chase,
      title: "Empowering  Artists"
    },
    {
      id: 4,
      icon: health,
      title: "Fostering a global community"
    },
    {
      id: 5,
      icon: prsv,
      title: "Preservation of cultural art"
    },
    {
      id: 6,
      icon: magic,
      title: "Democratizing art globally"
    },
  ]
  return (
    <div className="services-section h-auto">
      <p className="h-2 md:h-4 xl:h-6 bg-red-700"></p>
      <div className="main relative  h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" inset-0 w-full h-fit z-0 object-co"
        >
          <source src={service} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0  m-auto text-white my-auto h-fit lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className=" grid grid-cols-3 gap-4 w-full  p-4">
             {
              sSection.map(({id,icon,title})=>(
               <div className="relative group overflow-hidden w-fit h-fit flex items-center justify-center " key={id}>
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 ease-in-out bg-gradient-to-r from-red-500 via-red-800/20 to-red-500 blur-lg"></div>

              <div className="relative z-10 overflow-hidden">
                <Artist icon={icon} title={title} />
              </div>
               </div>
              ))
             }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
