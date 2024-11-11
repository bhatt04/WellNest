import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-[url('https://example.com/hero-image.jpg')]">
        <div className="absolute inset-0 bg-teal-600 opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white text-center px-4">
            Welcome to <span className="text-yellow-400">Wellnest</span> - Your Path to Wellness
          </h1>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="px-6 sm:px-16 py-12 text-center bg-teal-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-teal-700 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Wellnest, we believe wellness is a journey, not a destination. Our mission is to empower individuals with the tools, knowledge, and community needed to achieve holistic health and balance. From mindfulness to nutrition, we’re here to support your journey every step of the way.
          </p>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="px-6 sm:px-16 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">Our Core Values</h2>
        <div className="flex flex-col md:flex-row gap-6 text-center md:text-left justify-center">
          <div className="md:w-1/3 bg-teal-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Holistic Health</h3>
            <p className="text-gray-600">
              We embrace a whole-person approach that integrates physical, mental, and emotional well-being.
            </p>
          </div>
          <div className="md:w-1/3 bg-teal-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Community First</h3>
            <p className="text-gray-600">
              Building a supportive community where individuals can connect, grow, and inspire one another.
            </p>
          </div>
          <div className="md:w-1/3 bg-teal-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-teal-700 mb-2">Sustainable Wellness</h3>
            <p className="text-gray-600">
              Encouraging sustainable, lasting wellness practices for a balanced, mindful life.
            </p>
          </div>
        </div>
      </section>
      
      {/* Meet Our Team */}
      <section className="px-6 sm:px-16 py-12 bg-teal-50">
        <h2 className="text-3xl font-bold text-center text-teal-700 mb-8">Meet Our Wellness Coaches</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          {/* Coach 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md max-w-xs text-center">
            <img
              src="https://example.com/coach1.jpg"
              alt="Coach 1"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-teal-700">Amelia Hayes</h3>
            <p className="text-gray-600">Mindfulness & Meditation Coach</p>
          </div>
          
          {/* Coach 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md max-w-xs text-center">
            <img
              src="https://example.com/coach2.jpg"
              alt="Coach 2"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-teal-700">Ethan Brown</h3>
            <p className="text-gray-600">Certified Nutritionist</p>
          </div>
          
          {/* Coach 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md max-w-xs text-center">
            <img
              src="https://example.com/coach3.jpg"
              alt="Coach 3"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-teal-700">Sophia Martinez</h3>
            <p className="text-gray-600">Yoga & Wellness Instructor</p>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="px-6 sm:px-16 py-12 bg-teal-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join the Wellnest Community</h2>
          <p className="text-lg mb-6 leading-relaxed">
            Take a step towards a healthier, balanced life. Sign up today and become part of a community dedicated to well-being and personal growth.
          </p>
          <button className="mt-4 px-8 py-3 bg-yellow-400 text-teal-800 font-semibold rounded-lg shadow-lg hover:bg-yellow-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
