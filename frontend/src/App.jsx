import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomDetails from "./pages/rooms/RoomDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Bookings from "./pages/Bookings";
import AddRooms from "./pages/rooms/AddRooms";
import Home from "./pages/rooms/Home";
import MyRooms from "./pages/rooms/MyRooms";

function App() {
  return (
    <Router>
      <div className=" h-full">
        <Header />
        <div className="flex justify-between flex-col ">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Routes>
              {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />

              <Route path="/" element={<Home />} />
              <Route path="/rooms/:id" element={<RoomDetails />} />
              <Route path="/rooms/add" element={<AddRooms />} />
              <Route path="/rooms/my" element={<MyRooms />} />
              <Route path="/bookings" element={<Bookings />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
