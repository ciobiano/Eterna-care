import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AppointmentColumn } from "./column";
import { AppointmentStatus } from "@prisma/client";
import { updateAppointmentStatus } from "@/actions/updateStatus";
import { Button } from "@/components/ui/button";
import { AlertModal } from "@/components/modal/alert-modal";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CellActionProps {
	data: AppointmentColumn;
}

const CellAction: React.FC<CellActionProps> = ({ data }) => {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const { mutate } = useMutation({
		mutationFn: updateAppointmentStatus,
		onSuccess: () => {
			// Optional: Invalidate queries or handle success actions
			setLoading(false);
			setOpen(false);
			router.refresh(); // Reload to fetch updated data
		},
		onError: (error: any) => {
			// Handle error
			console.error(error);
			setLoading(false);
		},
	});

	return (
		<>
			<AlertModal
				isOpen={open}
				onClose={() => setOpen(false)}
				onConfirm={() => {
					setLoading(true);
					mutate({
						appointmentId: data.id,
						status: AppointmentStatus.CANCELLED,
					});
				}}
				loading={loading}
			/>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="secondary" className="h-8 w-8 p-0">
						<span className="sr-only">Open menu</span>
						<MoreHorizontal className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuItem onClick={() => setOpen(true)}>
						<X className="mr-2 h-4 w-4" />
						Cancel
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};

export default CellAction;
