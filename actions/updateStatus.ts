"use server"
import { db } from "@/lib/db";
import { AppointmentStatus } from "@prisma/client";


interface AppointmentUpdateParams {
	appointmentId: string;
	status: AppointmentStatus;
}


export async function updateAppointmentStatus({
  appointmentId,
  status,
}: AppointmentUpdateParams) {
  return await db.appointment.update({
    where: { id: appointmentId },
    data: { status },
  });
}
