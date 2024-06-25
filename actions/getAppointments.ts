"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { MonthlyAppointmentData } from "@/schema";
import { AppointmentStatus } from "@prisma/client";

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



export const getMonthlyAppointmentData = async (): Promise<
	MonthlyAppointmentData[]
> => {
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
			select: {
				status: true,
				scheduledAt: true,
			},
		});

		console.log({ "Fetched appointments": appointments });

		const monthlyData = appointments.reduce(
			(acc: Record<string, MonthlyAppointmentData>, appointment) => {
				const month = `${appointment.scheduledAt.getFullYear()}-${
					appointment.scheduledAt.getMonth() + 1
				}`;

				if (!acc[month]) {
					acc[month] = {
						month,
						SCREENED: 0,
						CONFIRMED: 0,
						CANCELLED: 0,
						PENDING: 0,
					};
				}

				const status = appointment.status as keyof MonthlyAppointmentData;
				if (status in acc[month]) {
					acc[month][status]++;
				} else {
					console.error(`Invalid status: ${status}`);
				}

				return acc;
			},
			{}
		);

		console.log({ "Processed monthly data": monthlyData });

		return Object.values(monthlyData);
	} catch (error) {
		console.error("Error fetching appointment data:", error);
		throw new Error("Failed to fetch appointment data.");
	}
};