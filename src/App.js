import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Messaging from "./components/Messaging";
import StudentData from "./components/StudentData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/student_data" element={<StudentData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
