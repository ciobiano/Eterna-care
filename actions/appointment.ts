

import { db } from "@/lib/db";
import { AppointmentStatus } from "@prisma/client";

export const createAppointment = async ({
	donorId,
    hospitalId,
    scheduledAt,
}: {
    donorId: string;
    hospitalId: string;
    scheduledAt: Date;
}) => {

    const existingAppointment = await db.appointment.findFirst({
        where: {
            donorId,
            hospitalId,
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
			hospitalId,
			scheduledAt,
			status: AppointmentStatus.PENDING,
		},
	});

    return{
        success: "✅ Appointment has been scheduled",
    }
};