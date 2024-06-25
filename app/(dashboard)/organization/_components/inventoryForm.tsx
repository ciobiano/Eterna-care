"use client";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { BLOOD_GROUP_OPTIONS, inventorySchema } from "@/schema";
import { InventoryType } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useCurrentRole } from "@/hooks/use-current-role";
import inventoryInput from "@/actions/inventory";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";

type Input = z.infer<typeof inventorySchema>;

const InventoryForm = ({ onClose }: { onClose: () => void }) => {
	const role = useCurrentRole();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof inventorySchema>>({
		resolver: zodResolver(inventorySchema),
		defaultValues: {
			bloodGroup: "",
			inventoryType: "IN", // Default to "IN"
			email: "",
			quantity: 1, // Default to 1
		},
	});

	async function onSubmit(values: Input) {
		setIsLoading(true);

		startTransition(() => {
			inventoryInput(values)
				.then((data) => {
					setError(data?.error);
					setSuccess(data?.success);

					if (data?.error) {
						setError(data.error);
						toast.error(data.error.toString());
					} else if (data.success) {
						setSuccess(data.success);
						toast.success("Inventory submitted successfully");
						setTimeout(() => {
							onClose();
							router.refresh();
						}, 3000); // Redirect after 3 seconds
					}
				})
				.finally(() => {
					setIsLoading(false);
				});
		});
	}

useEffect(() => {
	if (success) {
		onClose();
	}
}, [success, onClose]);


	return  (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
				{role === "ORGANIZATION" && (
					<FormField
						control={form.control}
						name="inventoryType"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Inventory Type</FormLabel>
								<Select onValueChange={field.onChange} value={field.value}>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select Inventory Type" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value={InventoryType.IN}>IN</SelectItem>
										<SelectItem value={InventoryType.OUT}>OUT</SelectItem>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
				)}

				<FormField
					control={form.control}
					name="bloodGroup"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Blood Group</FormLabel>
							<Select onValueChange={field.onChange} value={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select Blood Group" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{BLOOD_GROUP_OPTIONS.map((group, index) => (
										<SelectItem key={index} value={group}>
											{group}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="quantity"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Quantity (ML)</FormLabel>
							<FormControl>
								<Input
									disabled={isPending}
									{...form.register("quantity", { valueAsNumber: true })}
									type="number"
									placeholder="Enter quantity"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									disabled={isPending}
									{...field}
									type="email"
									placeholder="Email"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" variant="destructive" disabled={isLoading}>
					{isLoading ? "Submitting..." : "Submit"}
				</Button>
			</form>
		</Form>
	) 
};

const InventoryDialogTrigger = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleDialogClose = () => {
		setIsDialogOpen(false);
	};

	return (
		<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
			<DialogTrigger asChild>
				<Button variant="outline" className="h-10 gap-1">
					<PlusCircle className="h-3.5 w-3.5" />
					<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
						Add inventory
					</span>
				</Button>
			</DialogTrigger>
			<DialogContent>
				<InventoryForm onClose={handleDialogClose} />
			</DialogContent>
		</Dialog>
	);
};

export default InventoryDialogTrigger;
