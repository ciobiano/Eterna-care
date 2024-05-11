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
import { inventorySchema } from "@/schema";
import { BloodGroup } from "@prisma/client";
import { formatBloodGroup } from "@/lib/bloodGroup";


interface InventoryFormProps {
  
}


const InventoryForm = ({

}) => {
	const form = useForm<z.infer<typeof inventorySchema>>({
		resolver: zodResolver(inventorySchema),
		defaultValues: {
			bloodGroup: "A_POSITIVE",
			inventoryType: "IN", // Default to "IN"
			email: "",
			quantity: 1, // Default to 1
		},
	});
	const inventoryType = form.watch("inventoryType");
	const onSubmit = async (data:any) => {
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
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
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
							<Select
								onValueChange={field.onChange}
								value={formatBloodGroup(field.value)}
							>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select Blood Group" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{Object.values(BloodGroup).map((bloodGroupEnum) => (
										<SelectItem
											key={bloodGroupEnum}
											value={bloodGroupEnum} // Use the enum value internally
										>
											{/* Display the string value in the dropdown */}
											{bloodGroupEnum.replace("_", " ")}
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
							<FormLabel>Quantity</FormLabel>
							<FormControl>
								<Input {...field} type="number" placeholder="Enter quantity" />
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
						name="hospitalId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Hospital</FormLabel>
								{/* Add your hospital selection component (e.g., dropdown, autocomplete) */}
								<FormMessage />
							</FormItem>
						)}
					/>
				)}
				{inventoryType === "IN" && (
					<FormField
						control={form.control}
						name="donorId"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Donor</FormLabel>
								{/* Add your donor selection component */}
								<FormMessage />
							</FormItem>
						)}
					/>
				)}
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export default InventoryForm;
