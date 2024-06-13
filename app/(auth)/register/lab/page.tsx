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
import { laboratorySchema } from "@/schema";
import { toast } from "@/components/ui/use-toast";
import { registerLaboratory } from "@/actions/register";
import { useState, useTransition } from "react";

type Input = z.infer<typeof laboratorySchema>;

const LaboratoryRegForm = () => {
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof laboratorySchema>>({
		resolver: zodResolver(laboratorySchema),
		defaultValues: {
			name: "",
			email: "",
			address: "",
			city: "",
			state: "",
			phone: "",
			password: "",
			licenseNumber: "",
		},
	});

	const onSubmit = async (values: Input) => {
		setError("");
		setSuccess("");

		startTransition(() => {
			registerLaboratory(values).then((data) => {
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
				className="max-w-xl w-full grid grid-cols-2 gap-4"
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
										placeholder="Laboratory Name"
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
									<Input disabled={isPending} placeholder="Email" {...field} />
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
									<Input
										disabled={isPending}
										placeholder="ca09VBb765Xu9900"
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
					name="city"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>City</FormLabel>
								<FormControl>
									<Input disabled={isPending} placeholder="City" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>

				<FormField
					control={form.control}
					name="state"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>State</FormLabel>
								<FormControl>
									<Input disabled={isPending} placeholder="State" {...field} />
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
				<div className="grid mt-4 col-span-2 items-center justify-center">
					<Button
						disabled={isPending}
						type="submit"
						variant="destructive"
						size="sm"
						className="w-64"
					>
						Create an account{" "}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default LaboratoryRegForm;
