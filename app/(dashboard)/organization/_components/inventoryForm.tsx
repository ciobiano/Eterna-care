"use client";
import { useState } from "react";
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

const InventoryForm = ({}) => {
	const form = useForm<z.infer<typeof inventorySchema>>({
		resolver: zodResolver(inventorySchema),
		defaultValues: {
			bloodGroup: "",
			inventoryType: "IN", // Default to "IN"
			email: "",
			quantity: 1,
			licenseNumber: "",
		},
	});
	const inventoryType = form.watch("inventoryType");
	const onSubmit = async (data: any) => {
		try {
			// Send data to backend for processing
			// const response = await createOrUpdateInventory(data);
			// ... handle response (success/error)
			console.log("Data submitted:", data);
		} catch (error) {
			// Handle errors here
			console.error("Error submitting inventory:", error);
		}
	};
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
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
									<SelectItem value="IN">IN</SelectItem>
									<SelectItem value="OUT">OUT</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
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
								<Input {...field} type="email" placeholder="Email" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Conditionally render hospitalId or donorId based on inventoryType */}
				{inventoryType === "OUT" && (
					<FormField
						control={form.control}
						name="licenseNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>License ID </FormLabel>
								<FormControl>
									<Input {...field} type="text" placeholder="Hospital License ID" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				)}
				
				<Button variant="destructive" type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export default InventoryForm;
