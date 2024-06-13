"use client";

import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createAppointment } from "@/actions/appointment";
import { getLaboratories } from "@/lib/inventory";
import { toast } from "@/components/ui/use-toast";

// Define the AppointmentSchema using Zod
const AppointmentSchema = z.object({
	laboratoryId: z.string().nonempty("Laboratory is required"),
	scheduledAt: z.date().refine((date) => date instanceof Date, {
		message: "Date is required",
	}),
});

// Define the form data type
type FormData = z.infer<typeof AppointmentSchema>;

// Define the laboratory type
interface Laboratory {
	id: string;
	name: string;
}

const AppointmentRequestForm = ({ donorId }: { donorId: string }) => {
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();
	const [date, setDate] = useState<Date>();

	const form = useForm<FormData>({
		resolver: zodResolver(AppointmentSchema),
	});

	const {
		handleSubmit,
		formState: { errors },
	} = form;

	const { data: laboratories, isLoading } = useQuery({
		queryKey: ["laboratories"],
		queryFn: getLaboratories,
	});

	const onSubmit = (data: FormData) => {
		const { laboratoryId, scheduledAt } = data;

		setError("");
		setSuccess("");

		startTransition(() => {
			createAppointment({
				donorId,
				laboratoryId,
				scheduledAt,
			}).then((data) => {
				setError(data?.error);
				setSuccess(data?.success);

				if (data?.error) {
					toast({
						title: "Error",
						description: data?.error,
					});
				} else if (data?.success) {
					toast({
						title: "Success",
						description: data?.success,
					});
				}
			});
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					name="laboratoryId"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Laboratory </FormLabel>
							<Select onValueChange={field.onChange} value={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select a laboratory" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{laboratories?.map((laboratory: Laboratory) => (
										<SelectItem key={laboratory.id} value={laboratory.id}>
											{laboratory.name}
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
					name="scheduledAt"
					render={({ field }) => (
						<FormItem className="flex flex-col">
							<FormLabel>Schedule Date</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={"outline"}
											className={cn(
												"w-[240px] pl-3 text-left font-normal",
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
								<PopoverContent className="flex w-auto flex-col space-y-2 p-2">
									<Select
										onValueChange={(value) =>
											setDate(addDays(new Date(), parseInt(value)))
										}
									>
										<SelectTrigger>
											<SelectValue placeholder="Select" />
										</SelectTrigger>
										<SelectContent position="popper">
											<SelectItem value="0">Today</SelectItem>
											<SelectItem value="1">Tomorrow</SelectItem>
											<SelectItem value="3">In 3 days</SelectItem>
											<SelectItem value="7">In a week</SelectItem>
										</SelectContent>
									</Select>
									<div className="rounded-md border">
										<Calendar
											mode="single"
											selected={date}
											onSelect={setDate}
										/>
									</div>
								</PopoverContent>
							</Popover>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button disabled={isPending} type="submit">
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default AppointmentRequestForm;
