const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const JWT_SECRET = 'secret';

router.post("/create-user", [
    check('full_name', 'Please enter a valid name').not().isEmpty(),
    check('father_name', 'Please enter a valid name').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a valid password').isLength({ min: 6 }),
    check('phone_no', 'Please enter a valid phone number').isLength({ min: 11 }),
    check('cnic', 'Please enter a valid CNIC').isLength({ min: 13 }),
    check('institution', 'Please enter a valid institution').not().isEmpty(),
    check('class', 'Please enter a valid class').not().isEmpty()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    let { full_name, father_name, email, password, phone_no, cnic, institution, class } = req.body;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "User with this email already exists" });
        }
        user = await User.findOne({ phone_no });
        if (user) {
            return res.status(400).json({ error: "User with this phone number already exists" });
        }
        user = await User.findOne({ cnic });
        if (user) {
            return res.status(400).json({ error: "User with this CNIC already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        hashPassword = await bcrypt.hash(password, salt);
        user = await User.create({
            full_name,
            father_name,
            email,
            password: hashPassword,
            phone_no,
            cnic,
            institution, 
            class,
        });
        const data = {
            user: {
                id: user.id
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

router.post("/login", [
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
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const data = {
            user: {
                id: user.id
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