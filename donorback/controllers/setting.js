const { Donor } = require('../models/YourModelsFile');

const setting = async (req, res) => {
    try {
        
        const userId = req.user.id;

        const { name, password, address, fatherName, occupation, contactNumber, CNICNO, imageUrl } = req.body;

        const updatedDonor = await Donor.findByIdAndUpdate(userId, {
            name,
            password,
            address,
            fatherName,
            occupation,
            contactNumber,
            CNICNO,
            imageUrl
        }, { new: true });

        if (updatedDonor) {
            res.status(200).json({ message: 'Donor information updated successfully', donor: updatedDonor });
        } else {
            res.status(404).json({ message: 'Donor not found' });
        }
    } catch (error) {
        console.error('Error updating donor:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = setting;
