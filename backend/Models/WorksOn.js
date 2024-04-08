const mongoose = require("mongoose");
const { Schema } = mongoose;
const WorksOnSchema = new Schema({
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    approved_case: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    committed_payments: {
        type: String,
        required: true
    },
    completed_payments: {
        type: String,
        required: true
    }
});

const WorksOn = mongoose.model("workson", WorksOnSchema);
module.exports = WorksOn;