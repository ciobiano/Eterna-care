"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { AppointmentStatus } from "@prisma/client";

export const createAppointment = async ({
	laboratoryId,
	scheduledAt,
}: {
	laboratoryId: string;
	scheduledAt: Date;
}) => {
	const user = await currentUser();
	if (!user || !user.id) {
		return {
			error: "❌ Access denied",
		};
	}

	const donorId = user.id;

	const existingAppointment = await db.appointment.findFirst({
		where: {
			donorId,
			laboratoryId,
			scheduledAt,
		},
	});

	if (existingAppointment) {
		return {
			error: "❌ Appointment already exists",
		};
	}

	await db.appointment.create({
		data: {
			donorId,
			laboratoryId,
			scheduledAt,
			status: AppointmentStatus.CONFIRMED,
		},
	});

	return {
		success: "✅ Appointment has been scheduled",
	};
};
