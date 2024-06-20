"use client";



import { useState } from "react";
import { Calendar } from "./ui/calendar";

export function CalendarBox() {
	const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<Calendar
			mode="single"
			selected={date}
			onSelect={setDate}
			className="text-white bg-[#242424] rounded-lg "
		/>
	);
}
