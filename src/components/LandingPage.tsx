import React from "react";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";

const LandingPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="flex bg-gray-900 text-white py-20 h-auto">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-1/2">
          <Fade direction="up" triggerOnce>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">DriveBiz</h1>
            <p className="text-3xl md:text-5xl mb-8">
              כל מה שאתם צריכים כדי שהעסק שלכם ינוע קדימה.
              <br />
            </p>
            <p className="text-base md:text-xl mb-8">
              אנו מפתחים כלים לפלטפורמת הווצאפ שמנהלים את העסק שלכם אוטומטית,
              פיתוח בוטי מכירות, פיתוח בוטי קידום לעסק או לסטטוס שלכם וניהול
              קמפיינים אוטומטיים בווצאפ.
            </p>
          </Fade>
        </div>
        <div className="w-1/2">
          <img
            src="src/assets/sells_bot-removebg-preview.png"
            alt=""
            className="mx-auto w-max h-auto m-0"
          />
        </div>
      </div>

      {/* Results Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Results We Achieve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Slide direction="left" triggerOnce>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Fact 1</h3>
                <p>Description of the fact or result.</p>
              </div>
            </Slide>
            <Slide direction="up" triggerOnce>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Fact 2</h3>
                <p>Description of the fact or result.</p>
              </div>
            </Slide>
            <Slide direction="right" triggerOnce>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Fact 3</h3>
                <p>Description of the fact or result.</p>
              </div>
            </Slide>
          </div>
        </div>
      </div>

      {/* Numbers Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Our Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <Fade direction="up" triggerOnce delay={50}>
              <div className="text-center">
                <motion.h3
                  className="text-5xl font-bold"
                  whileHover={{ scale: [null, 1.5, 1.4] }}
                >
                  1000
                </motion.h3>
                <p>Businesses Served</p>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce delay={200}>
              <div className="text-center">
                <motion.h3
                  className="text-5xl font-bold"
                  whileHover={{ scale: [null, 1.5, 1.4] }}
                >
                  500
                </motion.h3>
                <p>Successes</p>
              </div>
            </Fade>
            {/* Add more number cards as needed */}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Our Services and Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <Slide direction="left" triggerOnce>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Service 1</h3>
                <p>Description of the service or solution.</p>
              </div>
            </Slide>
            <Slide direction="up" triggerOnce>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Service 2</h3>
                <p>Description of the service or solution.</p>
              </div>
            </Slide>
            <Slide direction="right" triggerOnce>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2">Service 3</h3>
                <p>Description of the service or solution.</p>
              </div>
            </Slide>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            Leave Your Contact Details
          </h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LandingPage;
