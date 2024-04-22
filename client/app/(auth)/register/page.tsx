"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function RegisterPage() {
	const [type, setType] = useState("Donor");

	const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setType(e.target.value);
	};

	return (
		<div className="flex flex-col items-center justify-center h-full">
			<Card className="mx-auto max-w-xl">
				<CardHeader className="flex w-full items-center justify-center">
					<CardTitle className="text-xl">
						{type.toUpperCase()} - REGISTRATION
					</CardTitle>
				</CardHeader>

				<CardContent>
					<RadioGroup
						value={type}
						onChange={handleTypeChange}
						className="flex w-full justify-center items-center col-span-2 my-4 space-x-4"
					>
						{["Donor", "Hospital", "Organization"].map((option) => (
							<div key={option} className="flex items-center space-x-2">
								<RadioGroupItem value={option} id={`radio-${option}`} />
								<Label htmlFor={`radio-${option}`}>{option}</Label>
							</div>
						))}
					</RadioGroup>

					{type === "Donor" && (
						<div className="grid gap-4">
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="first-name">First name</Label>
									<Input
										id="first-name"
										name="firstName"
										placeholder="Max"
										required
									/>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="last-name">Last name</Label>
									<Input
										id="last-name"
										name="lastName"
										placeholder="Robinson"
										required
									/>
								</div>
							</div>
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
								<Label htmlFor="phone">Phone</Label>
								<Input
									id="phone"
									name="phone"
									type="tel"
									placeholder="+1 234 567 8910"
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="password">Password</Label>
								<Input id="password" name="password" type="password" required />
							</div>
							<Button variant="destructive" type="submit" className="w-full">
								Create an account
							</Button>
						</div>
					)}

					<div className="mt-4 text-center text-sm">
						Already have an account?{" "}
						<Link href="/login" className="underline">
							Sign in
						</Link>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

export default RegisterPage;
