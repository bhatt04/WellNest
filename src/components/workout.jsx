import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Navbar from "../components/Navbar";

const HeroSection = () => {
  return (
    <section className="relative text-center p-20 bg-cover bg-center" style={{ backgroundImage: "url('https://e0.pxfuel.com/wallpapers/681/31/desktop-wallpaper-man-muscles-pose-back-strength-shadow-strenght.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="text-white text-6xl mb-5 font-bold">WELCOME TO THE WELLNEST GYM</h1>
      <p className="text-white text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-bold">
        Fuel your 'Wellness' with 'WellNest'
      </p>
      <div className="flex justify-center gap-4 mb-5">
        {/* Join Our Community Button - Using Link for navigation */}
        <Link to="/join" className="px-6 py-3 bg-cyan-300 text-black rounded-lg hover:bg-green-700 transition duration-300">
          Join Our Community
        </Link>

        {/* Learn More Button - Using Link for navigation */}
        <Link to="/learn-more" className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300">
          Learn More
        </Link>
      </div>
      <p className="text-white mt-5 text-xl font-bold">#BeBetterEveryDay</p>
    </section>
  );
};

const FitnessCards = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/blurred-abstract-gym-background-with-workout-equipment-modern-athletic-energy_217468-30303.jpg')" }}>
      
      <HeroSection />
      <div className="flex flex-wrap justify-center mt-12">
        <div className="fitness-card max-w-xs mx-4 my-4 bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
          <Link to="/contact"><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyY_eQHwnpTEnFEvOAiHxEv1MjzYaDIPqZDQ&s"
            alt="Fitness Consultation"
            className="w-full h-48 object-cover rounded-lg mb-4"
          /></Link>
          <h3 className="text-lg text-purple-700 mb-4 font-bold">FITNESS CONSULTATION</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Gain confidence for your fitness journey with our personalized fitness
            consultation. Our expert trainers will assess and evaluate your
            current fitness level and suggest a customized plan.
          </p>
        </div>

        <div className="fitness-card max-w-xs mx-4 my-4 bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <Link to="/contact"><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjrQggUeuV-uAPFc7oDUKlFc60AVPia_lZw&s"
            alt="Group Fitness"
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg text-purple-700 mb-4 font-bold">GROUP FITNESS</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            WellNest offers instructor-led dynamic and engaging group
            classes. These group classes help individuals gain confidence and
            build a social aspect that keeps them mentally fit.
          </p></Link>
        </div>

        <div className="fitness-card max-w-xs mx-4 my-4 bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <Link to="/contact"><img
            src="https://jackcityfitness.com/wp-content/uploads/bigstock-A-Personal-Trainer-Motivates-T-440620910-1250x834.jpg"
            alt="Personalized Training"
            className="w-full h-48 object-cover rounded-lg mb-4"
          /></Link>
          <h3 className="text-lg text-purple-700 mb-4 font-bold">PERSONALIZED TRAINING</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            At WellNest, we offer personalized training for every specific
            fitness goal. Our expert certified trainers are here to help you every
            step of the way, making your journey impactful.
          </p>
        </div>

        <div className="fitness-card max-w-xs mx-4 my-4 bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
        <Link to="/contact"><img
            src="https://media.istockphoto.com/id/693103622/photo/smiling-people-doing-power-fitness-exercise-at-yoga-class.jpg?s=612x612&w=0&k=20&c=E1vzKxbcZ7UbYkaJnT9Pbir0xwFmWqxquQjM4iAjBDU="
            alt="Aerobics"
            className="w-full h-48 object-cover rounded-lg mb-4"
          /></Link>
          <h3 className="text-lg text-purple-700 mb-4 font-bold">AEROBICS</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Join our high-energy aerobics sessions to improve cardiovascular health,
            boost energy, and have fun! Our aerobics classes are designed to keep you moving,
            burning calories, and feeling great.
          </p>
        </div>
      </div>

      {/* Join Our Community Section */}
      <footer className="mt-12 text-center bg-white py-8">
        <h2 className="text-2xl font-bold mb-4">Get a Free Day Pass Now!!</h2>
        <Link to="/join" className="px-6 py-3 bg-cyan-300 text-black rounded-lg hover:bg-green-700 transition duration-300">
          Join Fast!!
        </Link>
      </footer>
    </div>
  );
};

export default FitnessCards;
