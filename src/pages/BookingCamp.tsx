import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingCamp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const campingAreaId = location.state.campingArea.id;
  const campingAreaName = location.state.campingArea.name;
  const username = location.state.username;

  const [bookingDetails, setBookingDetails] = useState({
    name: username,
    email: "",
    phone: "",
    fromDate: "",
    toDate: "",
    numberOfPeople: 1,
  });

  const handleBooking = async () => {
    try {
      const { name, email, phone, fromDate, toDate, numberOfPeople } =
        bookingDetails;

      const fromDateFormatted = new Date(fromDate).toISOString();
      const toDateFormatted = new Date(toDate).toISOString();

      const response = await fetch(`http://localhost:8000/api/book-camp/book`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          campingAreaId: campingAreaId,
          name: name,
          email: email,
          phone: phone,
          fromDate: fromDateFormatted,
          toDate: toDateFormatted,
          numberOfPeople: numberOfPeople,
        }),
      });

      const result = await response.json();

      if (result.success) {
        navigate("/confirmation", { state: { bookingDetails, email } });
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error booking camping area:", error);
    }
  };

  return (
    <div className="booking-camp">
      <h2 className="booking-camp__header">Booking Camp</h2>
      <p className="booking-camp__name">Camping Area: {campingAreaName}</p>

      <form className="booking-camp__form">
        <div className="booking-camp__form-field">
          <label className="booking-camp__label">
            Name:
            <input
              type="text"
              className="booking-camp__input"
              value={bookingDetails.name}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, name: e.target.value })
              }
            />
          </label>
        </div>

        <div className="booking-camp__form-field">
          <label className="booking-camp__label">
            Email:
            <input
              type="email"
              className="booking-camp__input"
              value={bookingDetails.email}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, email: e.target.value })
              }
              required
            />
          </label>
        </div>

        <div className="booking-camp__form-field">
          <label className="booking-camp__label">
            Phone:
            <input
              type="tel"
              className="booking-camp__input"
              value={bookingDetails.phone}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, phone: e.target.value })
              }
            />
          </label>
        </div>

        <div className="booking-camp__form-field">
          <label className="booking-camp__label">
            From Date:
            <input
              type="date"
              className="booking-camp__input"
              value={bookingDetails.fromDate}
              onChange={(e) =>
                setBookingDetails({
                  ...bookingDetails,
                  fromDate: e.target.value,
                })
              }
              required
            />
          </label>
        </div>

        <div className="booking-camp__form-field">
          <label className="booking-camp__label">
            To Date:
            <input
              type="date"
              className="booking-camp__input"
              value={bookingDetails.toDate}
              onChange={(e) =>
                setBookingDetails({ ...bookingDetails, toDate: e.target.value })
              }
              required
            />
          </label>
        </div>

        <div className="booking-camp__form-field">
          <label className="booking-camp__label">
            Number of People:
            <input
              type="number"
              className="booking-camp__input"
              value={bookingDetails.numberOfPeople}
              onChange={(e) =>
                setBookingDetails({
                  ...bookingDetails,
                  numberOfPeople: Number(e.target.value),
                })
              }
              required
            />
          </label>
        </div>

        <button
          type="button"
          className="booking-camp__button"
          onClick={handleBooking}
        >
          Book Camp
        </button>
      </form>
    </div>
  );
};

export default BookingCamp;
