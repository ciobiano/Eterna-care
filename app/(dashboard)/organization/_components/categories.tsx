"use client";

import CategoryBox from "@/components/categoryBox";
import { Container } from "@/components/container";
import { RxDashboard, RxPerson } from "react-icons/rx";
import {MdOutlineInventory} from "react-icons/md";

const Categories = () => {
	const routes = [
		{
			icon: RxDashboard,
			label: "Dashboard",
			href: "/organization",
		},
		{
			icon: MdOutlineInventory,
			label: "Inventory",
			href: "/organization/inventory",
		},
		{
			icon: RxPerson,
			label: "Profile",
			href: "/organization/profile",
		},
		
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
