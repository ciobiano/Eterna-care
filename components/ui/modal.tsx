"use client ";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
	title: string;
	description: string;
	isOpen: boolean;
	children?: React.ReactNode;
	onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
	title,
	description,
	isOpen,
	onClose,
	children,
}) => {
	const onChange = (open: boolean) => {
		if (!open) {
			onClose();
		}
	};

	return (
		<Dialog onOpenChange={onChange} open={isOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
					<div>{children}</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
