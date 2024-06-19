"use server";

import { db } from "@/lib/db";
import { donorSchema, laboratorySchema } from "@/schema";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/lib/user";

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

	const existingUser = await getUserByEmail(email);
	if (existingUser) {
		return { error: "Email already in use" };
	}

	// Create the User with the role USER
	const newUser = await db.user.create({
		data: {
			email,
			name,
			password: hashedPassword,
			role: "DONOR",
		},
	});

	// Create the Donor with the reference to the newly created User
	await db.donor.create({
		data: {
			name,
			email,
			address,
			phone,
			bloodGroup,
			id: newUser.id,
		},
	});

	//TODO: send verification token email

	return {
		success: " ✅ you've successfully registered",
	};
};

export const registerLaboratory = async (
	values: z.infer<typeof laboratorySchema>
) => {
	const validatedFields = laboratorySchema.safeParse(values);

	if (!validatedFields.success) {
		return {
			error: " ❌ please provide valid credentials",
		};
	}

	const { email, address, phone, name, licenseNumber, password, city, state } =
		validatedFields.data;
	const hashedPassword = await bcrypt.hash(password, 10);

	const existingUser = await getUserByEmail(email);
	if (existingUser) {
		return { error: "Email already in use" };
	}

	const newUser = await db.user.create({
		data: {
			email,
			name,
			password: hashedPassword,
			role: "LAB",
		},
	});

	await db.laboratory.create({
		data: {
			name,
			address,
			email,
			phone,
			licenseNumber,
			city,
			state,
			id: newUser.id,
		},
	});

	return {
		success: " ✅ you've successfully registered",
	};
};
