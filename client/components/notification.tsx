import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { clsx } from "clsx";

interface NotificationProps {
	className?: string;
	title: string;
	description: string;
	imgUrl: string;
}

const Notification = ({
	className,
	title,
	description,
	imgUrl,
}: NotificationProps) => {
	return (
		<div
			className={`${
				className || ""
			} flex items-center p-2 pr-4 bg-white backdrop-blur border border-slate-1/10 rounded-2xl gap-5`}
		>
			<Image
				src={imgUrl}
				width={62}
				height={62}
				alt="image"
				className="rounded-md h-12"
			/>

			<div className="flex-1">
				<h6 className="mb-1 font-medium text-xs ">{title}</h6>

				<div className="flex items-center  justify-between">
					<p className="text-zinc-400 text-[0.6rem]">{description}</p>
					<div className="ml-4 ">
						<ArrowRight className="w-5 h-5 border-2 rounded-full   " />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Notification;
