import React from "react";

function About() {
  return (
    <div className="w-full px-6 sm:px-8 lg:px-40 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Image Section */}
        <div className="order-2 lg:order-1">
          <img
            className="rounded-2xl w-full h-[400px] lg:h-[500px] object-cover shadow-lg"
            src="/src/assets/phea.png"
            alt="Our Story"
          />
        </div>

        {/* Content Section */}
        <div className="order-1 lg:order-2">
          <div className="space-y-6">
            <div>
              <p className="text-amber-700 font-semibold text-sm uppercase tracking-wider mb-2">
                About Us
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900">
                Our Story
              </h1>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Welcome to our e-commerce platform! We are dedicated to
                providing high-quality products and exceptional customer
                service.
              </p>
              <p className="text-lg">
                Our mission is to make shopping easy and enjoyable for
                everyone. We believe in quality, affordability, and customer
                satisfaction.
              </p>
            </div>

            <button className="mt-8 px-8 py-3 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;