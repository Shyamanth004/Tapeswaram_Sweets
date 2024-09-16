import React from 'react';
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const products = [
  {
    id: 1,
    name: "Odhis' Chenna Pudo",
    image: "/p1.jpg",
  },
  {
    id: 2,
    name: "Bengali Rasgulla",
    image: "/p2.jpg",
  },
  {
    id: 3,
    name: "Punjabi Kaju Katli",
    image: "/p3.jpg",
  },
  // Add more products if needed
];
const aboutBlocks = [
  {
    image: "/ab1.jpg",
    title: "Our Mission",
    description:
      "At Sugary Trails, we promise more than confections. We promise memories. Whether you’re celebrating a birthday, a promotion, or simply the joy of being alive, our sweets are there to sweeten the moment. And as you leave, clutching a pink box tied with satin ribbon, you’ll carry a piece of our warmth with you.",
  },
  {
    image: "/ab2.jpg",
    title: "Our Vision",
    description:
      "In the cozy kitchen, the air thick with anticipation, generations gather. Children perch on countertops, eyes wide as they watch flour transform into dough. Grandparents, their hands weathered and wise, measure spices by intuition. And in the center of it all—the heart of the home—sits a platter of sweets.",
  },
  {
    image: "/ab3.jpg",
    title: "Our Values",
    description:
      "Step inside our cozy haven, and you’ll find shelves adorned with colorful jars of jalebis, trays of buttery pedas, and stacks of fragrant coconut laddoos. Whether you’re celebrating a special occasion or simply craving a sweet escape, Siblings’ Sweet Haven promises to make your heart a little lighter and your taste buds dance with joy.",
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Header /><br />
        <section
          className="relative py-20 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundImage: `url('/sec.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gray-800 bg-opacity-40 backdrop-blur-sm"></div>

          <div className="relative max-w-7xl mx-auto text-center z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-20 text-white">
              Best Selling Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="relative group w-full h-64 rounded-lg overflow-hidden shadow-lg transform transition duration-500 ease-in-out hover:scale-110"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="text-center text-white p-4">
                      <h1 className="text-xl font-bold mb-4">{product.name}</h1>
                      <Link to="./varieties" className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-600" >
                        Explore More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="min-h-screen bg-gray-100">
          <div className="py-24 bg-red-700">
            <h2 className="text-3xl sm:text-3xl lg:text-5xl font-bold text-center text-white">About Us</h2>
          </div>
          <section className="py-16 max-w-7xl mx-auto">

            {aboutBlocks.map((block, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-24 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className="w-[95%] lg:w-1/2 h-64 lg:h-80 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-700 ease-in-out hover:scale-105 animate-slide-In">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-4 animate-fade-in">{block.title}</h3>
                  <p className="playpen-sans-text text-lg px-2 lg:px-0 lg:pr-3 text-gray-700 animate-fade-in">{block.description}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
