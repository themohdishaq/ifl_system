const mongoose = require('mongoose');
const { Schema } = mongoose;
const CaseHistorySchema = new Schema({
    donor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    approved_case: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const CaseHistory = mongoose.model('accepted_case_history', CaseHistorySchema);
module.exports = CaseHistory;