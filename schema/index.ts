import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email("Please enter a valid email address"),
	password: z.string().min(6, "Password should be at least 6 characters"),
});

export const donorSchema = z.object({
	name: z.string().min(3, "Name should be at least 3 characters").max(50),
	address: z.string().min(3, "Address should be at least 3 characters"),
	phone: z.string().min(10, "Phone number should be at least 10 characters"),
	bloodGroup: z.string().min(2).max(10),
	email: z.string().email("Please enter a valid email address"),
	password: z
		.string()
		.min(6, "Password should be at least 6 characters")
		.max(50),
});

export const laboratorySchema = z.object({
	name: z.string().min(3, "Name should be at least 3 characters"),
	address: z.string().min(3, "Address should be at least 3 characters"),
	city: z.string().min(3, "City should be at least 3 characters"),
	state: z.string().min(3, "State should be at least 3 characters"),
	phone: z.string().min(10, "Phone number should be at least 10 characters"),
	licenseNumber: z
		.string()
		.min(10, "License number should be at least 10 characters"),
	email: z.string().email("Please enter a valid email address"),
	password: z.string().min(6, "Password should be at least 6 characters"),
});

export const BLOOD_GROUP_OPTIONS = [
	"A+",
	"A-",
	"B+",
	"B-",
	"AB+",
	"AB-",
	"O+",
	"O-",
];
export const STATUS = [];

export const inventorySchema = z.object({
	inventoryType: z.enum(["IN", "OUT"], {
		required_error: "Inventory type is required",
	}),
	bloodGroup: z.string().refine((val) => BLOOD_GROUP_OPTIONS.includes(val), {
		message: "Invalid blood group",
	}),
	quantity: z.number().int().positive().min(1, {
		message: "Quantity should be at least 1.",
	}),
	email: z.string().email({
		message: "Invalid email address",
	}),
});

export const ProfileSchema = z.object({
	name: z.string().min(3, "First name is required"),
	email: z.string().email("Email is required"),
	phone: z.string().min(9, "Phone number is required"),
	address: z.string().min(5, "Address is required"),
	bloodGroup: z.string().refine((val) => BLOOD_GROUP_OPTIONS.includes(val), {
		message: "Invalid blood group",
	}),
	dateOfBirth: z.date().refine((date) => date instanceof Date, {
		message: "Date of birth is required",
	}),
	nextOfKin: z.string().min(3, "Next of kin is required").optional(),
	nextOfKinPhone: z.string().min(9, "Next of kin phone is required").optional(),

	description: z.string().min(5, "Description is required").max(120,
		"Description should be at most 120 characters"
	).optional(),
});




export type MonthlyAppointmentData = {
	month: string;
	SCREENED: number;
	CONFIRMED: number;
	CANCELLED: number;
	PENDING: number;
};
