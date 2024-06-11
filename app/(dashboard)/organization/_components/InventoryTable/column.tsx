"use client";
import { Button } from "@/components/ui/button";
import { InventoryType } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { CellAction } from "../cell-action";
import { format } from "date-fns";

export type InventoryColumn = {
	id: string;
	email: string;
	quantity: number;
	inventoryType: InventoryType;
	bloodGroup: string;
	createdAt: string;
};

export const columns: ColumnDef<InventoryColumn>[] = [
	{
		accessorKey: "inventoryType",
		header: "Inventory Type",
	},
	{
		accessorKey: "bloodGroup",
		header: "Blood Group",
	},
	{
		accessorKey: "quantity",
		header: "Quantity",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		id: "ref",
		header: "Reference",
		cell: ({ row }) => (
			<span>{row.original.inventoryType === "OUT" ? "Hospital" : "Donor"}</span>
		),
	},
	{
		accessorKey: "createdAt",

		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Date
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
