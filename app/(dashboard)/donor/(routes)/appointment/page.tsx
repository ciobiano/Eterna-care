"use client";
import React, { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import AppointmentRequestForm from "../../_components/AppointmentForm";
import { getUserById } from "@/lib/user";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface PageProps {
	id: string;
}

const queryClient = new QueryClient();


const Page: React.FC<PageProps> = ({ id }) => {
	const [isModalOpen, setModalOpen] = useState(false);

	const user = getUserById(id);

	return (
		<div className="grid grid-flow-col top-0 gap-0 h-screen mx-auto ">
			<div className="flex flex-col col-span-2 mt-6 px-10">
				<h1 className=" text-lg font-bold">All scheduled appointment</h1>
				<p className="text-sm mt-1">
					For staff use and authorized personnel only
				</p>

				<div className="ml-auto flex items-center mb-8 ">
					<Button
						onClick={() => setModalOpen(true)}
						size="sm"
						className="h-8 gap-1"
					>
						<PlusCircle className="h-3.5 w-3.5" />
						<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
							Add Product
						</span>
					</Button>
					<Modal
						isOpen={isModalOpen}
						onClose={() => setModalOpen(false)}
						title="Add Appointment"
						description="Add a new appointment to the system"
					>
						    <QueryClientProvider client={queryClient}>

						<AppointmentRequestForm donorId={id} />
							</QueryClientProvider>
					</Modal>
				</div>
				<Card x-chunk="dashboard-06-chunk-0  ">
					<CardContent></CardContent>
				</Card>
			</div>

			<div className="grid  bg-slate-400">hello 2</div>
		</div>
	);
};

export default Page;
