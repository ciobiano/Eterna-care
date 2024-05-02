"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function LoginPage() {
	const [type, setType] = useState("Donor");

	const handleTypeChange = (value: string) => {
		setType(value);
	};

	return (
		<div className="grid  grid-flow-col gap-0 h-screen ">
			<div className="bg-theme flex flex-col ">
				<Card className="m-auto max-w-5xl min-w-[30rem] items-center justify-center space-y-6">
					<CardHeader className="flex w-full items-center justify-center">
						<CardTitle className="text-xl">
							{type.toUpperCase()} - LOGIN
						</CardTitle>
					</CardHeader>

					<RadioGroup
						value={type}
						onValueChange={handleTypeChange}
						className="flex w-full justify-center items-center col-span-2 my-4 space-x-4"
					>
						{["Donor", "Hospital", "Organization"].map((option) => (
							<div key={option} className="flex items-center space-x-2">
								<RadioGroupItem value={option} id={`radio-${option}`} />
								<Label htmlFor={`radio-${option}`}>{option}</Label>
							</div>
						))}
					</RadioGroup>
					<CardContent>
						<div className="grid gap-4">
							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									name="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
							</div>

							<div className="grid gap-2">
								<Label htmlFor="password">Password</Label>
								<Input id="password" name="password" type="password" required />
							</div>
							<Button variant="destructive" type="submit" className="w-full">
								Login
							</Button>
						</div>

						<div className="mt-4 text-center text-sm">
							Don&apos;t have an account ?
							<Link href="/register" className="underline">
								Register
							</Link>
						</div>
					</CardContent>
				</Card>
			</div>
			<div className="flex flex-col bg-theme-foreground ">
				<div className="flex flex-col justify-center items-center h-full max-w-lg mx-auto"> 
					<p className="text-6xl font-bold text-center text-theme-primary">
						Every drop counts. <span className="text-red-500">Join our community of life-savers</span>
					</p>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
