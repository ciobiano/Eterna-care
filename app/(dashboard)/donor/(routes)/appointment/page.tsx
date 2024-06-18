import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import AppointmentRequestForm from "../../_components/AppointmentForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppointmentClient from "../../_components/appointments/client";
import AppointmentModal from "../../_components/appointmentModal";

const Page = () => {
	return (
		<div className="grid grid-flow-col top-0 gap-0 h-screen mx-auto ">
			<div className="flex flex-col col-span-2 mt-6 px-10">
				<h1 className=" text-lg font-bold">All scheduled appointment</h1>
				<p className="text-sm mt-1">
					For staff use and authorized personnel only
				</p>

				<div className="ml-auto flex items-center mb-8 ">
					<AppointmentModal />
				</div>
				<Card x-chunk="dashboard-06-chunk-0  ">
					<CardContent>
						<AppointmentClient />
					</CardContent>
				</Card>
			</div>

			<div className="grid  bg-slate-400">hello 2</div>
		</div>
	);
};

export default Page;
