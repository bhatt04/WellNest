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
        <section id="bmi"><BmiCalculator/></section>

      </main>
    </div>
  );
}
