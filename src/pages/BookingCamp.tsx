import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingCamp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const campingAreaId = location.state?.campingAreaId;

  const [bookingDetails, setBookingDetails] = useState({
    name: "",
    email: "",
    phone: "",
    fromDate: "",
    toDate: "",
    numberOfPeople: 1,
  });

  const handleBooking = () => {
    console.log("Booking details:", {
      campingAreaId,
      ...bookingDetails,
    });

    navigate("/confirmation");
  };

  return (
    <div>
      <h2>Booking Camp</h2>
      <p>Camping Area ID: {campingAreaId}</p>

      <form>
        <label>
          Name:
          <input
            type="text"
            value={bookingDetails.name}
            onChange={(e) =>
              setBookingDetails({ ...bookingDetails, name: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={bookingDetails.email}
            onChange={(e) =>
              setBookingDetails({ ...bookingDetails, email: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            value={bookingDetails.phone}
            onChange={(e) =>
              setBookingDetails({ ...bookingDetails, phone: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          From Date:
          <input
            type="date"
            value={bookingDetails.fromDate}
            onChange={(e) =>
              setBookingDetails({
                ...bookingDetails,
                fromDate: e.target.value,
              })
            }
          />
        </label>
        <br />
        <label>
          To Date:
          <input
            type="date"
            value={bookingDetails.toDate}
            onChange={(e) =>
              setBookingDetails({ ...bookingDetails, toDate: e.target.value })
            }
          />
        </label>
        <br />
        <label>
          Number of People:
          <input
            type="number"
            value={bookingDetails.numberOfPeople}
            onChange={(e) =>
              setBookingDetails({
                ...bookingDetails,
                numberOfPeople: Number(e.target.value),
              })
            }
          />
        </label>
        <br />
        <button type="button" onClick={handleBooking}>
          Book Camp
        </button>
      </form>
    </div>
  );
};

export default BookingCamp;
