const moongose = require("mongoose");
const { Schema } = moongose;
const RequestSchema = new Schema({
  user: {
    type: moongose.Schema.Types.ObjectId,
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

const Request = moongose.model("requests", RequestSchema);
module.exports = Request;
