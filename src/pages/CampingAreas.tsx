import { useEffect, useState } from "react";
import { CampingArea, CampingAreaProps } from "../types/types";
import { BASE_URL } from "../api";
import { useNavigate } from "react-router-dom";

const CampingAreas = ({ username }: CampingAreaProps) => {
  const [campingAreas, setCampingAreas] = useState<CampingArea[]>([]);

  const navigate = useNavigate();

  const fetchCampingData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/camping-areas`);
      const fetchedData = await response.json();
      setCampingAreas(fetchedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCampingData();
  }, []);

  const handleBookCamp = (campingAreaId: number) => {
    if (username) {
      const selectedCampingArea = campingAreas.find(area => area.id === campingAreaId);
      navigate("/booking", { state: { campingArea: selectedCampingArea, username: username} });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="camping-container">
      <h2 className="camping-container__header">Camping Areas</h2>
      {campingAreas.map((campingArea) => (
        <div key={campingArea.id} className="camping-container__area">
          <img
            src={campingArea.imageUrl}
            alt={campingArea.name}
            className="camping-container__area__image"
          />
          <p className="camping-container__area__name">{campingArea.name}</p>
          {campingArea.availability ? (
            <button type="submit"
              onClick={() => handleBookCamp(campingArea.id)}
              className="camping-container__area__book-button"
            >
              Book Camp
            </button>
          ) : (
            <p className="camping-container__area__not-available">
              Not Available
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CampingAreas;
