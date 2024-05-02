"use client";

import { loginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { login } from "@/actions/login";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";

type Input = z.infer<typeof loginSchema>;

const LoginPage = () => {
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(values: Input) {
		setError("");
		setSuccess("");

		startTransition(() => {
			login(values).then((data) => {
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
	}

	return (
		<div className="grid  grid-flow-col gap-0 h-screen ">
			<div className="bg-theme flex flex-col items-center justify-center ">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="max-w-md w-full flex flex-col gap-4"
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel> Email address</FormLabel>
										<FormControl>
											<Input
												disabled={isPending}
												placeholder="email"
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
										<FormLabel> Password</FormLabel>
										<FormControl>
											<Input
												disabled={isPending}
												placeholder="password"
												type="password"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								);
							}}
						/>
						<Button type="submit" size="sm" disabled={isPending}>
							login
						</Button>
						<Link
							href="/register/donor"
							className="text-xs  hover:text-gray-400   "
						>
							Don&apos;t have an account? Register
						</Link>
					</form>
				</Form>
			</div>
			<div className="flex flex-col bg-theme-foreground ">
				<div className="flex flex-col justify-center items-center h-full max-w-lg mx-auto">
					<p className="text-6xl font-bold text-center text-theme-primary">
						Every drop counts.{" "}
						<span className="text-red-500">
							Join our community of life-savers
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
