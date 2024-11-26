import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../styling/global.css"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About", path: "/about" },
    { id: 3, title: "Artist", path: "/artist" },
    { id: 4, title: "Staking", path: "/staking" },
    { id: 5, title: "Roadmap", path: "/roadmap" },
    { id: 6, title: "Team", path: "/team" },
    { id: 7, title: "Vesting", path: "/vesting" },
    { id: 8, title: "Marketplace", path: "/marketplace" },
    { id: 9, title: "Connect Wallet", path: "/connect-wallet" },
  ];

  const getLinkClasses = ({ isActive, title }) => {
    const baseClasses = "font-semibold font-medium px-2 md:px-4 py-2 rounded duration-300";
    const activeClasses = isActive ? "text-red-500" : "text-white";
    const specialClasses =
      title === "Connect Wallet"
        ? "bg-red-600 text-white  nowrap hover:bg-transparent border-2 border-red-600"
        : "hover:text-red-800";
    return `${baseClasses} ${activeClasses} ${specialClasses}`;
  };

  return (
    <nav className="sticky " >
            <div className="absolute w-full h-8 inset-0 bg-gradient-to-b from-black  to-transparent z-10 "></div>

      <div className=" nav-section w-11/12 xl:w-10/12 mx-auto px-4">
        <div className="py-2 flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="w-20" />
            </Link>
          </div>
          {/* Desktop Links */}
          <div className="hidden lg:flex gap-2 items-center">
            {navLinks.map(({ id, title, path }) => (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) =>
                  getLinkClasses({ isActive, title })
                }
              >
                {title}
              </NavLink>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black bg-opacity-90 p-4 rounded-lg">
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ id, title, path }) => (
                <li key={id}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      getLinkClasses({ isActive, title })
                    }
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
