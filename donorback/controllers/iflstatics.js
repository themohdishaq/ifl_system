const { IFLstatistics } = require('../models/user.js');

const iflsystem = async (req, res) => {
    try {
        // Fetch all IFLstatisticss from the database
        const IFLstatisticss = await IFLstatistics.find();
        res.status(200).json({ IFLstatisticss });
    } catch (error) {
        console.error('Error fetching IFLstatisticss:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = iflsystem;
