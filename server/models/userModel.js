const mongoose = require("mongoose");
const { type } = require("os");

const userSchema = new mongoose.Schema({
	userType: {
		type: String,
		required: true,
		enum: ["donor", "organization", "hospital", "admin"],
	},

	//only required if user is admin or donor
	name: {
		type: String,
		required: function () {
			if (this.userType == "admin" || this.userType == "donor") {
				return true;
			}
			return false;
		},
	},

	//only require if userType is Hospital
	HospitalName: {
		type: String,
		required: function () {
			if (this.userType == "hospital") {
				return true;
			}
			return false;
		},
	},
	//only required if userType is Organization
	OrganizationName: {
		type: String,
		required: function () {
			if (this.userType == "organization") {
				return true;
			}
			return false;
		},
	},

	website: {
		type: String,
		required: function () {
			if (this.userType == "organization" || this.userType == "hospital") {
				return true;
			}
			return false;
		},
	},

	address: {
		type: String,
		required: function () {
			if (this.userType == "organization" || this.userType == "hospital") {
				return true;
			}
			return false;
		},
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
},
{
	timestamps: true,
}

);

module.exports = mongoose.model("users", userSchema);
