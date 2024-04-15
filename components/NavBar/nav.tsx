import Link from "next/link";
import React from "react";
import Logo from "../icons/Logo";
import SearchBox from "./searchBox";

const NavBar = () => {
	return (
		<div className=" flex w-full bg-transparent  ">
			<header className="flex w-full justify-between   py-4 items-center">
				<Link
					href="/"
					className="flex items-center gap-2 text-sm font-semibold"
				>
					<Logo size={32} />
					RedCell Reserver
				</Link>
				<nav className="  text-sm ">
					<ul className="flex gap-8">
						<li>
							<Link href={"/"}>Donation</Link>
						</li>
						<li>
							<Link href={"/"}>DNA </Link>
						</li>
						<li>
							<Link href={"/"}>Appointment</Link>
						</li>
						<li>
							<Link className="hidden lg:flex" href={"/"}>
								FAQ
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default NavBar;
