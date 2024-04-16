const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    father_name: {
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
    institution: {
        type: String,
        required: true
    },
    class_level: {
        type: String,
        required: true
    }
});

const User = mongoose.model("users", UserSchema);
module.exports = User;