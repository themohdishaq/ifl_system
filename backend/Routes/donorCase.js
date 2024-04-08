const express = require("express");
const router = express.Router();
const { validationResult, body } = require("express-validator");
const fetchDonor = require("../Middleware/fetchDonor");
const Request = require("../Models/Request");
const Admin = require("../Models/Admin");
const Donor = require("../Models/Donor");
const ApprovedCase = require("../Models/ApprovedCase");

//show all verified cases to donor which are approved by admin whose date has been started but not ended

// !!!!!!  rememeber here i did not remove the feature where if case is under  a specified dnor still that case is visibkle
//!!!! will remove that thing soon

router.get(
  "/get_all_approved_cases_by_donor",
  fetchDonor,

  async (req, res) => {
    const currentDate = new Date();
    try {
      const approved_cases = await ApprovedCase.find({
        endDate: { $gt: currentDate },
      }).populate("request");
      if (!approved_cases) {
        return res.json("No approved cases found");
      }
      res.json(approved_cases);
    } catch (error) {
      res.json("Error fetching approved cases");
    }
  }
);

//route to sponser case by donor

router.post(
  "/sponser_case_by_donor/:id",
  fetchDonor,
  [body("commited_payments", "Enter the commited payments")],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const response = errors.array();
      console.log(response[0].msg);
      return res.status(400).json(response[0].msg);
    }
    try {
      const { commited_payments } = req.body;
      const req_case = await ApprovedCase.findById(req.params.id)
        .populate("request")
        .populate("student");
      let checkAlreadyCases = await WorksOn.findOne({
        approved_case: req.params.id,
      });
      if (checkAlreadyCases) {
        return res.json("This case has already been sponsored by someone");
      }
      if (
        req_case.payments_completed + commited_payments >
        req_case.total_payments
      ) {
        return res.json("You are trying to pay more than the total payments");
      }
      let sponsered_case = await WorksOn.create({
        donor: req.user.id,
        approved_case: req.params.id,
        commited_payments: commited_payments,
        completed_payments: 0,
      });
      let donor = await Donor.findById(req.user.id);
      await Notifications.create({
        user: req.user.id,
        type: "donor",
        message: "You Case has been sponsered successfully ",
      });
      await Notifications.create({
        user: req_case.request.student,
        type: "student",
        message: "Case has been sponsered successfully by " + donor.name,
      });
      await Notifications.create({
        user: req_case.admin,
        type: "admin",
        message: "Case has been sponsered successfully by " + donor.name,
      });
      return res.json("Case has been sponsered successfully");
    } catch {
      return res.json("Error sponsering case");
    }
  }
);
module.exports = router;
