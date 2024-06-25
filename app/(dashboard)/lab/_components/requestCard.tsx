import {
	AppointmentsIcon,
	ScreeningIcon,
	TotalRecordsIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const cardData = [
	{
		title: "Gloria M. Smith",
		icon: <AppointmentsIcon />,
		description: "12:00 PM",
	},
	{
		title: "Rita A. Gland",
		icon: <TotalRecordsIcon />,
		description: " 1:50 PM ",
	},
	{
		title: " Frank H. Randolf",
		icon: <ScreeningIcon />,
		description: "97 ",
	},
];

const RequestCard = () => {
	return (
		<div className=" mt-8 w-[25rem] space-y-4  items-center  justify-center  ">
			<div className="flex justify-between items-center">
				<h1 className="text-white/95 text-lg font-semibold ">
					Recent Appointments
				</h1>
				<Link
					href={"/lab/appointment"}
					className="text-sm text-zinc-500 hover:text-zinc-400"
				>
					view all
				</Link>
			</div>

			{cardData.map((card, index) => (
				<div
					key={index}
					className="flex items-center py-4  bg-[#585858] backdrop-blur max-h-fit  rounded-2xl max-w-[25rem] w-full  "
				>
					<div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#eb9183] mx-4  ">
						{card.icon}
					</div>
					<div>
						<h6 className="mb-1 text-base font-medium  text-white/95  ">{card.title}</h6>
						<p className="text-white/65">{card.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default RequestCard;
