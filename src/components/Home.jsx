import React from "react";
import { Link } from "react-router-dom";
import Wellnest from "../assets/WellNest.jpg";
import ImageSlider from "./slider";

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
            <img src={Wellnest} alt="Wellnest" mx-auto className="w-[80%] sm:w-1/2 md:w-1/3 lg:w-1/4" />
            <h2 className="text-2xl sm:text-2xl font-bold italic text-pink-400 mb-6">
            Nourish your mind Nourish your soul
            </h2>
          </div>

          
          <div className="bg-lime-300 py-2">
            <div className="container mx-auto flex justify-center items-center">
                <nav className="flex space-x-6">
                <a href="#" className="text-black hover:text-pink-500">Home</a>
                <a href="#about" className="text-black hover:text-pink-500">About Us</a>
                <a href="#services" className="text-black hover:text-pink-500">Services</a>
                <a href="#shop" className="text-black hover:text-pink-500">Shop</a>
                <a href="#journal" className="text-black hover:text-pink-500">Journal</a>
                <a href="#contact" className="text-black hover:text-pink-500">Contact</a>
              </nav>
          </div>
        
        </div>

        </section>
        <section><ImageSlider/></section>

      </main>
    </div>
  );
}
