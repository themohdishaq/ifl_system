const moongose = require("mongoose");
const { Schema } = moongose;
const NotificationSchema = new Schema({
  user: {
    //may be admin or student or donor
    type: moongose.Schema.Types.ObjectId,
    required: true,
  },
  type: {
    type: String, // here type will tell  notification to admin user ot student to tell which is the person
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Notifications = moongose.model("notifications", NotificationSchema);
module.exports = Notifications;
