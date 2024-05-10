import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { avatarBillboard, avatarBillboard2 } from "@/assets";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

const DonorDashboard = () => {
	return (
		<div>
			<div className="flex w-full max-w-3xl  h-72   bg-destructive-secondary rounded-lg  ">
				<div className=" max-w-92 m-6 items-center justify-center   text-white">
					<h1 className="text-sm">Welcome Ralph</h1>
					<p className="text-2xl max-w-96 font-semibold mt-4">
						Are you ready to ensure your health is in prime condition for
						donation? Check your eligibility now
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
			<div className="grid gap-2 md:grid-cols-2 md:gap-8 lg:grid-cols-3 mt-6 w-full max-w-3xl items-center justify-center ">
				{cardData.map((card, index) => (
					<div
						key={index}
						className="flex items-center p-5  bg-white backdrop-blur border border-slate-1/10 rounded-2xl max-w-52 "
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
			<div className="mt-8 w-full max-w-3xl ">
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
									<TableHead>Method</TableHead>
									<TableHead className="text-right">Amount</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell className="font-medium">INV001</TableCell>
									<TableCell>Paid</TableCell>
									<TableCell>Credit Card</TableCell>
									<TableCell className="text-right">$250.00</TableCell>
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
