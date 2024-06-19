"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { BLOOD_GROUP_OPTIONS, ProfileSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type ProfileData = z.infer<typeof ProfileSchema>;

const ProfileForm = () => {
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();

	const form = useForm<ProfileData>({
		resolver: zodResolver(ProfileSchema),
	});

	const onSubmit = async (values: ProfileData) => {};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="max-w-4xl w-full grid grid-cols-2 gap-8 mx-auto"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel> Name</FormLabel>
								<FormControl>
									<Input disabled={isPending} {...field} />
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
									<Input disabled={isPending} {...field} />
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
								<FormLabel> Phone number </FormLabel>
								<FormControl>
									<Input disabled={isPending} {...field} />
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
								<FormLabel> Address</FormLabel>
								<FormControl>
									<Input disabled={isPending} {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<FormField
					control={form.control}
					name="dateOfBirth"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Date of birth</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={"outline"}
											className={cn(
												"w-full pl-3 text-left font-normal",
												!field.value && "text-muted-foreground"
											)}
										>
											{field.value ? (
												format(field.value, "PPP")
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date) =>
											date > new Date() || date < new Date("1900-01-01")
										}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
						
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="bloodGroup"
					render={({ field }) => {
						return (
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
						);
					}}
				/>

				<FormField
					control={form.control}
					name="nextOfKin"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Next of kin</FormLabel>
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
					name="nextOfKinPhone"
					render={({ field }) => {
						return (
							<FormItem>
								<FormLabel>Next of kin Number</FormLabel>
								<FormControl>
									<Input
										disabled={isPending}
										placeholder="☎️"
										type="password"
										{...field}
                                        
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						);
					}}
				/>
				<div className="grid col-2 w-full ">
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => {
							return (
								<FormItem>
									<FormLabel>Tell us about yourself</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Tell us a little bit about yourself"
											className="  resize-none py-10   "
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							);
						}}
					/>
				</div>
				<div className="ml-auto grid col-span-2  mt-8  items-center justify-center">
					<Button
						disabled={isPending}
						type="submit"
						variant="destructive"
						size="sm"
						className="w-15"
					>
						save{" "}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default ProfileForm;
