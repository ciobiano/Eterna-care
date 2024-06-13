"use client";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { format } from "date-fns";
import CellAction from "./cell-action";
import { AppointmentStatus } from "@prisma/client";

export type AppointmentColumn = {
	id: string;
	donorId: string;
	laboratoryId: string;
	scheduledAt: Date;
	status: AppointmentStatus;
	createdAt: Date;
};

export const columns: ColumnDef<AppointmentColumn>[] = [
	{
		accessorKey: "Name",
		header: "Name",
	},
	{
		accessorKey: "Status",
		header: "Status",
	},
	{
		accessorKey: "scheduled date",
		header: "scheduled date",
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
