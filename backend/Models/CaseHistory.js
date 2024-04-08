const moongose = require('mongoose');
const { Schema } = moongose;
const CaseHistorySchema = new Schema({
    donor: {
        type: moongose.Schema.Types.ObjectId,
        required: true
    },
    approved_case: {
        type: moongose.Schema.Types.ObjectId,
        required: true
    }
});

const CaseHistory = moongose.model('accepted_case_history', CaseHistorySchema);
module.exports = CaseHistory;