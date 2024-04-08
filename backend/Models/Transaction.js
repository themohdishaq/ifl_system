const moongose = require("mongoose");
const { Schema } = moongose;
const TransactionSchema = new Schema({
  donor: {
    type: moongose.Schema.Types.ObjectId,
    required: true,
  },
  approved_case: {
    type: moongose.Schema.Types.ObjectId,
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

const Transaction = moongose.model("transactions", TransactionSchema);
module.exports = Transaction;
