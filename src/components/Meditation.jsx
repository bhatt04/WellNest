import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MeditationSteps() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [initialMinutes, setInitialMinutes] = useState(5);
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && !isPaused && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && timerStarted) {
      clearInterval(timer);
      setIsRunning(false);
      alert("Time's up!");
    }
    return () => clearInterval(timer);
  }, [isRunning, isPaused, time, timerStarted]);

  const startTimer = () => {
    if (!timerStarted) {
      setTime(initialMinutes * 60);
    }
    setIsRunning(true);
    setIsPaused(false);
    setTimerStarted(true);
  };

  const pauseTimer = () => {
    setIsPaused(true);
    setIsRunning(false);
  };

  const resumeTimer = () => {
    setIsPaused(false);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(0);
    setTimerStarted(false);
  };

  const handleInputChange = (e) => {
    setInitialMinutes(Number(e.target.value));
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <section className="bg-yellow-100 p-5 rounded-lg mt-6">
      <h2 className="text-2xl font-bold">How to Get Started with Meditation</h2>
      <p>Follow these simple steps to begin your meditation journey:</p>
      <ol className="list-decimal list-inside space-y-3 mt-3">
        <li className="bg-green-100 border border-green-300 p-3 rounded-md shadow">
          Choose a quiet place where you won't be disturbed.
        </li>
        <li className="bg-green-100 border border-green-300 p-3 rounded-md shadow">
          Set a time limit (start with 5-10 minutes).
        </li>
        <li className="bg-green-100 border border-green-300 p-3 rounded-md shadow">
          Focus on your breath and gently bring your mind back when it wanders.
        </li>
      </ol>

      {/* Timer section */}
      <div className="mt-6">
        <p className="bg-green-200 rounded-lg py-2">Set Timer (in minutes):</p>
        <input
          type="number"
          value={initialMinutes}
          onChange={handleInputChange}
          min="1"
          disabled={isRunning || timerStarted}
          className="w-12 p-2 border border-gray-400 rounded-md mr-3"
        />
        <p>Time Left: {formatTime(time)}</p>

        {/* Timer controls */}
        {!isRunning && !isPaused && !timerStarted && (
          <button onClick={startTimer} className="btn">
            Start Timer
          </button>
        )}
        {isRunning && !isPaused && (
          <button onClick={pauseTimer} className="btn">
            Pause Timer
          </button>
        )}
        {!isRunning && isPaused && (
          <button onClick={resumeTimer} className="btn">
            Resume Timer
          </button>
        )}
        {(isRunning || isPaused) && (
          <button onClick={stopTimer} className="btn bg-red-500 hover:bg-red-600">
            Stop Timer
          </button>
        )}
      </div>
    </section>
  );
}

export default function Meditation() {
  return (
    <div className="min-h-screen bg-green-200 text-center p-5">
      {/* Hero Section */}
      <section
        className="hero-section text-center p-10 text-white"
        style={{
          backgroundImage:
            "url('https://www.ramana-maharshi.org/wp-content/uploads/2024/06/Comparing_Hindu_and_Buddhist_Meditation_Practices_0001.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl font-bold">MindSage</h1>
        <h1>Unlock Your Inner Peace with Meditation</h1>
        <p>
          Find calm, improve focus, and enhance your mental and physical
          well-being.
        </p>
      </section>

      {/* What is Meditation Section */}
      <section className="bg-green-50 p-5 rounded-lg mt-5 border border-green-300">
        <h2 className="text-3xl font-bold">What is Meditation?</h2>
        <p className="mt-2">
          Meditation is a practice of mindfulness and relaxation that helps
          clear the mind and reduce stress. It's a simple way to improve your
          mental, emotional, and physical well-being.
        </p>
        <ul className="list-disc list-inside mt-3">
          <li>Reduces stress</li>
          <li>Increases self-awareness</li>
          <li>Promotes emotional health</li>
          <li>Enhances concentration</li>
          <li>Improves sleep quality</li>
        </ul>
      </section>

      {/* Types of Meditation Section */}
      <section
        className="p-5 rounded-lg mt-5 text-black bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://thumbs.dreamstime.com/b/tranquil-meditation-scene-water-surrounded-nature-foliage-perfect-relaxation-mindfulness-themes-335078414.jpg')",
        }}
      >
        <h2 className="text-3xl font-bold mb-4">Types of Meditation</h2>

        {/* Meditation Types */}
        <div className="grid gap-4">
          <a
            href="https://www.youtube.com/watch?v=ez3GgRqhNvA"
            className="bg-white/80 p-5 rounded-lg text-center shadow hover:bg-green-200 transition"
          >
            <h3 className="text-2xl font-semibold text-green-700">Guided Meditation</h3>
            <p>
              Follow guided instructions to bring your mind into a state of calm
              and focus.
            </p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=ssss7V1_eyA"
            className="bg-white/80 p-5 rounded-lg text-center shadow hover:bg-green-200 transition"
          >
            <h3 className="text-2xl font-semibold text-green-700">Mindfulness Meditation</h3>
            <p>
              A simple practice to focus on the present moment, allowing you to
              observe your thoughts without judgment.
            </p>
          </a>
          <a
            href="https://www.youtube.com/watch?v=enJyOTvEn4M"
            className="bg-white/80 p-5 rounded-lg text-center shadow hover:bg-green-200 transition"
          >
            <h3 className="text-2xl font-semibold text-green-700">Breathing Exercises</h3>
            <p>Simple breathing techniques to calm the mind and reduce stress.</p>
          </a>
        </div>
      </section>

      {/* How to Get Started Section */}
      <MeditationSteps />

      {/* Benefits Section */}
      <section
        className="p-5 rounded-lg mt-5 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/magic-deep-green-forest-with-fairytale-sunny-evening-light-through-branches-trees-landscape-myste_124507-13313.jpg')",
        }}
      >
        <h2 className="text-3xl font-bold">Benefits of Daily Meditation</h2>
        <ul className="list-disc list-inside mt-3">
          <li>Improved focus and concentration</li>
          <li>Lower stress levels and better emotional control</li>
          <li>Improved sleep and physical health</li>
        </ul>
      </section>

      {/* Join Meditation Community Section */}
      <footer className="bg-green-400 p-5 rounded-lg mt-5 text-white">
        <h2 className="text-3xl font-bold">Join Our Meditation Community</h2>
        <p className="mt-2">
          Sign up for our newsletter or join live meditation sessions to deepen
          your practice and connect with others.
        </p>
        <Link to="/signup">
          <button className="mt-3 bg-green-600 p-2 rounded hover:bg-green-700 transition">
            Join Now
          </button>
        </Link>
      </footer>
    </div>
  );
}