import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { updateAppointmentStatus } from "@/actions/updateStatus";
import { AppointmentColumn } from "./column";
import { AppointmentStatus } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { AlertModal } from "@/components/modal/alert-modal";
import { useRouter } from "next/navigation";

interface CellActionProps {
	data: AppointmentColumn;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const { mutate } = useMutation({
		mutationFn: updateAppointmentStatus,
	});

	const handleUpdateStatus = (status: AppointmentStatus) => {
		setLoading(true);
		mutate({
			appointmentId: data.id,
			status,
		});
		setOpen(false);
		router.refresh();
	};

	return (
		<div className="gap-2 flex">
			<AlertModal
				isOpen={open}
				onClose={() => setOpen(false)}
				onConfirm={() => handleUpdateStatus(AppointmentStatus.CANCELLED)}
				loading={loading}
			/>

			<Button
				disabled={data.status !== AppointmentStatus.PENDING}
				size={"icon"}
				onClick={() => {
					setLoading(true);
					mutate({
						appointmentId: data.id,
						status: AppointmentStatus.CONFIRMED,
					});

					router.refresh();
				}}
				className="border text-black border-green-300 bg-inherit hover:border-green-600 hover:bg-green-100 hover:text-white"
			>
				<Check color="#47cd68" size={16} className="" />
			</Button>
			<Button
				disabled={data.status !== AppointmentStatus.PENDING}
				onClick={() => setOpen(true)}
				size={"icon"}
				className="border text-black border-red-300 bg-inherit hover:border-red-600 hover:bg-red-100 hover:text-white"
			>
				<X color="#e62d2d" size={16} />
			</Button>
		</div>
	);
};

export default CellAction;
