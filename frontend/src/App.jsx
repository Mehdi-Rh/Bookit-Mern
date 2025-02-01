import { Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header />
      <Home />
      <Footer />
    </Box>
  );
}

export default App;
