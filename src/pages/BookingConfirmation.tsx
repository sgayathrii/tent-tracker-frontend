import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();

  const bookingDetails = location.state.bookingDetails;

  return (
    <div className="confirmation-page">
      <h2>Booking Confirmation</h2>
      <p>Name: {bookingDetails.name}</p>
      <p>Email: {bookingDetails.email}</p>
      <p>Phone: {bookingDetails.phone}</p>
      <p>From Date: {bookingDetails.fromDate}</p>
      <p>To Date: {bookingDetails.toDate}</p>
      <p>Number of People: {bookingDetails.numberOfPeople}</p>
    </div>
  );
};

export default BookingConfirmation;
