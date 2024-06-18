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
import { getLabs } from "@/actions/getLabs";
import { useRouter } from "next/navigation";

// Define the AppointmentSchema using Zod
const AppointmentSchema = z.object({
	laboratoryId: z.string().nonempty("Laboratory is required"),
	scheduledAt: z.date().refine((date) => date instanceof Date, {
		message: "Date is required",
	}),
});

type FormData = z.infer<typeof AppointmentSchema>;

interface AppointmentRequestFormProps {
	onSuccess: () => void;
}

const AppointmentRequestForm: React.FC<AppointmentRequestFormProps> = ({
	onSuccess,
}) => {
	const [error, setError] = useState<string | undefined>("");
	const [success, setSuccess] = useState<string | undefined>("");
	const [isPending, startTransition] = useTransition();
	const [date, setDate] = useState<Date>();

	const router = useRouter();

	const form = useForm<FormData>({
		resolver: zodResolver(AppointmentSchema),
	});

	const {
		handleSubmit,
		setValue,
		formState: { errors },
	} = form;

	const { data } = useQuery({
		queryKey: ["getLabs"], // Provide a valid QueryKey value
		queryFn: async () => {
			const data = await getLabs();
			return data;
		},
	});

	const mutation = useMutation({
		mutationFn: createAppointment,
		onSuccess: () => {
			onSuccess();
			toast({
				title: success,
				description: " Appointment successfully created.",
			});
			router.refresh();
		},
		onError: (error: any) => {
			toast({
				title: "Error",
				description: error.message,
			});
		},
	});

	const onSubmit = (data: FormData) => {
		startTransition(() => {
			mutation.mutate(data);
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					name="laboratoryId"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Laboratory</FormLabel>
							<Select onValueChange={field.onChange} value={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select a laboratory" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{data?.map((laboratory) => (
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
							<FormLabel> Test Date </FormLabel>
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
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										disabled={
											(date) => date <= new Date() // Disable past dates
										}
										initialFocus
									/>
								</PopoverContent>
							</Popover>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button variant="destructive" disabled={isPending} type="submit">
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default AppointmentRequestForm;
