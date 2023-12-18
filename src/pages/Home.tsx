import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import HomeImage from "../assets/home.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CampingArea } from "../types/types";

const Home = () => {
  
  const fetchCampingAreas = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/camping-areas");
      const campingAreas = await response.json();
      setCampingAreas(campingAreas);
    } catch (error) {
      console.error("Error fetching camping areas:", error);
    }
  };

  const [campingAreas, setCampingAreas] = useState<CampingArea[]>([]);

  useEffect(() => {
    fetchCampingAreas();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home">
      <h1 className="home__heading">Tent Tracker</h1>
      <div>
        <img src={HomeImage} alt="camping-home image" className="slider-container__home-image" />
      </div>
      <Slider {...settings}>
        {campingAreas.map((campingArea) => (
          <div key={campingArea.id} className="slide-container">
            <Link to={`/camping-details/${campingArea.id}`}>
              <img src={campingArea.imageUrl} alt={campingArea.name} className="slide-container__camping-image"/>
              <p>{campingArea.name}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;