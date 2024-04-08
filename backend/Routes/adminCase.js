const express = require("express");
const router = express.Router();
const { validationResult, body } = require("express-validator");
const fetchStudent = require("../Middleware/fetchStudent");
const Request = require("../Models/Request");
const Admin = require("../Models/Admin");
const ApprovedCase = require("../Models/ApprovedCase");

//route to approve case by admin
router.post(
  "/case_approve_by_admin/:id",
  fetchStudent,
  [
    body("startDate", "Enterrhe start date of the case"),
    body("endDate", "Enter the end date of the case"),
    body("payment_timeline", "Enter the payment timeline"),
    body("total_payments", "Enter the total payments"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const response = errors.array();
      console.log(response[0].msg);
      return res.status(400).json(response[0].msg);
    }
    const req_admin = await Admin.findById(req.user.id);
    const { startDate, endDate, payment_timeline, total_payments } = req.body;
    try {
      let approved_case = await ApprovedCase.create({
        admin: req.user.id,
        request: req.params.id,
        startDate: startDate,
        endDate: endDate,
        payment_timeline: payment_timeline,
        total_payments: total_payments,
        payments_completed: 0,
      });
      if (!approved_case) {
        return res.json("Error sending request");
      }
      await Request.findByIdAndUpdate(req.params.id, {
        status: "approved",
      });

      //sending notification to student and admin
      let request_by_student = await Request.findById(req.params.id);
      await Notifications.create({
        user: req.user.id,
        type: "admin",
        message:
          "Case has been approved successfully with description " +
          request_by_student.description,
      });
      await Notifications.create({
        user: request_by_student.student,
        type: "student",
        message:
          "Your Case has been approved successfully with description " +
          request_by_student.description,
      });
      res.json("Case  been approved successfully");
    } catch (error) {
      res.json("Error sending request");
    }
  }
);

module.exports = router;
