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
	laboratoryId: string;
	scheduledAt: Date;
	status: AppointmentStatus;
	createdAt: Date;
};

export const columns: ColumnDef<AppointmentColumn>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "status",
		header: "Status",
	},
	{
		accessorKey: "scheduledAt",
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
