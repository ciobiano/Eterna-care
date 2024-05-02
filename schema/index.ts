import { z } from "zod";

export const RegisterSchema = z.object({
	userType: z.enum(["donor", "hospital", "organization", "admin"]),
	name: z
		.string()
		.min(2, {
			message: "Please this must be your full name",
		})
		.max(255)
		.optional(),
	email: z.string().email({
		message: "Invalid email address",
	}),

	hospitalName: z.string().optional(),
	organizationName: z.string().optional(),
	phone: z.string().trim(),
	password: z.string().min(6, {
		message: "Password must be at least 6 characters",
	}),

	address: z.string().min(5, {
		message: "full address required",
	}),
});
