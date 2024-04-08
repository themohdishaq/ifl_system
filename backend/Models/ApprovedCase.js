const moongose = require("mongoose");
const { Schema } = moongose;
const ApprovedCaseSchema = new Schema({
  admin: {
    type: moongose.Schema.Types.ObjectId,
    required: true,
  },
  request: {
    type: moongose.Schema.Types.ObjectId,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  payment_timeline: {
    type: String,
    required: true,
  },
  postedDate: {
    type: Date,
    required: true,
  },
  total_payments: {
    type: Number,
    required: true,
  },
  payments_completed: {
    type: Number,
    required: true,
  },
});

const ApprovedCase = moongose.model("approved_case", ApprovedCaseSchema);
module.exports = ApprovedCase;
