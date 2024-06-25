"use client";

import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// Your component library
// import { registerDonor } from "../utils/authHelpers";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { donorSchema } from "@/schema";
import { useState, useTransition } from "react";
import { registerDonor } from "@/actions/register";
import { toast } from "sonner";
type Input = z.infer<typeof donorSchema>;

const DonorRegistrationForm = () => {
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();
	const form = useForm<z.infer<typeof donorSchema>>({
		resolver: zodResolver(donorSchema),
		defaultValues: {
			name: "",
			email: "",
			bloodGroup: "",
			address: "",
			phone: "",
			password: "",
		},
	});

	function onSubmit(values: Input) {
		setError("");
		setSuccess("");

		startTransition(() => {
			registerDonor(values).then((data) => {
				setError(data?.error);
				setSuccess(data?.success);

				if (data?.error) {
					toast.error("please check your credentials and try again");
				} else if (data?.success) {
					toast.success(
						" registration successful, you will be redirected to your dashboard shortly"
					);
				}
			});
		});
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="max-w-md w-full flex flex-col gap-4"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel> Name</FormLabel>
								<FormControl>
									<Input
										disabled={isPending}
										placeholder="full name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name="bloodGroup"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Blood Group</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select Blood Group" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
										(bloodGroup) => {
											return (
												<SelectItem value={bloodGroup} key={bloodGroup}>
													{bloodGroup}
												</SelectItem>
											);
										}
									)}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="address"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Address</FormLabel>
								<FormControl>
									<Input
										disabled={isPending}
										placeholder="Address"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Email Address</FormLabel>
								<FormControl>
									<Input
										disabled={isPending}
										placeholder="Email Address"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Phone Number</FormLabel>
								<FormControl>
									<Input
										disabled={isPending}
										placeholder="Phone Number"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										disabled={isPending}
										placeholder="Password"
										type="password"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>

				<Button type="submit" variant="destructive" disabled={isPending}>
					Register
				</Button>
			</form>
		</Form>
	);
};

export default DonorRegistrationForm;
