import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Messaging from "./components/Messaging";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<DashBoard />} /> */}
          <Route path="/messaging" element={<Messaging />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
