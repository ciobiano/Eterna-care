import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface CustomFormProps {
	type: string;
}

const CustomForm = ({ type }: CustomFormProps) => {
	return (
		<div className="grid gap-4">
			<div className="grid grid-cols-2 gap-4">
				<div className="grid gap-2">
					<Label
						htmlFor={type === "Hospital" ? "hospitalName" : "organizationName"}
					>
						{type === "Hospital" ? "Hospital Name" : "Organization"}
					</Label>

					<Input
						id={type === "Hospital" ? "hospitalName" : "organizationName"}
						name={type === "Hospital" ? "hospitalName" : "organizationName"}
						placeholder={
							type === "Hospital" ? "Hospital name" : "Organization name"
						}
						required
					/>
				</div>

				<div className="grid gap-2 ">
					<Label htmlFor="owner">owner</Label>
					<Input id="owner" name="owner" placeholder="owner" required />
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
					<Label htmlFor="website">Website URL</Label>
					<Input id="website" name="website" type="website" required />
				</div>
				<div className="grid gap-2">
					<Label htmlFor="address">Address</Label>
					<Input id="address" name="address" type="address" required />
				</div>
				<div className="grid col-span-2 gap-2">
					<Label htmlFor="password">Password</Label>
					<Input id="password" name="password" type="password" required />
				</div>
			</div>
			<Button variant="destructive" type="submit" className="w-full">
				Create an account
			</Button>
		</div>
	);
};

export default CustomForm;
