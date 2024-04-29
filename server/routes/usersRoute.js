const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

//register new user

router.post("/register", async (req, res) => {
	try {
		//check if user already exists

		const userExists = await User.findOne({ email: req.body.email });
		if (userExists) {
			return res.send({
				success: false,
				message: "User already exists",
			});
		}

		//hashed password

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);
		req.body.password = hashedPassword;

		//save user
		const user = new User(req.body);
		await user.save();

		return res.send({
			success: true,
			message: "User registered successfully",
		});
	} catch (error) {
		return res.send({
			success: false,
			message: error.message,
		});
	}
});

//login user

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });

		if (!user) {
			return res.send({
				success: false,
				message: "Invalid credentials",
			});
		}

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!validPassword) {
			return res.send({
				success: false,
				message: "Invalid credentials",
			});
		}
		//generate jwt
		const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET, {
			expiresIn: "1h",
		});

		return res.send({
			success: true,
			message: "User logged in successfully",
			data: token,
		});
	} catch (error) {
		return res.send({
			success: false,
			message: error.message,
		});
	}
});

module.exports = router;
