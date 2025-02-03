import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomDetails from "./pages/RoomDetails";

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
              <Route path="/" element={<Home />} />

              <Route path="/rooms/:id" element={<RoomDetails />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
