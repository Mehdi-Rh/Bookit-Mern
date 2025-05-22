import RoomCard from '../../components/RoomCard';
import Heading from '../../components/Heading';
import { useEffect, useState } from 'react';
import { useAuthContext } from '@/hooks/auth/useAuthContext';

const MyRooms = () => {
  const [rooms, setRooms] = useState([]);

  const { user } = useAuthContext();

  useEffect(() => {
    const getMyRooms = async () => {
      const response = await fetch(`http://localhost:5000/api/rooms/my-rooms?userId=${user._id}`);
      const data = await response.json();

      console.log({ data });
      setRooms(data.rooms);
    };

    getMyRooms();
  }, []);

  return (
    <>
      <Heading title="Available Rooms" />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} key={room._id} sourcePage="my-rooms" />)
      ) : (
        <p>No rooms available at the moment</p>
      )}
    </>
  );
};

export default MyRooms;
