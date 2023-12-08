import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CampingArea, HomeProps } from "../types/types";

const Home = ({ username }: HomeProps) => {
  
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
    <div>
      {username && <h2>Welcome {username}!</h2>}

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