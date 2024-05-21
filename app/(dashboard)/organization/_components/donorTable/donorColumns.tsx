import { ColumnDef } from "@tanstack/react-table";

export type DonorColumn = {
	id: string;
	name: string;
	email: string;
	bloodGroup: string;
	address: string;
	phone: string;
};

export const donorColumns: ColumnDef<DonorColumn>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "bloodGroup",
		header: "Blood Group",
	},
	{
		accessorKey: "address",
		header: "Address",
	},
	{
		accessorKey: "phone",
		header: "Phone",
	},
];
