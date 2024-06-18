"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import AppointmentRequestForm from "./AppointmentForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const AppointmentModal = () => {
	const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);


	return (
		<>
			<Button variant="destructive"  onClick={() => setIsOpen(true)} size="sm" className="h-10 gap-1">
				<PlusCircle className="h-3.5 w-3.5" />
				<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
					Add Product
				</span>
			</Button>
			<Modal
				isOpen={isOpen}
				onClose={ handleClose}
				title="Add Appointment"
				description="Add a new appointment to the system"
			>
				<AppointmentRequestForm onSuccess={handleClose} />
			</Modal>
		</>
	);
};

export default AppointmentModal;
