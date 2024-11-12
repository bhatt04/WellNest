import React from "react";
import { Link } from "react-router-dom";
import Wellnest from "../assets/WellNest title.jpg";
import ImageSlider from "./slider";
import BmiCalculator from "./bmi";

import {
  Book,
  Sparkles,
  Users,
  TrendingUp,
  Search,
  BookOpen,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white-200">

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
        <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
      {/* Card 1 */}
      <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <i className="text-red-500 text-4xl fas fa-clock"></i>
        </div>
        <h3 className="text-xl font-bold mb-2">PROGRESSION</h3>
        <p className="text-gray-700">
          Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.
        </p>
      </div>

      {/* Card 2 */}
      <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <i className="text-red-500 text-4xl fas fa-dumbbell"></i>
        </div>
        <h3 className="text-xl font-bold mb-2">WORKOUT</h3>
        <p className="text-gray-700">
          With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.
        </p>
      </div>

      {/* Card 3 */}
      <div className="max-w-sm p-6 bg-white rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-4">
          <i className="text-red-500 text-4xl fas fa-clipboard-list"></i>
        </div>
        <h3 className="text-xl font-bold mb-2">NUTRITIONS</h3>
        <p className="text-gray-700">
          Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.
        </p>
      </div>
    </div>
        </section>
        <section id="bmi"><BmiCalculator/></section>

      </main>
    </div>
  );
}
