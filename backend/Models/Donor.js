const mongoose = require("mongoose");
const { Schema } = mongoose;
const DonorSchema = new Schema({
<<<<<<< HEAD
  full_name: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
=======
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone_no: {
        type: String,
        required: true
    },
    cnic: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    }
>>>>>>> c2df28df87442802e44653973307a11c02cae2b6
});

const Donor = mongoose.model("donors", DonorSchema);
module.exports = Donor;
