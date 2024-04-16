const mongoose = require("mongoose");
const { Schema } = mongoose;
const RequestSchema = new Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Request = mongoose.model("requests", RequestSchema);
module.exports = Request;
