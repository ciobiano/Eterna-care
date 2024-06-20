import { Card, CardContent } from "@/components/ui/card";
import AppointmentClient from "../../_components/appointments/client";
import AppointmentModal from "../../_components/appointments/appointmentModal";
import { SecondHeading } from "@/components/heading";
import Image from "next/image";
import { AdvertBoard } from "@/assets";

const Page = () => {
	return (
		<div className="grid grid-flow-col top-0 gap-0 h-screen mx-auto ">
			<div className="flex flex-col col-span-2 mt-6 px-10">
				<SecondHeading
					title="Appointments"
					description="Here you can view all your appointments, cancel or reschedule them."
				/>

				<div className="ml-auto flex items-center mb-8 ">
					<AppointmentModal />
				</div>
				<Card x-chunk="dashboard-06-chunk-0  ">
					<CardContent>
						<AppointmentClient />
					</CardContent>
				</Card>
			</div>

			<div className="grid col-span-1  ">
			<div className="flex  justify-center h-full w-full  max-h-[18rem] mx-auto mt-20 rounded-lg">
				<Image
				src={AdvertBoard}
				alt="animate picture of a Hematologists"
				width={350}
				height={340}
				className="rounded-lg  "
				/>
			</div>

			</div>
		</div>
	);
};

export default Page;
