"use client";

import { useEffect, useState } from "react";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";

interface AlertModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	loading: boolean;
}
export const AlertModal: React.FC<AlertModalProps> = ({
	isOpen,
	onClose,
	onConfirm,
	loading,
}) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<Modal
			title="Are you sure ?"
			description="This action cannot be undone."
			isOpen={isOpen}
			onClose={onClose}
		>
			<div className="flex space-x-2 items-center justify-end pt-6 w-full ">
				<Button disabled={loading} variant="outline" onClick={onClose}>
					Cancel
				</Button>
				<Button disabled={loading} variant="destructive" onClick={onConfirm}>
					Confirm
				</Button>
			</div>
		</Modal>
	);
};
