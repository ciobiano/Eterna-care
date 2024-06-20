import {
	AppointmentsIcon,
	ScreeningIcon,
	TotalRecordsIcon,
} from "@/components/icons";
import React from "react";

const cardData = [
	{
		title: "Total Appointments",
		icon: <AppointmentsIcon />,
		amount: "139",
	},
	{
		title: "Blood Received",
		icon: <TotalRecordsIcon />,
		amount: "O+",
	},
	{
		title: "Screening Done",
		icon: <ScreeningIcon />,
		amount: "97 ",
	},
];

const LabDashboard = () => {
	return (
		<div className=" ">
			<div className="grid gap-2 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-6 w-full  items-center justify-center  ">
				{cardData.map((card, index) => (
					<div
						key={index}
						className="flex items-center py-8  bg-[#f1f4f7] backdrop-blur border border-slate-1/10 rounded-2xl max-w-[15rem] w-full  "
					>
						<div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#f4c5ad] mx-4  ">
							{card.icon}
						</div>
						<div>
							<h6 className="mb-1  text-sm text-zinc-500  ">{card.title}</h6>
							<p className="text-base font-medium ">{card.amount}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LabDashboard;
