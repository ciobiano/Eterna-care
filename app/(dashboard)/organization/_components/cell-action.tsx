"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Copy, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { AlertModal } from "@/components/modal/alert-modal";
import { InventoryColumn } from "./InventoryTable/column";
import { toast } from "@/components/ui/use-toast";
import deleteInventory from "@/actions/deleteInventory";

interface CellActionProps {
	data: InventoryColumn;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const onCopy = () => {
		navigator.clipboard.writeText(data.id);
		toast({
			title: "Copied to clipboard",
		});
	};

	const onDelete = async () => {
		try {
			setLoading(true);
			await deleteInventory({ id: data.id });
			toast({ title: "Inventory deleted" });
			router.refresh();
		} catch (error) {
			toast({
				title: "Error",
				description: "Failed to delete inventory",
			});
		} finally {
			setLoading(false);
			setOpen(false);
		}
	};
	return (
		<>
			<AlertModal
				isOpen={open}
				onClose={() => setOpen(false)}
				onConfirm={() => onDelete()}
				loading={loading}
			/>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="secondary" className="h-8 w-8 p-0">
						<span className=" sr-only">open menu</span>
						<MoreHorizontal className="h-4 2-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuLabel>Actions</DropdownMenuLabel>
					<DropdownMenuItem onClick={() => onCopy()}>
						<Copy className="mr-2 h-4 w-4" />
						Copy
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setOpen(true)}>
						<Trash className="mr-2 h-4 w-4" />
						Delete
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
};
