// import React, { useState } from "react";
// import GenreSelection from "./GenreSelection"; // Ensure this component exists
// import { useUser } from "../context/UserContext"; // Import context
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const GenreSelectionPage = () => {
//   const { setSelectedGenres } = useUser(); // Get setSelectedGenres from context
//   const [selectedGenres, setSelectedGenresLocal] = useState([]);
//   const navigate = useNavigate(); // Initialize the navigate function

//   const handleSubmit = () => {
//     setSelectedGenres(selectedGenres); // Store selected genres in context
//     navigate("/books"); // Navigate to the books page after submitting
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-blue-100 shadow-md rounded-lg mt-11">
//       <h1 className="text-3xl font-bold text-center mb-6">
//         Select Your Favorite Genres
//       </h1>

//       {/* Genre Selection Component */}
//       <GenreSelection
//         selectedGenres={selectedGenres}
//         setSelectedGenres={setSelectedGenresLocal} // Pass local state updater
//       />

//       <button
//         onClick={handleSubmit}
//         className="mt-6 w-full bg-blue-600 text-white py-2 px-4  hover:bg-blue-700 transition duration-300 font-semibold rounded-xl"
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default GenreSelectionPage;

// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// // Assuming GenreSelection component exists
// const GenreSelection = ({ selectedGenres, setSelectedGenres }) => (
//   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//     {["Fiction", "Non-Fiction", "Mystery", "Sci-Fi", "Romance", "Thriller"].map(
//       (genre) => (
//         <button
//           key={genre}
//           className={`h-20 text-lg font-semibold rounded-lg transition-colors duration-300 ${
//             selectedGenres.includes(genre)
//               ? "bg-blue-600 text-white"
//               : "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-100"
//           }`}
//           onClick={() =>
//             setSelectedGenres((prev) =>
//               prev.includes(genre)
//                 ? prev.filter((g) => g !== genre)
//                 : [...prev, genre]
//             )
//           }
//         >
//           {genre}
//         </button>
//       )
//     )}
//   </div>
// );

// export default function GenreSelectionPage() {
//   const [selectedGenres, setSelectedGenres] = useState([]);
//   const router = useRouter();

//   const handleSubmit = () => {
//     // Assuming you have a way to set user context here
//     // setSelectedGenres(selectedGenres)
//     router.push("/books");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-4">
//       <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl overflow-hidden">
//         <div className="text-center p-6 bg-blue-50">
//           <h1 className="text-3xl font-bold text-blue-600 flex items-center justify-center gap-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-8 w-8"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
//               />
//             </svg>
//             Select Your Favorite Genres
//           </h1>
//         </div>
//         <div className="p-6 space-y-6">
//           <GenreSelection
//             selectedGenres={selectedGenres}
//             setSelectedGenres={setSelectedGenres}
//           />
//           <button
//             onClick={handleSubmit}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold"
//           >
//             Explore Books
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import GenreSelection from "./GenreSelection"; // Ensure this component exists
// import { useUser } from "../context/UserContext"; // Import context
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const GenreSelectionPage = () => {
//   const { setSelectedGenres } = useUser(); // Get setSelectedGenres from context
//   const [selectedGenres, setSelectedGenresLocal] = useState([]);
//   const navigate = useNavigate(); // Initialize the navigate function

//   const handleSubmit = () => {
//     setSelectedGenres(selectedGenres); // Store selected genres in context
//     navigate("/books"); // Navigate to the books page after submitting
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-4">
//       <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl overflow-hidden">
//         <div className="text-center p-6 bg-blue-50">
//           <h1 className="text-3xl font-bold text-blue-600">
//             Select Your Favorite Genres
//           </h1>
//         </div>
//         <div className="p-6 space-y-6">
//           {/* Genre Selection Component */}
//           <GenreSelection
//             selectedGenres={selectedGenres}
//             setSelectedGenres={setSelectedGenresLocal} // Pass local state updater
//           />
//           <button
//             onClick={handleSubmit}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 font-semibold"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GenreSelectionPage;

import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Book, Search, ChevronRight } from "lucide-react";
const GenreSelectionPage = () => {
  const { setSelectedGenres } = useUser();
  const [selectedGenres, setSelectedGenresLocal] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const allGenres = [
    "Fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Historical Fiction",
    "Young Adult",
    "Children's",
    "Biography",
    "Autobiography",
    "Memoir",
    "Self-Help",
    "Business",
    "History",
    "Travel",
    "Cooking",
    "Art",
    "Philosophy",
    "Psychology",
    "Science",
    "Poetry",
    "Drama",
  ];
  const filteredGenres = allGenres.filter((genre) =>
    genre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleGenreToggle = (genre) => {
    setSelectedGenresLocal((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };
  const handleSubmit = () => {
    if (selectedGenres.length < 3) {
      alert("Please select at least 3 genres to continue.");
      return;
    }
    setSelectedGenres(selectedGenres);
    navigate("/books");
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && selectedGenres.length >= 3) {
        handleSubmit();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedGenres]);
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-blue-900
to-blue-800 p-5"
    >
      <div
        className="relative w-full max-w-3xl p-8 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl
overflow-hidden"
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('/placeholder.svg?height=1080&width=1920&text=Book+Collage')",
          }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-center text-white mb-6">
            Discover Your Literary Universe
          </h1>
          <p className="text-center text-indigo-200 mb-8 text-lg">
            Embark on your reading journey by selecting at least 3 genres that
            spark your interest!
          </p>
          <div className="mb-6 relative">
            <input
              type="text"
              placeholder="Search genres..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 rounded-full border-2 border-indigo-300 bg-white/20 text-white
placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-300" />
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 max-h-64 overflow-y-auto pr-4
custom-scrollbar"
          >
            {filteredGenres.map((genre) => (
              <button
                key={genre}
                onClick={() => handleGenreToggle(genre)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedGenres.includes(genre)
                    ? "bg-indigo-600 text-white shadow-lg transform scale-105"
                    : "bg-white/30 text-indigo-100 hover:bg-white/50 hover:text-white"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedGenres.map((genre) => (
              <span
                key={genre}
                className="bg-indigo-700 text-indigo-100 text-xs font-semibold px-3 py-1 rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className={`w-full py-4 text-white font-bold text-lg rounded-full shadow-lg transition duration-300 transform
hover:scale-105 flex items-center justify-center ${
              selectedGenres.length >= 3
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            disabled={selectedGenres.length < 3}
          >
            <Book className="mr-2" />
            Get Recommendations ({selectedGenres.length}/3)
            <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default GenreSelectionPage;