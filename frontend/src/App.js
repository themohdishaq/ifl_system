import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DashBoard"
import UserDashboard from "./pages/UserDashboard"
import Messaging from "./pages/Messaging"
import StudentData from "./pages/StudentData"
import Profile from "./pages/Profile"


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
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
