const User = require('../models/user'); 
const checkDonorAuth = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // Fetch the user from the database
    const user = await User.findById(userId);

    // Check if the user exists and their role is 'donor'
    if (user && user.role === 'donor') {
      
      next();
    } else {
      
      res.status(403).json({ message: 'Access denied. Please login as a donor.' });
    }
  } catch (error) {
    
    console.error('Error fetching user from database:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = checkDonorAuth;
