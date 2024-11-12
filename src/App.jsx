import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUser } from "./context/UserContext";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import AboutUs from "./components/About";
import Home from "./components/Home";
// import WorkoutJournal from"./components/WorkoutJournal";
import FitnessCards from "./components/workout";
import Meditation from "./components/Meditation";
import NutritionPage from "./components/Nutrition";
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';



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
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nutri" element={<NutritionPage />} />
          <Route path="/medi" element={<Meditation />} />
          <Route path="/workout" element={<FitnessCards/>}/>
          <Route path="/meditation" element={<Meditation/>}></Route>
          <Route path="/nutrition" element = {<NutritionPage/>}></Route>
          <Route path="/contact" element = {<ContactUs/>}></Route>
          <Route path="/footer" element = {<Footer/>}></Route>

          {/* <Route path="/journal" element = {<WorkoutJournal/>}></Route> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;

