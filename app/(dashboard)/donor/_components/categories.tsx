"use client";

import CategoryBox from "@/components/categoryBox";
import { Container } from "@/components/container";
import { RxCalendar, RxDashboard, RxPerson } from "react-icons/rx";

const Categories = () => {
	const routes = [
		{
			icon: RxDashboard,
			label: "Dashboard",
			href: "/donor",
		},
		{
			icon: RxCalendar,
			label: "Appointments",
			href: "/donor/appointment",
		},
		{
			icon: RxPerson,
			label: "Profile",
			href: "/donor/profile",
		},
		{
			icon: RxPerson,
			label: "Logout",
			href: "/logout"

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
