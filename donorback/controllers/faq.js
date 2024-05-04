const { FAQ } = require('../models/YourModelsFile');

const getFAQs = async (req, res) => {
    try {
        // Fetch all FAQs from the database
        const faqs = await FAQ.find();
        res.status(200).json({ faqs });
    } catch (error) {
        console.error('Error fetching FAQs:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = getFAQs;
