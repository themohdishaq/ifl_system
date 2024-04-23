const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../Models/Student');
const Donor = require('../Models/Donor');
const Admin = require('../Models/Admin');

const JWT_SECRET = 'secret';

router.post("/create-student", [
    check('full_name', 'Please enter a valid name').not().isEmpty(),
    check('father_name', 'Please enter a valid name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({ min: 6 }),
    check('phone_no', 'Please enter a valid phone number').isLength({ min: 11 }),
    check('cnic', 'Please enter a valid CNIC').isLength({ min: 13 }),
    check('institution', 'Please enter a valid institution').not().isEmpty(),
    check('class_level', 'Please enter a valid class').not().isEmpty()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    let { full_name, father_name, email, password, phone_no, cnic, institution, class_level } = req.body;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let student = await Student.findOne({ email });
        if (student) {
            return res.status(400).json({ error: "Student with this email already exists" });
        }
        student = await Student.findOne({ phone_no });
        if (student) {
            return res.status(400).json({ error: "Student with this phone number already exists" });
        }
        student = await Student.findOne({ cnic });
        if (student) {
            return res.status(400).json({ error: "Student with this CNIC already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        hashPassword = await bcrypt.hash(password, salt);
        student = await Student.create({
            full_name,
            father_name,
            email,
            password: hashPassword,
            phone_no,
            cnic,
            institution, 
            class_level,
        });
        const data = {
            user: {
                id: student.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ authToken });
    } catch (error) {
        console.error(error);
        res.status(500).send("Some error occured");
    }
});

router.post("/login-student", [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({ min: 6 }),
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let student = await Student.findOne({ email });
        if (!student) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const data = {
            user: {
                id: student.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ authToken });
    } catch (error) {
        console.error(error);
        res.status(500).send("Some error occured");
    }
});
 
router.post("/create-donor", [
    check('full_name', 'Please enter a name').not().isEmpty(),
    check('father_name', 'Please enter a name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({ min: 6 }),
    check('phone_no', 'Please enter a valid phone number').isLength({ min: 11 }),
    check('cnic', 'Please enter a valid CNIC').isLength({ min: 13 }),
    check('profession','Please enter a profession').not().isEmpty()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    let { full_name, father_name, email, password, phone_no, cnic, profession } = req.body;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let donor = await Donor.findOne({ email });
        if (donor) {
            return res.status(400).json({ error: "Donor with this email already exists" });
        }
        donor = await Donor.findOne({ phone_no });
        if (donor) {
            return res.status(400).json({ error: "Donor with this phone number already exists" });
        }
        donor = await Donor.findOne({ cnic });
        if (donor) {
            return res.status(400).json({ error: "Donor with this CNIC already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        hashPassword = await bcrypt.hash(password, salt);
        donor = await Donor.create({
            full_name,
            father_name,
            email,
            password: hashPassword,
            phone_no,
            cnic,
            profession
        });
        const data = {
            user: {
                id: donor.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ authToken });
    } catch (error) {
        console.error(error);
        res.status(500).send("Some error occured");
    }
});

router.post("/login-donor", [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({ min: 6 }),
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let donor = await Donor.findOne({ email });
        if (!donor) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, donor.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const data = {
            user: {
                id: donor.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ authToken });
    } catch (error) {
        console.error(error);
        res.status(500).send("Some error occured");
    }
});

router.post("/create-admin", [
    check('full_name', 'Please enter a name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({ min: 6 }),
    check('admin_role', 'Please enter an admin role').not().isEmpty()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    let { full_name, email, password, admin_role } = req.body;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let admin = await Admin.findOne({ email });
        if (admin) {
            return res.status(400).json({ error: "Admin with this email already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        hashPassword = await bcrypt.hash(password, salt);
        admin = await Admin.create({
            full_name,
            email,
            password: hashPassword,
            admin_role
        });
        const data = {
            user: {
                id: admin.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ authToken });
    } catch (error) {
        console.error(error);
        res.status(500).send("Some error occured");
    }
});

router.post("/login-admin", [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({ min: 6 }),
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const data = {
            user: {
                id: admin.id
            }
        };
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({ authToken });
    } catch (error) {
        console.error(error);
        res.status(500).send("Some error occured");
    }
});

module.exports = router;