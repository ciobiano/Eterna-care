import { db } from "@/lib/db";
import { AppointmentStatus } from "@prisma/client";

export const createAppointment = async ({
	donorId,
	laboratoryId,
	scheduledAt,
}: {
	donorId: string;
	laboratoryId: string;
	scheduledAt: Date;
}) => {
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
			status: AppointmentStatus.PENDING,
		},
	});

	return {
		success: "✅ Appointment has been scheduled",
	};
};
