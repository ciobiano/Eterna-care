"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Heading from "@/components/heading";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z
	.object({
		name: z.string(),
		email: z.string().email(),
		userType: z.enum(["donor", "hospital", "organization", "admin"]),
		HospitalName: z.string().optional(),
		OrganizationName: z.string().optional(),
		phoneNumber: z.string(),
		website: z.string().optional(),
		password: z.string().min(3),
		address: z.string().min(5),
	})
	.refine(
		(data) => {
			if (data.userType === "donor" || data.userType === "admin") {
				return !!data.name;
			}
			return true;
		},
		{
			message: "name number is required",
			path: ["name"],
		}
	)
	.refine(
		(data) => {
			if (data.userType === "hospital") {
				return !!data.HospitalName;
			}
			return true;
		},
		{
			message: "Hospital name is required",
			path: ["hospitalName"],
		}
	)
	.refine(
		(data) => {
			if (data.userType === "organization") {
				return !!data.OrganizationName;
			}
			return true;
		},
		{
			message: "Organization name is required",
			path: ["organizationName"],
		}
	)

	.refine(
		(data) => {
			if (data.userType === "hospital" || data.userType === "organization") {
				return !!data.website;
			}
			return true;
		},
		{
			message: "Website is required ",
			path: ["website"],
		}
	);

export function RegisterPage() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			userType: "donor",
			HospitalName: "",
			OrganizationName: "",
			phoneNumber: "",
			website: "",
			address: "",
			password: "",
		},
	});

	const userType = form.watch("userType");

	const handleSubmit = (values: z.infer<typeof formSchema>) => {
		console.log({ values });
	};
	return (
		<div className="grid grid-flow-col gap-0 h-screen">
			<main className="flex min-h-screen min-w-lg flex-col items-center justify-between p-24">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(handleSubmit)}
						className="max-w-md w-full flex flex-col gap-4"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Email address</FormLabel>
										<FormControl>
											<Input
												placeholder="Email address"
												type="email"
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
							name="userType"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Account type</FormLabel>
										<Select onValueChange={field.onChange}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder="Select an account type" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectItem value="donor">Donor</SelectItem>
												<SelectItem value="hospital">Hospital</SelectItem>
												<SelectItem value="organization">
													Organization
												</SelectItem>
												<SelectItem value="admin">Admin</SelectItem>
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								);
							}}
						/>
						{userType === "donor" || userType === "admin" ? (
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel>Name</FormLabel>
											<FormControl>
												<Input placeholder="Name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
						) : null}
						{userType === "hospital" ? (
							<FormField
								control={form.control}
								name="HospitalName"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel>Hospital Name</FormLabel>
											<FormControl>
												<Input placeholder="Hospital Name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
						) : null}
						{userType === "organization" ? (
							<FormField
								control={form.control}
								name="OrganizationName"
								render={({ field }) => {
									return (
										<FormItem>
											<FormLabel>Organization Name</FormLabel>
											<FormControl>
												<Input placeholder="Organization Name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
						) : null}
						{userType === "hospital" || userType === "organization" ? (
							<FormField
								control={form.control}
								name="website"
								render={({ field }) => {
									return (
										<>
											<FormItem>
												<FormLabel>Address</FormLabel>
												<FormControl>
													<Input placeholder="Address" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										</>
									);
								}}
							/>
						) : null}

						<FormField
							control={form.control}
							name="phoneNumber"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Phone number</FormLabel>
										<FormControl>
											<Input placeholder="Phone number" {...field} />
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
						<Button type="submit" className="w-full">
							Submit
						</Button>
					</form>
				</Form>
			</main>
			<div className="bg-theme-foreground items-center justify-center flex flex-col text-">
				<Heading
					subtitle="Be a hero."
					title=" A few clicks can make a world of difference"
					spanText="Sign up now !"
				/>
			</div>
		</div>
	);
}

export default RegisterPage;
