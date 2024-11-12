import React from "react";
import Wellnest from "../assets/WellNest title.jpg";
import ImageSlider from "./slider";
import BmiCalculator from "./bmi";
import WorkoutJournal from "./WorkoutJournal";



export default function Home() {
  return (
    <div className="min-h-screen bg-white-200 ">

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <div className="bg-white container mx-auto flex flex-col justify-center items-center py-2">
            <img src={Wellnest} alt="Wellnest" mx-auto className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2" />
            <h2 className="text-2xl sm:text-2xl font-bold italic text-pink-400 mb-6">
            Nourish your mind Nourish your soul
            </h2>
          </div>
        </section>
        <section><ImageSlider/></section>


        <section>
        <div className="p-6 bg-gray-100 mt-32 bg-blue-200">
  <h2 className="text-3xl font-bold text-center mb-6">OUR SERVICES</h2>

  <div className="flex flex-wrap justify-center gap-6">
    {/* Card 1 */}
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg text-center group relative">
      <h3 className="text-xl font-bold mb-2">Transform Your Life through Meditation</h3>
      <p className="text-black">
        Through our powerful and unique workshop, learn how to tap into the unlimited spiritual love and wisdom that lies within you.
      </p>
      {/* Image with transparency on hover, keeping text visible */}
      <img 
        src="https://i0.wp.com/www.jepense.org/wp-content/uploads/2024/02/meditation-definition.png?fit=624%2C312&ssl=1" 
        alt="Meditation"
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 mt-0 rounded-lg" 
      />
    </div>

    {/* Card 2 */}
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg text-center group relative">
      <h3 className="text-xl font-bold mb-2">COMPLETE WORKOUT PROGRAMS</h3>
      <p className="text-black">
      Whether you're a beginner or an experienced athlete, we offer comprehensive fitness programs that include cardio, strength training, and flexibility workouts. Get fit at your own pace with our expert-designed plans.
      </p>
      {/* Image with transparency on hover, keeping text visible */}
      <img 
        src="https://media.self.com/photos/61bcd0e05aed92fc4251b026/4:3/w_4946,h_3709,c_limit/GettyImages-1213234926.jpeg" 
        alt="Workout"
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 mt-0 rounded-lg" 
      />
    </div>

    {/* Card 3 */}
    <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg text-center group relative">
      <h3 className="text-xl font-bold mb-2">NUTRITIONS</h3>
      <p className="text-black">
        Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.
      </p>
      {/* Image with transparency on hover, keeping text visible */}
      <img 
        src="https://dpjh8al9zd3a4.cloudfront.net/image/h:720,w:1800/187279?s=d3fec701" 
        alt="Nutritions"
        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 mt-0 rounded-lg" 
      />
    </div>
  </div>
</div>


        </section>
        <section id="bmi"><BmiCalculator/></section>
        <section id="journal"><WorkoutJournal /></section>

      </main>
    </div>
  );
}
