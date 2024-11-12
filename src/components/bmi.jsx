import React, { useState } from 'react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [bmiCategory, setBMICategory] = useState('');

  const calculateBmi = () => {
    if (height === '' || height <= 0) {
      alert('Please enter a valid height greater than 0.');
      return;
    }

    const ipWeight = Number(weight);
    const ipHeightInMeters = Number(height) / 100;
    const calculatedBMI = (ipWeight / (ipHeightInMeters * ipHeightInMeters)).toFixed(2);
    setBmi(calculatedBMI);

    switch (true) {
      case calculatedBMI < 18.5:
        setBMICategory('Underweight');
        break;
      case calculatedBMI >= 18.5 && calculatedBMI < 25:
        setBMICategory('Normal weight');
        break;
      case calculatedBMI >= 25 && calculatedBMI < 30:
        setBMICategory('Overweight');
        break;
      default:
        setBMICategory('Obese');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 mt-24 bg-pink-200  shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">BMI Calculator</h2>
      
      <div className="mb-4">
        <label htmlFor="weight" className="block text-lg mb-2">Weight (kg)</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter weight: "
        />
      </div>

      <div className="mb-4">
        <label htmlFor="height" className="block text-lg mb-2">Height (cm)</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter height: "
        />
      </div>

      <button
        onClick={calculateBmi}
        className="w-full py-3 bg-lime-300 text-black rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Calculate BMI
      </button>

      {bmi && (
        <div className="mt-6 text-center mt-10 border-4 border-white" >
          <p className="text-xl font-semibold">Your BMI: {bmi}</p>
          <p className="text-lg mt-2 text-gray-700">Category: {bmiCategory}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
