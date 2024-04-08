const express = require("express");
const router = express.Router();
const { validationResult, body } = require("express-validator");
const fetchuser = require("../Middleware/fetchcurrentUser");
const multer = require("multer");
const Request = require("../Models/Request");
const User = require("../Models/User");

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

router.post(
  "/addpost",
  fetchuser,
  [
    body("text", "Enter text of atleast 20 characters"),
    body("topic", "Enter text of atleast 8 characters"),
    body("type", "Enter text of atleast 2 characters"),
  ],
  upload.single("image"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const response = errors.array();
      console.log(response[0].msg);
      return res.status(400).json(response[0].msg);
    }
    const post_user = await User.findById(req.user.id);
    try {
      const imageName = req.file.filename;
      const { text, topic, type } = req.body;
      await Post.create({
        text: text,
        image: imageName,
        user_name: post_user.name,
        user: req.user.id,
        comments: 0,
        topic: topic,
        type: type,
      });
      res.json("Post uploaded succesfully");
    } catch (error) {
      res.json("Error uploading post");
    }
  }
);

module.exports = router;
