const express = require("express");
const router = express.Router();
const { validationResult, body } = require("express-validator");
const fetchStudent = require("../Middleware/fetchStudent");
const multer = require("multer");
const Request = require("../Models/Request");
const Student = require("../Models/Student");
const Notifications = require("../Models/Notifications");

//multer to upload images
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "backend/public/images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});
const upload = multer({ storage: storage });

//route for student to apply for request
router.post(
  "/request_by_student",
  fetchStudent,
  [body("description", "Enter description of your case")],
  upload.single("image"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const response = errors.array();
      console.log(response[0].msg);
      return res.status(400).json(response[0].msg);
    }
    try {
      const imageName = req.file.filename;
      const { description } = req.body;
      let request_by_student = await Request.create({
        student: req.user.id,
        status: "pending",
        photo: imageName,
        description: description,
      });
      if (!request_by_student) {
        return res.json("Error sending request");
      }
      await Notifications.create({
        user: req.user.id,
        type: "student",
        message: "Case Request has been sent successfully",
      });
      res.json("Case Request has been sent successfully");
    } catch (error) {
      res.json("Error sending request");
    }
  }
);

module.exports = router;
