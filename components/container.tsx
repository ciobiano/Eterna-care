import classNames from "classnames";

export const Container = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={classNames("mx-auto max-w-[1350px]", className)}>
			{children}
		</div>
	);
};
