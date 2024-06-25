
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { avatarBillboard, avatarBillboard2 } from "@/assets";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { currentUser } from "@/lib/auth";
import { auth } from "@/auth";

const cardData = [
	{
		title: "Total visits",
		icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
		amount: "10",
	},
	{
		title: "Blood Type",
		icon: <Users className="h-4 w-4 text-muted-foreground" />,
		amount: "O+",
	},
	{
		title: "Total Donations",
		icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
		amount: "5 pint ",
	},
];

const DonorDashboard = async () => {
	const data = await currentUser();



	return (
		<div>
			<div className="flex w-full max-w-3xl mx-auto  h-72   bg-destructive-secondary rounded-lg  ">
				<div className=" max-w-92 m-6 items-center justify-center   text-white">
					<h1 className="text-sm font-semibold">Welcome {data?.name}</h1>
					<p className="text-2xl max-w-96  mt-4">
						Are you ready to ensure your health is in prime condition for
						donation? <br />
						Check your eligibility now
					</p>
					<Button className=" mt-8 ">Contact us</Button>
				</div>

				<div className=" ">
					<Image
						src={avatarBillboard2}
						alt="animate picture of a Hematologists"
						width={290}
						height={280}
						className=""
					/>
				</div>
			</div>
			<div className="grid gap-2 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-6 w-full max-w-3xl mx-auto items-center justify-center ">
				{cardData.map((card, index) => (
					<div
						key={index}
						className="flex items-center p-5  bg-white backdrop-blur shadow-lg border border-slate-1/10 rounded-2xl max-w-52 "
					>
						<div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-1/10">
							{card.icon}
						</div>
						<div>
							<h6 className="mb-1  text-sm text-zinc-500  ">{card.title}</h6>
							<p className="text-base font-medium ">{card.amount}</p>
						</div>
					</div>
				))}
			</div>
			<div className="mt-8 w-full max-w-3xl mx-auto ">
				<Card>
					<CardHeader>
						<CardTitle>Recent Activity</CardTitle>
						<CardDescription>
							View all medical records and activities
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[100px]">Invoice</TableHead>
									<TableHead>Status</TableHead>
									<TableHead>Scheduled Date</TableHead>
									<TableHead className="text-right"></TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">INV001</TableCell>
									<TableCell>
										<span className="border-2 rounded-[10rem] p-1.5 text-xs border-transparent bg-[#CFFFE5] text-green-600 font-semibold">
											Confirmed
										</span>
									</TableCell>
									<TableCell>
										<span>12th May 12:50 PM </span>
									</TableCell>
									<TableCell className="text-right">
										<Button variant="ghost">View</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default DonorDashboard;
