import React from "react";
import { Link } from "react-router-dom";
import Wellnest from "../assets/WellNest.jpg";
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
      <main className="container mx-auto px-4 py-12" >
        <section className="text-center mb-20">
          <div className="bg-white container mx-auto flex flex-col justify-center items-center py-2">
            <img
              src={Wellnest}
              alt="Wellnest"
              className="w-[80%] sm:w-1/2 md:w-1/3 lg:w-1/4"
            />
            <h2 className="text-2xl sm:text-2xl font-bold italic text-pink-400 mb-6">
              Nourish your mind Nourish your soul
            </h2>
          </div>
        </section>

        <section>
          <ImageSlider />
        </section>
       <section><h2>hello</h2></section>  
        {/* BmiCalculator section with background image */}
        <div
          className="bg-cover bg-center py-16"
          
        >
          <section>
            <BmiCalculator />
          </section>
        </div>
      </main>
    </div>
  );
}
