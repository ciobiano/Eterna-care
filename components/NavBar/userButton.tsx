import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";
import LogoutButton from "./logoutButton";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const UserButton = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src={""} alt="user" />
					<AvatarFallback>
						<User />
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-40 cursor-pointer  font-medium pl-2 
             "
				align="end"
			>
				<Link href={"/settings"} className="flex gap-1 my-1 items-center m">
					<CgProfile size={15} />
					Profile
				</Link>
				<DropdownMenuSeparator />
				<LogoutButton>
					<div className="flex items-center gap-1 my-1">
						<AiOutlineLogout size={15} />
						Logout
					</div>
				</LogoutButton>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserButton;
