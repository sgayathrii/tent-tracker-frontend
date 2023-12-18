import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/Login";
import CampingAreas from "./pages/CampingAreas";
import Home from "./pages/Home";
import BookingCamp from "./pages/BookingCamp";
import BookingConfirmation from "./pages/BookingConfirmation";
import CampingDetails from "./pages/CampingDetails";
import { UserProvider } from "./contexts/UserContext";

function App() {

  return (
    <UserProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/camping-areas" element={<CampingAreas />} />
          <Route path="/booking" element={<BookingCamp />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
          <Route path="/camping-details/:id" element={<CampingDetails />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
