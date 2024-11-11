// NutritionPage.jsx
import React from 'react';
// import Navbar from "../components/Navbar";
const NutritionPage = () => {
  return (
    <div className="container mx-auto">
      {/* <header className="mb-8">
        <Navbar />
      </header> */}
      <main>
        <HeroSection />
        <InfoCards />
      </main>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="text-center py-20 mt-10 bg-cover bg-center" style={{ backgroundImage: `url('https://i.pinimg.com/564x/3e/c8/b6/3ec8b68f1f4918c57e71848072840cdf.jpg')` }}>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Customized Nutrition Plans for Every Individual</h1>
      <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8 leading-relaxed">
        Whether you're a beginner or a nutrition enthusiast, our expert dieticians create personalized, effective meal plans. Our approach is designed to help you achieve your nutrition goals and build a healthier lifestyle.
      </p>
      <button className="bg-purple-700 text-white py-3 px-6 rounded-full text-lg hover:bg-orange-500 transition-colors duration-300">
        Find Your Plan to Learn More
      </button>
    </section>
  );
};

const InfoCards = () => {
  const cards = [
    {
      title: 'Nutrition Consultation',
      description: 'Gain confidence for your nutrition journey with our personalized nutrition consultation. Our expert dieticians will assess and evaluate your current diet and suggest a customized plan.',
      image: 'https://i.pinimg.com/enabled_hi/236x/5b/e8/2a/5be82a0724eee4135d50cc6daf411314.jpg'
    },
    {
      title: 'Recipe Suggestions and Meal Ideas',
      description: 'A collection of healthy recipes categorized by meal type, dietary preferences, and health goals, ensuring users find the perfect dish for their needs.',
      image: 'https://i.pinimg.com/enabled_hi/564x/f4/2a/a1/f42aa193c7d9f5f13654b20a6e240d18.jpg'
    },
    {
      title: 'Healthy Snacking Ideas',
      description: 'Provide a variety of nutritious, low-calorie snack options to help users maintain energy and curb cravings between meals.',
      image: 'https://i.pinimg.com/474x/58/d7/00/58d7001374156d2d55222e7e0ba72776.jpg'
    },
    {
      title: 'Personalized Nutrition Plans',
      description: 'Our certified dieticians offer personalized nutrition plans for every individual based on specific goals. Every step of the way, we are here to make your nutrition journey impactful.',
      image: 'https://i.pinimg.com/474x/89/be/9f/89be9f33a0177154ac3507bf0b3aede0.jpg'
    },
    {
      title: 'Nutritional Label Decoding',
      description: 'Teach users how to read and understand food labels so they can make informed choices while grocery shopping or dining out.',
      image: 'https://i.pinimg.com/564x/0d/21/7f/0d217f8cae0c72fc29094e81a8b221e0.jpg'
    },
  ];

  return (
    <section className="flex flex-wrap mt-4 justify-center gap-6 py-12 bg-blue-100">
      {cards.map((card, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-md p-6 text-center hover:transform hover:-translate-y-2 transition-transform duration-300">
          <img src={card.image} alt={card.title} className="w-full h-56 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold text-purple-700 mb-2">{card.title}</h3>
          <p className="text-gray-700 text-base leading-relaxed">{card.description}</p>
        </div>
      ))}
    </section>
  );
};

export default NutritionPage;
