import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";
import Heading from "../components/Heading";

const Home = () => {
  // const rooms = await getAllRooms();

  return (
    <>
      {" "}
      <Heading title="Available Rooms" />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} key={room.$id} />)
      ) : (
        <p>No rooms available at the moment</p>
      )}
    </>
  );
};

export default Home;
