
  // Import your controllers
  import {
    donor,
    DonorDetails,
    notifications,
    paidstudent,
  } from "../controllers";
  
  const router = express.Router();
  
  // Apply the checkDonorAuth middleware to routes that require donor authentication
  router.get("/donorbio", checkDonorAuth, donor);
  router.get("/donorinfo", checkDonorAuth, DonorDetails);
  router.get("/getnotify", checkDonorAuth, notifications);
  router.get("/paidstudentlist", checkDonorAuth, paidstudent);
  
  export default router;
  