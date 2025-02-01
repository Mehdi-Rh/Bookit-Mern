import { Box } from "@mui/material";
import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";

const Home = () => {
  return (
    <div
      style={{
        marginTop: "68px",
        width: "100% ",
        marginBottom: "3rem",
      }}
      className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
    >
      {rooms.length > 0
        ? rooms.map((room) => <RoomCard key={room.id} room={room} />)
        : "No rooms available at the moment"}
    </div>
  );
};

export default Home;
