
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUser } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import FitnessCards from "./components/workout";
import Meditation from "./components/Meditation";
import NutritionPage from "./components/Nutrition";
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
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          
          <Route path="/workout" element={<FitnessCards/>}/>
          <Route path="/Meditation" element={<Meditation/>}></Route>
          <Route path="/Nutrition" element = {<NutritionPage/>}></Route>


        </Routes>
      </div>
    </Router>
  );
}
export default App;