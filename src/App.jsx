
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useUser } from "./context/UserContext";
// import Navbar from "./components/Navbar"; // Import Navbar component
// import Register from "./components/Register";
// import Login from "./components/Login";
// import BookSearch from "./components/BookSearch";
// import About from "./components/About";
// import BookDetails from "./components/BookDetails";
// import Home from "./components/Home";
// import GenreSelectionPage from "./components/GenreSelectionPage";
// import SearchResults from "./components/SearchResults";
// import AuthorBooks from "./components/AuthorBook";

// function App() {
//   const { userId, updateGenres } = useUser();

//   const handleGenresSelected = (selectedGenres) => {
//     console.log("Selected Genres:", selectedGenres);
//     updateGenres(userId, selectedGenres);
//   };

//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar is rendered once and is visible on all pages */}
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<About />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/home" element={<Home />} />
//           <Route
//             path="/select-genres"
//             element={
//               <GenreSelectionPage onGenresSelected={handleGenresSelected} />
//             }
//           />
//           <Route path="/books" element={<BookSearch userId={userId} />} />
//           <Route path="/search-results" element={<SearchResults />} />
//           <Route path="/books/:bookId" element={<BookDetails />} />
//           <Route path="/author-books" element={<AuthorBooks />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUser } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import BookSearch from "./components/BookSearch";
import About from "./components/About";
import BookDetails from "./components/BookDetails";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import GenreSelectionPage from "./components/GenreSelectionPage";
import SearchResults from "./components/SearchResults";

import NutritionPage from "./components/Nutrition.jsx";
function App() {
  const { userId, updateGenres } = useUser();
  const handleGenresSelected = (selectedGenres) => {
    console.log("Selected Genres:", selectedGenres);
    updateGenres(userId, selectedGenres);
  };
  return (
    <Router>
      <div className="App">
        {/* Navbar is rendered once and is visible on all pages */}
        {location.pathname !== "/home" && <Navbar />}
        <Routes>
          <Route path="/" element={<About />} />

          <Route path="/register" element={<Register />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/genreSelection" element={<GenreSelectionPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          

          <Route path="/nutri" element={<NutritionPage />} />
          <Route path="/books" element={<BookSearch userId={userId} />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;