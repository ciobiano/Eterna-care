"use client";

import CategoryBox from "@/components/categoryBox";
import { Container } from "@/components/container";
import { RxCalendar, RxDashboard, RxPerson } from "react-icons/rx";

const Categories = () => {
	const routes = [
		{
			icon: RxDashboard,
			label: "Dashboard",
			href: "/hospital",
		},
		{
			icon: RxCalendar,
			label: "Appointments",
			href: "/hospital/appointment",
		},
		{
			icon: RxPerson,
			label: "Consultants",
			href: "/hospital/consultant",
		},
		{
			icon: RxPerson,
			label: "Staff",
			href: "/staff"

		},
		{
			icon: RxPerson,
			label: "Profile",
			href: "/donor/profile",
		}
	];
	return (
		<Container>
			<div
				className="
        
          flex 
          flex-row 
          items-center 
		  bg-theme-foreground
          
          overflow-x-auto
        "
			>
				{routes.map((item) => (
					<CategoryBox
						key={item.label}
						label={item.label}
						icon={item.icon}
						href={item.href}
					/>
				))}
			</div>
		</Container>
	);
};

export default Categories;
