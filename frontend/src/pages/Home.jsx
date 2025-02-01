import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";
import Heading from '../components/Heading';
 

const  Home=() =>{
  // const rooms = await getAllRooms();

  return (
    <div
    className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
  >
      <Heading title='Available Rooms' />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} key={room.id} />)
      ) : (
        <p>No rooms available at the moment</p>
      )}
    </div>
  );
}

export default Home;
