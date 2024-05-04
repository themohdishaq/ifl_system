const { StudentDetails } = require('../models/user.js');

const studentdetail = async (req, res) => {
    try {
        // Fetch all StudentDetailss from the database
        const StudentDetails = await StudentDetails.find();
        res.status(200).json({ StudentDetails });
    } catch (error) {
        console.error('Error fetching StudentDetailss:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = studentdetail;
