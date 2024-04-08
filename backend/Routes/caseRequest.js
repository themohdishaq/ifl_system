const express = require("express");
const router = express.Router();
const { validationResult, body } = require("express-validator");
const fetchuser = require("../Middleware/fetchUser");
const multer = require("multer");
const Request = require("../Models/Request");
const User = require("../Models/User");

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
  fetchuser,
  [body("description", "Enter descriptionm of your case")],
  upload.single("image"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const response = errors.array();
      console.log(response[0].msg);
      return res.status(400).json(response[0].msg);
    }
    const req_student = await User.findById(req.user.id);
    try {
      const imageName = req.file.filename;
      const { description } = req.body;
      await Request.create({
        student: req.user.id,
        status: "pending",
        photo: imageName,
        description: description,
      });
      res.json("Case Request has been sent successfully");
    } catch (error) {
      res.json("Error sending request");
    }
  }
);

module.exports = router;
