import React from "react";

const Header = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url('/bg2.png')` }}
    >

      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="/logo.jpg"
          alt="Central"
          className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
        />
      </div>
    </section>
  );
};

export default Header;
