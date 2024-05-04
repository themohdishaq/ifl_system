const { Transaction } = require('../models/user.js');

const paidstudent = async (req, res) => {
    try {
        // Fetch all transactions from the database
        const transactions = await Transaction.find();
        res.status(200).json({ transactions });
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = paidstudent;
