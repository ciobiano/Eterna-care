"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { IconType } from "react-icons/lib";

interface CategoryBoxProps {
	icon: IconType;
	label: string;
	href: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
	icon: Icon,
	label,
	href,
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<div
			className={`
        flex 
        flex-col 
        items-center 
        justify-center 
        ml-10
        p-3
		space-x-4
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer
        ${
					isActive
						? "border-b-neutral-800 text-neutral-800 w-20"
						: "border-transparent text-neutral-500 w-20"
				}
      `}
		>
			<Link
				href={href}
				className="flex gap-1 text-xs items-center  justify-center"
			>
				<Icon size={15} />
				{label}
			</Link>
		</div>
	);
};

export default CategoryBox;
