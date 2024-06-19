"use client";

interface HeadingProps {
	title: string;
	spanText?: string;
	subtitle?: string;
	description?: string;
	center?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
	title,
	subtitle,
	center,
	description,
	spanText,
}) => {
	return (
		<div className={center ? "text-center" : "text-start"}>
			<div className="flex items-center mb-4">
				<div className="flex w-20 mr-4">
					<div className="w-1/3 border-red-500 border-t-2" />
					<div className="w-3/4 border-gray-300 border-t-2" />
				</div>
				<h1 className="text-sm ">{subtitle}</h1>
			</div>
			<div className="text-5xl leading-tight text-primary font-normal max-w-[600px]">
				{title} <br />
				<span className="text-5xl bg-gradient-to-r from-[#D51D12] to-[#EF4A32]  text-transparent bg-clip-text font-medium">
					{spanText}
				</span>
			</div>
			<div className="font-medium text-neutral-500 text-xl mt-2">
				{description}
			</div>
		</div>
	);
};

export const SecondHeading: React.FC<HeadingProps> = ({
	title,
	center,
	description,
}) => {
	return (
		<div className={center ? "text-center" : "text-start"}>
			<div className="text-lg leading-tight text-primary font-normal max-w-[600px]">
				{title}
			</div>
			<div className="font-medium text-neutral-500 text-sm mt-2">
				{description}
			</div>
		</div>
	);
};
