import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-20 bg-white shadow-[0_10px_20px_-15px_rgba(0,0,0)]"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                src="/logo.jpg"
                alt="Logo"
                className="h-full w-20 sm:w-24 sm:mr-10"
              />
            </div>
            <div className="flex lg:items-center flex-col">
              <span className="text-red-700 font-bold text-xl sm:text-xl lg:text-2xl leading-none">
                శ్రీ  వెంకటేశ్వర  స్వీట్స్
              </span>
              <span className="text-red-700 font-bold text-lg sm:text-xl lg:text-2xl">
                ORIGINALLY TAPESWARAM
              </span>
            </div>
          </div>

          <div className="hidden sm:flex sm:ml-6">
            <div className="flex space-x-7">
              <NavLink
                to="/"
                exact
                className="text-gray-700 hover:text-red-600 font-semibold px-3 py-2 rounded-md text-lg"
                activeClassName="text-red-600 border-b-4 border-red-600"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-700 hover:text-red-600 font-semibold px-3 py-2 rounded-md text-lg"
                activeClassName="text-red-600 border-b-4 border-red-600"
              >
                About
              </NavLink>
              <NavLink
                to="/varieties"
                className="text-gray-700 hover:text-red-600 font-semibold px-3 py-2 rounded-md text-lg"
                activeClassName="text-red-600 border-b-4 border-red-600"
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                className="text-gray-700 hover:text-red-600 font-semibold px-3 py-2 rounded-md text-lg"
                activeClassName="text-red-600 border-b-4 border-red-600"
              >
                Contact
              </NavLink>
              <NavLink
                to="/cart"
                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md"
                activeClassName="text-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="rgba(165,42,42,1)"
                >
                  <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
                </svg>
              </NavLink>
            </div>
          </div>

          <div className="sm:hidden flex">
            <svg
              className="mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="rgba(165,42,42,1)"
            >
              <path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path>
            </svg>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              exact
              className="block text-gray-700 hover:text-red-600 font-semibold px-3 py-2 rounded-md text-base"
              activeClassName="text-red-600 border-b-4 border-red-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block text-gray-700 hover:text-red-600 font-semibold px-3 py-2 rounded-md text-base"
              activeClassName="text-red-600 border-b-4 border-red-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/varieties"
              className="block text-gray-700 hover:text-red-600 font-semibold px-3 py-2 rounded-md text-base"
              activeClassName="text-red-600 border-b-4 border-red-600"
              onClick={() => setIsOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className="block text-gray-700 hover:text-red-600 font-semibold px-3 py-2 rounded-md text-base"
              activeClassName="text-red-600 border-b-4 border-red-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
