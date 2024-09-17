import React, { useState } from 'react';
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

const slides = [
  {
    id: 1,
    name: "Tapeshwaram Madata Kaja",
    image: "/p1.jpg",
    description: "A flaky Andhra sweet, fried to golden perfection and soaked in fragrant sugar syrup—a delightful dance of crispy layers and sweetness.",
  },
  {
    id: 2,
    name: "Bellam Pootarekulu",
    image: "/p2.jpg",
    description: "A sweet tradition from Atreyapuram, where paper-thin layers hold the sweetness of jaggery and the crunch of nuts.",
  },
  {
    id: 3,
    name: "Neeti Bobbatlu",
    image: "/p3.jpg",
    description: "Neeti Bobbatlu, is a sweet Indian flatbread stuffed with a mixture of cooked chana dal, jaggery, cardamom powder, and ground nutmeg",
  },
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="overflow-hidden">
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

            <div className="flex justify-center items-center">
              <button
                onClick={handlePrevSlide}
                className="text-white text-2xl focus:outline-none"
              >
                &#10094;
              </button>

              <div className="flex flex-col md:flex-row items-center max-w-4xl w-full mx-6">
                <div className="md:w-1/2 w-full p-4">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].name}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="md:w-1/2 w-full p-4 text-left">
                  <h3 className="text-3xl font-bold mb-4 text-white">{slides[currentSlide].name}</h3>
                  <p className="text-lg text-white mb-8">{slides[currentSlide].description}</p>
                  <Link to="./varieties" className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-600" >
                    Explore More
                  </Link>
                </div>
              </div>
              <button
                onClick={handleNextSlide}
                className="text-white text-2xl focus:outline-none"
              >
                &#10095;
              </button>
            </div>
          </div>
        </section>

        <div className="min-h-screen bg-gray-100">
          <div className="py-24 bg-red-700">
            <h2 className="text-3xl sm:text-3xl lg:text-5xl font-bold text-center text-white">About Us</h2>
          </div>
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {aboutBlocks.map((block, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center justify-between mb-12 lg:mb-24 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="w-full lg:w-1/2 h-64 lg:h-80 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-700 ease-in-out hover:scale-105">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0 text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-4">{block.title}</h3>
                  <p className="text-lg text-gray-700">{block.description}</p>
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
