import { getDonor } from "@/lib/inventory";
import Link from "next/link";
import React from "react";

const PatientHistory = async () => {
	return (
		<div className=" mt-8 w-[25rem] space-y-4  items-center  justify-center  ">
			<div className="flex justify-between items-center">
				<h1 className="text-white/95 text-lg font-semibold ">
					Patient Details
				</h1>
				<Link
					href={"/lab/appointment"}
					className="text-sm text-zinc-500 hover:text-zinc-400"
				>
					view all
				</Link>
			</div>

			<div className="w-full max-w-[25rem] h-full max-h-[18rem] bg-[#585858] rounded-lg  shadow-md  opacity-50 ">
				<div className="flex flex-col py-10 px-4">
					<h1 className="text-white  font-semibold ">
						Patient Name: Obiano Ralphael
					</h1>
					<h1 className="text-white font-semibold ">
						Blood Type: A+
					</h1>
					<h1 className="text-white font-semibold ">Age: 25</h1>
					<h1 className="text-white text-lg font-semibold "></h1>
				</div>
			</div>
		</div>
	);
};

export default PatientHistory;
