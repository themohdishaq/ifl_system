const { Donor } = require('../models/user.js');

const donor = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await Donor.findById(userId);
        if (user) {
            const donors = await Donor.find();
            res.status(200).json({ donors });
        } else {
            res.status(403).json({ message: 'Access denied. Please login as a donor.' });
        }
    } catch (error) {
        console.error('Error fetching donors:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = donor;
