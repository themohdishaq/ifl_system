import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DashBoard"
import UserDashboard from "./pages/UserDashboard"
import Messaging from "./pages/Messaging"
import StudentData from "./pages/StudentData"
import Profile from "./pages/Profile"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp";
import userAuthStore from "./store/userAuthStore/userAuthStore";
import { AdminRoute, DonorRoute, StudentRoute } from "./routes/RouteCegories";
import StudentProfile from "./pages/Student/StudentProfile";
import StudentApplication from "./pages/Student/StudentApplication";
import StudentCurrentCases from "./pages/Student/StudentCurrentCases";
import DonorDashboard from "./pages/Donor/DonorDashboard";
import DonorProfile from "./pages/Donor/DonorProfile";
import AdminDashboard from "./pages/Admin/AdminDashboard";


function App() {
  const user = userAuthStore((state) => state.user);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          {/* Authentication Routes */}
          {/* <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn/>} /> */}

          {/* Public Available Routes */}
          {/* <Route path="/" element={<LandingPage/>}/> */}

          {/* Admin Routes ---------------------------------------------------------------- */}
          <Route
            path="/admin/admin_dashboard"
            element={
              <AdminRoute user={user}>
                {/* <AdminDashboard/> */}
              </AdminRoute>
            }
          />

          {/* Student Routes --------------------------------------------------------------- */}
          <Route
            path="/student/student_dashboard"
            element={
              <StudentRoute user={user}>
                {/* <StudentDashboard/> */}
              </StudentRoute>
            }
          />

            {/* Donor Routes --------------------------------------------------------------- */}
            <Route
            path="/donor/donor_dashboard"
            element={
              <DonorRoute user={user}>
                {/* <DonorDashboard/> */}
              </DonorRoute>
            }
          />

          {/* For temporary purpose */}
          <Route path="/" element={<Dashboard/>} />
          <Route path="/student_profile" element={<StudentProfile/>} />
          <Route path="/student_application" element={<StudentApplication/>} />
          <Route path="/student_current_cases" element={<StudentCurrentCases/>} />
          <Route path="/donor_profile" element={<DonorProfile/>} />
          <Route path="/donor_dashboard" element={<DonorDashboard/>} />
          <Route path="/admin_dashboard" element={<AdminDashboard/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn/>} />
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
