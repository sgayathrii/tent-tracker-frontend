  import { Route, Routes, useLocation } from "react-router-dom";
  import "./App.css";
  import Navbar from "./components/navbar/Navbar";
  import Login from "./pages/Login";
  import CampingAreas from "./pages/CampingAreas";
  import Home from "./pages/Home";

  function App() {
    const location = useLocation();
    const username = location.state?.name || "" ;

    return (
      <div className="App">
        <Navbar username={ username }/>
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/camping-areas" element={<CampingAreas />} />
        </Routes>
      </div>
    );
  }

  export default App;
