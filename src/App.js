import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Messaging from "./components/Messaging";
import StudentData from "./components/StudentData";
import Profile from "./components/Profile";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/user_dashboard" element={<UserDashboard />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/student_data" element={<StudentData />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
