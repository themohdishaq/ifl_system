import { Donor, Transaction } from "./models/CombinedModels.js";

const getData = async (req, res) => {
  try {
    const donors = await Donor.find();
    const transactions = await Transaction.find();
    res.json({ donors, transactions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getData };
