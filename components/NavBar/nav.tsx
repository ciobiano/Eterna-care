import Link from "next/link";
import React from "react";
import Logo from "../Logo";
import MainNav from "./mainNav";

const NavBar = () => {
	return (
		<div className=" flex w-full bg-transparent  ">
			<header className="flex w-full justify-between   py-4 items-center">
				<Link
					href="/"
					className="flex items-center gap-2 text-sm font-semibold"
				>
					<Logo size={32} />
					Eterna Care Medical Institute
				</Link>
				<MainNav />
			</header>
		</div>
	);
};

export default NavBar;
