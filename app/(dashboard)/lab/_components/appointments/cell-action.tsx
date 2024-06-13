import React from "react";
import { useMutation } from "@tanstack/react-query";
import { updateAppointmentStatus } from "@/actions/updateStatus";
import { AppointmentColumn } from "./column";
import { AppointmentStatus } from "@prisma/client";

interface CellActionProps{
  data: AppointmentColumn
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
	const { mutate } = useMutation({
		mutationFn: updateAppointmentStatus,
	});

	return (
		<div>
			<button
				onClick={() => {
					mutate({
						appointmentId: data.id,
						status: AppointmentStatus.CONFIRMED,
					});
				}}
			>
				Confirm
			</button>
			<button
				onClick={() => {
					mutate({
						appointmentId: data.id,
						status: AppointmentStatus.CANCELLED,
					});
				}}
			>
				Decline
			</button>
		</div>
	);
};

export default CellAction;
