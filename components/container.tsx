import classNames from "classnames";

export const Container = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={classNames("mx-auto w-full px-8", className)}>
			{children}
		</div>
	);
};
