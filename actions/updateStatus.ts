"use server";

import { db } from "@/lib/db";
import { AppointmentStatus } from "@prisma/client";
import { currentUser } from "@/lib/auth";

interface AppointmentUpdateParams {
	appointmentId: string;
	status: AppointmentStatus;
}

export async function updateAppointmentStatus({
	appointmentId,
	status,
}: AppointmentUpdateParams) {
	const user = await currentUser();

	if (!user) {
		throw new Error("User not authenticated");
	}

	// Fetch the appointment
	const appointment = await db.appointment.findUnique({
		where: { id: appointmentId },
		
	});

	if (!appointment) {
		throw new Error("Appointment not found");
	}

	// Check if the user is a donor or lab associated with the appointment
	const isAuthorized =
		(user.role === "DONOR" && appointment.donorId === user.id) ||
		(user.role === "LAB" && appointment.laboratoryId === user.id);

	if (!isAuthorized) {
		throw new Error("Not authorized to update this appointment");
	}

	return await db.appointment.update({
		where: { id: appointmentId },
		data: { status },
		

	});
}
