import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { File, ListFilter, PlusCircle } from "lucide-react";
import React from "react";

const TabDropDown = () => {
	return (
		<div className="gap-4 flex ">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline" size="sm" className="h-8 gap-1">
						<ListFilter className="h-3.5 w-3.5" />
						<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
							Filter
						</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>Filter by</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
					<DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<Button size="sm" variant="outline" className="h-8 gap-1">
				<File className="h-3.5 w-3.5" />
				<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
					Export
				</span>
			</Button>
			<Button size="sm" className="h-8 gap-1">
				<PlusCircle className="h-3.5 w-3.5" />
				<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
					Add Product
				</span>
			</Button>
		</div>
	);
};

export default TabDropDown;
