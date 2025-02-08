// import getMyBookings from "../actions/getMyBookings";
// import Heading from "../../components/Heading";
import BookedRoomCard from "./BookedRoomCard";
import Heading from "../../components/Heading";

const BookingsPage = () => {
  const getMyBookings = () => {
    console.log("getMyBookings");
    return [];
  };

  const bookings = getMyBookings();

  return (
    <>
      <Heading title="My Bookings" />
      {bookings.length === 0 ? (
        <p className="text-gray-600 mt-4">You have no bookings</p>
      ) : (
        bookings.map((booking) => (
          <BookedRoomCard key={booking.$id} booking={booking} />
        ))
      )}
    </>
  );
};

export default BookingsPage;
