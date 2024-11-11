// src/components/WorkoutJournal.js
import React, { useState } from 'react';

function WorkoutJournal() {
  const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');

  const addWorkout = () => {
    if (exercise && sets && reps) {
      setWorkouts([...workouts, { exercise, sets, reps }]);
      setExercise('');
      setSets('');
      setReps('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 drop-shadow-lg">Workout Journal</h1>

      {/* Form Section */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8 mb-10 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">Log a New Workout</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Exercise</label>
          <input
            type="text"
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-200 ease-in-out"
            placeholder="Enter exercise name"
          />
        </div>

        <div className="flex space-x-4 mb-6">
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium mb-1">Sets</label>
            <input
              type="number"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
              className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-200 ease-in-out"
              placeholder="Sets"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium mb-1">Reps</label>
            <input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all duration-200 ease-in-out"
              placeholder="Reps"
            />
          </div>
        </div>

        <button
          onClick={addWorkout}
          className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition-all duration-200 ease-in-out shadow-md"
        >
          Add Workout
        </button>
      </div>

      {/* Workout History Section */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">Workout History</h2>

        {workouts.length === 0 ? (
          <p className="text-gray-500 text-center">No workouts logged yet.</p>
        ) : (
          <ul className="space-y-4">
            {workouts.map((workout, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-blue-50 p-4 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-200 ease-in-out"
              >
                <div>
                  <p className="text-blue-800 font-medium text-lg">{workout.exercise}</p>
                  <p className="text-gray-600 text-sm">Sets: {workout.sets} | Reps: {workout.reps}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default WorkoutJournal;
