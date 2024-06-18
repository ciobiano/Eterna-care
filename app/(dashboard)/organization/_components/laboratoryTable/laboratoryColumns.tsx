import { ColumnDef } from "@tanstack/react-table";

export type LaboratoryColumn = {
	id: string;
	name: string;
	email: string;
	licenseNumber: string;
	city: string;
	state: string;
	phone: string;
};

export const laboratoryColumn: ColumnDef<LaboratoryColumn>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "licenseNumber",
		header: "License Number",
	},
	{
		accessorKey: "city",
		header: "City",
	},
	{
		accessorKey: "state",
		header: "State",
	},
	{
		accessorKey: "phone",
		header: "Phone",
	},
];
