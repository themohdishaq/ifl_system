const mongoose = require("mongoose");
const { Schema } = mongoose;

const TransactionSchema = new Schema({
  donor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  approved_case: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  payment_no: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model("transactions", TransactionSchema);
module.exports = Transaction;
