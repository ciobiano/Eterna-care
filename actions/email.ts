"use server";

import DonorScheduleConfirmationEmail from "@/app/emails/schedule";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendConfirmationEmail = async (appointmentId: string) => {
	try {
		const appointment = await db.appointment.findUnique({
			where: { id: appointmentId },
			include: { donor: true },
		});

		if (!appointment || !appointment.donor) {
			throw new Error("Appointment or donor not found");
		}

		const { donor } = appointment;
		const { email: donorEmail, name: donorName } = donor;
		const { scheduledAt } = appointment;

		const { data } = await resend.emails.send({
			from: "Eterna <onboarding@resend.dev>",
			to: ["williamfraser833@gmail.com"],
			subject: "Donation Schedule Confirmation",
			react: DonorScheduleConfirmationEmail({
				donorName,
				scheduledAt,
				donationTime: "10:00 AM",
			}) ,
		});

		console.log("Email sent:", data);
		
	} catch (error) {
		return NextResponse.json({error});
	}
};
