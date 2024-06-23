import React from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const links: { title: string; href: string; description: string }[] = [
	{
		title: "DNA",
		href: "/dna",
		description: "Learn more about DNA and how it works.",
	},
	{
		title: "Check In",
		href: "/check-in",
		description: "Check in for your appointment.",
	},
];

const MainNav = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Donation</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<ListItem title="Donate Now" href="/register/donor">
								Your donation will help us to continue our work.
							</ListItem>
							<ListItem title="Fundraising" href="/fundraising">
								Start a fundraiser to help us reach our goal.
							</ListItem>
							<ListItem title="Volunteer" href="/register/donor">
								Join our team and help us make a difference.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>DNA center</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] rounded-2xl ">
							{links.map((links) => (
								<ListItem
									key={links.title}
									title={links.title}
									href={links.href}
								>
									{links.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>

				<NavigationMenuItem>
					<Link href="/login" legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Login
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default MainNav;

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
