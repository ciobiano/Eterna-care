import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { updateAppointmentStatus } from "@/actions/updateStatus";
import { AppointmentColumn } from "./column";
import { AppointmentStatus } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { AlertModal } from "@/components/modal/alert-modal";
import { useRouter } from "next/navigation";
import { sendConfirmationEmail } from "@/actions/email";
import { toast } from "sonner";
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
		mutate(
			{
				appointmentId: data.id,
				status,
			},
			{
				onSuccess: () => {
					if (status === AppointmentStatus.CONFIRMED) {
						sendConfirmationEmail(data.id)
							.then(() => {
								toast.success("Confirmation email sent.");
								
								setLoading(false);
								router.refresh();
							})
							.catch((error) => {
								console.error(error);
								toast.error("Failed to send confirmation email.");
								setLoading(false);
							});
					} else {
						setLoading(false);
						router.refresh();
					}
				},
				onError: (error: any) => {
					console.error(error);
					toast.error("Failed to update appointment status.");
					setLoading(false);
				},
			}
		);
		setOpen(false);
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
				onClick={() => handleUpdateStatus(AppointmentStatus.CONFIRMED)}
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
