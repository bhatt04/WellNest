import React from "react";
import { Link } from "react-router-dom";
import Wellnest from "../assets/WellNest.jpg";

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
    <div className="min-h-screen bg-pink-200">

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">


          <div className="bg-white container mx-auto flex flex-col justify-center items-center py-10">
            <img src={Wellnest} alt="Wellnest" mx-auto className="w-[80%] sm:w-1/2 md:w-1/3 lg:w-1/4" />
            <h2 className="text-2xl sm:text-2xl font-bold italic text-pink-400 mb-6">
            Nourish your mind Nourish your soul
            </h2>
          </div>
          
          <div className="bg-lime-300 py-4">
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

        {/* <section
          id="features"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {[
            {
              icon: Sparkles,
              title: "Personalized Recommendations",
              description:
                "Our AI analyzes your reading history and preferences to suggest books you'll enjoy.",
            },
            {
              icon: Search,
              title: "Advanced Search",
              description:
                "Find books by genre, author, mood, or even specific themes and character types.",
            },
            {
              icon: Users,
              title: "Community Reviews",
              description:
                "Read honest reviews from a community of passionate readers.",
            },
            {
              icon: TrendingUp,
              title: "Trending Titles",
              description:
                "Stay up-to-date with the most popular books across various genres.",
            },
            {
              icon: BookOpen,
              title: "Reading Challenges",
              description:
                "Set personal reading goals and track your progress throughout the year.",
            },
            {
              icon: Book,
              title: "Virtual Bookshelf",
              description:
                "Organize your read, currently-reading, and want-to-read books in one place.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-purple-700">{feature.description}</p>
            </div>
          ))}
        </section> */}


        


        {/* <section id="popular" className="mb-20">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">
            Popular This Week
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {[
              {
                title: "The Midnight Library",
                author: "Matt Haig",
                cover:
                  "https://m.media-amazon.com/images/I/71ls-I6A5KL._SL1500_.jpg",
              },
              {
                title: "Atomic Habits",
                author: "James Clear",
                cover:
                  "https://m.media-amazon.com/images/I/81F90H7hnML._SL1500_.jpg",
              },
              {
                title: "Stop Overthinking",
                author: "Nick Trenton",
                cover:
                  "https://m.media-amazon.com/images/I/81TwewImvVL._SL1500_.jpg",
              },
              {
                title: "Harry Potter #1",
                author: "J.K Rowling",
                cover:
                  "https://ew.com/thmb/9BG86CTLkdQf6KFSHTTjQxsta_E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9781408855652-png-c57764456b554308ae1398474caab3c2.jpg",
              },
            ].map((book, index) => (
              <div key={index} className="text-center">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-64 object-cover mb-4 rounded-lg shadow-md"
                />
                <h3 className="font-bold text-white mb-1">{book.title}</h3>
                <p className="text-purple-100 font-semibold">{book.author}</p>
              </div>
            ))}
          </div>
        </section> */}

        {/* <section className="text-center bg-purple-200 py-16 px-4 rounded-2xl shadow-inner mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-6">
            Start Your Reading Adventure
          </h2>
          <p className="text-lg sm:text-xl text-purple-700 mb-10 max-w-2xl mx-auto">
            Join BookNook today and unlock a world of personalized book
            recommendations. Your next favorite book is waiting for you!
          </p>
          <Link
            to="/select-genres"
            className="bg-purple-600 text-white text-lg px-8 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 inline-block shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        </section> */}

        {/* <section className="text-center mb-20">
          <h2 className="text-3xl font-bold text-purple-100 mb-6">
            What Our Readers Say
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah L.",
                quote:
                  "BookNook helped me rediscover my love for reading. Their recommendations are spot-on!",
              },
              {
                name: "Michael T.",
                quote:
                  "I've found so many great books I wouldn't have discovered otherwise. This website is a game-changer.",
              },
              {
                name: "Emma R.",
                quote:
                  "The community here is amazing. I love discussing books with fellow readers and getting new perspectives.",
              },
            ].map((testimonial, index) => (
              <blockquote
                key={index}
                className="bg-white p-6 rounded-lg shadow-md italic"
              >
                <p className="text-purple-700 mb-4">"{testimonial.quote}"</p>
                <cite className="text-purple-900 font-semibold">
                  - {testimonial.name}
                </cite>
              </blockquote>
            ))}
          </div>
        </section> */}
      </main>

      {/* <footer className="bg-purple-900 text-purple-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">BookNook</h3>
              <p>Connecting readers with their perfect books.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2023 BookNook. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
