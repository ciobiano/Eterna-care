"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export const getAppointments = async () => {
	const session = await auth();

	const userId = session?.user.id;

	if (!userId) {
		throw new Error("Access denied");
	}

	try {
		const appointments = await db.appointment.findMany({
			where: {
				donorId: userId,
			},
			include: {
				laboratory: true,
			},
		});

		return appointments;
	} catch (error) {
		throw new Error("Failed to fetch appointment data.");
	}
};

export const getAppointmentsByLab = async () => {
	const session = await auth();

	const userId = session?.user.id;

	if (!userId) {
		throw new Error("Access denied");
	}

	try {
		const appointments = await db.appointment.findMany({
			where: {
				laboratoryId: userId,
			},
			include: {
				donor: true,
			},
		});

	

		return appointments;

	} catch (error) {
		throw new Error("Failed to fetch appointment data.");
	}
};
