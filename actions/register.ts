"use server";

import { db } from "@/lib/db";
import { donorSchema, hospitalSchema } from "@/schema";
import { z } from "zod";
import bcrypt from "bcrypt";

export const registerDonor = async (values: z.infer<typeof donorSchema>) => {
	const validatedFields = donorSchema.safeParse(values);

	if (!validatedFields.success) {
		return {
			error: " ❌ please provide valid credentials",
		};
	}

	const { email, password, name, address, phone, bloodGroup } =
		validatedFields.data;
	const hashedPassword = await bcrypt.hash(password, 10);

	const existingUser = await db.user.findUnique({
		where: {
			email,
		},
	});
	if (existingUser) {
		return { error: "Email already in use" };
	}

	// Create the User with the role USER
	const newUser = await db.user.create({
		data: {
			email,
			password: hashedPassword,
			role: "USER",
		},
	});

	// Create the Donor with the reference to the newly created User
	await db.donor.create({
		data: {
			name,
			address,
			phone,
			bloodGroup,
			userId: newUser.id,
		},
	});

	//TODO: send verification token email

	return {
		success: " ✅ you've successfully registered",
	};
};

export const registerHospital = async (
	values: z.infer<typeof hospitalSchema>
) => {
	const validatedFields = hospitalSchema.safeParse(values);

	if (!validatedFields.success) {
		return {
			error: " ❌ please provide valid credentials",
		};
	}

	const { email, address, phone, name, licenseNumber, password, city, state } =
		validatedFields.data;
	const hashedPassword = await bcrypt.hash(password, 10);

	const existingUser = await db.user.findUnique({
		where: {
			email,
		},
	});
	if (existingUser) {
		return { error: "Email already in use" };
	}

	const newUser = await db.user.create({
		data: {
			email,
			password: hashedPassword,
			role: "HOSPITAL",
		},
	});

	await db.hospital.create({
		data: {
			name,
			address,
			phone,
			licenseNumber,
			city,
			state,
			userId: newUser.id,
		},
	});

	return {
		success: " ✅ you've successfully logged in",
	};
};
