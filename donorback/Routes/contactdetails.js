
  // Import your controllers
  import {
    StudentDetails
  } from "../controllers/studentlist";
  
  const router = express.Router();
  
  // Apply the checkDonorAuth middleware to routes that require donor authentication
  router.get("/studentlist", donor);
 
  
  export default router;
  