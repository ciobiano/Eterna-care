// components/Charts.tsx
"use client";

import { getMonthlyAppointmentData } from "@/actions/getAppointments";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { MonthlyAppointmentData } from "@/schema";
import { useQuery } from "@tanstack/react-query";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const Charts = () => {
	// const { data } = useQuery({
	// 	queryKey: ["getMonthlyAppointmentData"], // Provide a valid QueryKey value
	// 	queryFn: async () => {
	// 		const data = await getMonthlyAppointmentData();
	// 		return data;
	// 	},
	// });

	// const formattedData = data?.map((item: MonthlyAppointmentData) => {
	// 	const monthNames = [
	// 		"Jan",
	// 		"Feb",
	// 		"Mar",
	// 		"Apr",
	// 		"May",
	// 		"Jun",
	// 		"Jul",
	// 		"Aug",
	// 		"Sep",
	// 		"Oct",
	// 		"Nov",
	// 		"Dec",
	// 	];
	// 	const [year, month] = item.month.split("-");
	// 	return {
	// 		name: `${monthNames[parseInt(month) - 1]} ${year}`,
	// 		CONFIRMED: 30,
	// 		SCREENED: 80,
	// 		CANCELLED: 40,
	// 		PENDING: 59,
	// 	};
	// });



	//Replace formattedData with dummyData for testing 

	const dummyData = [
		{
			name: "Jan ",
			CONFIRMED: 30,
			SCREENED: 80,
			CANCELLED: 40,
			PENDING: 59,
		},
		{
			name: "Feb ",
			CONFIRMED: 20,
			SCREENED: 70,
			CANCELLED: 30,
			PENDING: 49,
		},

		{
			name: "Mar ",
			CONFIRMED: 40,
			SCREENED: 90,
			CANCELLED: 50,
			PENDING: 69,
		},
		{
			name: "Apr ",
			CONFIRMED: 50,
			SCREENED: 100,
			CANCELLED: 60,
			PENDING: 79,
		},
		{
			name: "May ",
			CONFIRMED: 60,
			SCREENED: 110,
			CANCELLED: 70,
			PENDING: 89,
		},
		{
			name: "Jun ",
			CONFIRMED: 70,
			SCREENED: 120,
			CANCELLED: 80,
			PENDING: 99,
		},
		{
			name: "Jul ",
			CONFIRMED: 80,
			SCREENED: 130,
			CANCELLED: 90,
			PENDING: 109,
		},
		{
			name: "Aug ",
			CONFIRMED: 90,
			SCREENED: 140,
			CANCELLED: 100,
			PENDING: 119,
		},
		{
			name: "Sep ",
			CONFIRMED: 89,
			SCREENED: 79,
			CANCELLED: 10,
			PENDING: 19,
		},
		{
			name: "Oct ",
			CONFIRMED: 10,
			SCREENED: 16,
			CANCELLED: 20,
			PENDING: 19,
		},
		{
			name: "Nov ",
			CONFIRMED: 120,
			SCREENED: 70,
			CANCELLED: 130,
			PENDING: 149,
		},
		{
			name: "Dec ",
			CONFIRMED: 130,
			SCREENED: 10,
			CANCELLED: 140,
			PENDING: 159,
		}
		// Add more dummy data objects as needed
	];

	

	return (
		<Card className=" mt-10 w-full max-w-[54rem] ">
			<CardHeader>
				<CardTitle>Monthly appointment data</CardTitle>
				<CardDescription>Showing monthly appointment data</CardDescription>
			</CardHeader>

			<CardContent>
				<ResponsiveContainer width="100%" height={400}>
					<LineChart
						width={500}
						height={800}
						data={dummyData}
						
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type="monotone"
							dataKey="CANCELLED"
							stroke="#8884d8"
							activeDot={{ r: 8 }}
						/>
						<Line type="monotone" dataKey="CONFIRMED" stroke="#82ca9d" />
						<Line type="monotone" dataKey="SCREENED" stroke="#ffc658" />
						<Line type="monotone" dataKey="PENDING" stroke="#ff7300" />
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
};

export default Charts;
