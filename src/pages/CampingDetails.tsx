import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CampingArea, CampingDetailsProps } from "../types/types";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const CampingDetails = ({username}: CampingDetailsProps) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const campingAreaId = Number(id);

  const [campingArea, setCampingArea] = useState<CampingArea | null>(null);

  const fetchCampingArea = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/camping-areas/${campingAreaId}`
      );
      const campingAreaData = await response.json();
      setCampingArea(campingAreaData);
    } catch (error) {
      console.error("Error fetching camping area:", error);
    }
  };

  useEffect(() => {
    fetchCampingArea();
  }, [campingAreaId]);

  const handleBookCamp = async () => {
    navigate("/booking", { state: { campingArea: campingArea, username: username} });
  };

  return (
    <div>
      {campingArea && (
        <div>
          <h2>{campingArea.name}</h2>
          <div className="map-container">
            <LoadScript googleMapsApiKey="AIzaSyAKnomPTGq0cwr8YzkfSfvahHF_6GN7vGk.">
              <GoogleMap
                center={{
                  lat: campingArea.coordinates.lat,
                  lng: campingArea.coordinates.lng,
                }}
                zoom={15}
                mapContainerStyle={{ height: "400px", width: "100%" }}
              >
                <Marker
                  key={campingArea.id} 
                  position={{
                    lat: campingArea.coordinates.lat,
                    lng: campingArea.coordinates.lng,
                  }}
                  title="Camping Area"
                />
              </GoogleMap>
            </LoadScript>
          </div>
          <button type="button" onClick={handleBookCamp}>
            Book Camp
          </button>
        </div>
      )}
    </div>
  );
};

export default CampingDetails;