"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { format } from "date-fns";
import CellAction from "./cell-action";
import { AppointmentStatus } from "@prisma/client";
import { Button } from "@/components/ui/button";

export type AppointmentColumn = {
	id: string;
	donorId: string;
	name: string;
	scheduledAt: Date;
	status: AppointmentStatus;
	createdAt: Date;
};

const getStatusClass = (status: AppointmentStatus) => {
	const statusClasses: { [key in AppointmentStatus]: string } = {
		PENDING: "border-transparent bg-[#FFEFC6] text-yellow-600 font-semibold",
		CONFIRMED: "border-transparent bg-[#CFFFE5] text-green-600 font-semibold",
		CANCELLED: "border-transparent bg-[#FFD6D6] text-red-600 font-semibold",
		SCREENED: "border-transparent bg-[##35A458] text-white font-semibold",
	};
	return statusClasses[status] || "border-gray-500";
};

export const columns: ColumnDef<AppointmentColumn>[] = [
	{
		accessorKey: "name",
		header: "Laboratory",
		cell: ({ row }) => <span>{row.original.name}</span>,
	},
	{
		accessorKey: "scheduledAt",
		header: "Scheduled date",
		cell: ({ row }) => (
			<span>{format(new Date(row.original.scheduledAt), "dd-MMM-yyyy")}</span>
		),
	},

	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			const statusClass = getStatusClass(row.original.status);
			return (
				<span
					className={`border-2 rounded-[10rem] p-1.5 text-xs ${statusClass}`}
				>
					{row.original.status.toLowerCase()}
				</span>
			);
		},
	},
	{
		accessorKey: "createdAt",

		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Sort by date
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => (
			<span>{format(new Date(row.original.createdAt), "dd-MMM-yyyy")}</span>
		),
	},
	{
		id: "action",
		cell: ({ row }) => <CellAction data={row.original} />,
	},
];
