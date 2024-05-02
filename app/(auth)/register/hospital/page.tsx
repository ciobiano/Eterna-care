"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { hospitalSchema } from "@/schema";
import { toast } from "@/components/ui/use-toast";
import { registerHospital } from "@/actions/register";
import { useState, useTransition } from "react";

type Input = z.infer<typeof hospitalSchema>;

const HospitalRegForm = () => {
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof hospitalSchema>>({
		resolver: zodResolver(hospitalSchema),
		defaultValues: {
			name: "",
			email: "",
			address: "",
			phone: "",
			password: "",
			licenseNumber: "",
		},
	});

	const onSubmit = async (values: Input) => {
		setError("");
		setSuccess("");

		startTransition(() => {
			registerHospital(values).then((data) => {
				setError(data?.error);
				setSuccess(data?.success);

				if (data?.error) {
					toast({
						title: error,
						description: "Please try again with correct credentials",
					});
				} else if (data?.success) {
					toast({
						title: success,
						description: "you will be redirected to the dashboard shortly",
					});
				}
			});
		});
	};

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
									<Input placeholder="full name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name="licenseNumber"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel> License number </FormLabel>
								<FormControl>
									<Input placeholder="ca09VBb765Xu9900" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name="address"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Address</FormLabel>
								<FormControl>
									<Input placeholder="Address" {...field} />
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
									<Input placeholder="Email" {...field} />
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
									<Input placeholder="Phone Number" {...field} />
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
									<Input placeholder="Password" type="password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>

				<Button type="submit" variant="destructive" size="sm">
					Create an account{" "}
				</Button>
			</form>
		</Form>
	);
};

export default HospitalRegForm;
