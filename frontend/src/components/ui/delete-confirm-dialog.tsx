"use client";

import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./dialog";
import { Input } from "./input";
import { Button } from "./button";

interface DeleteConfirmDialogProps {
	trigger: React.ReactNode;
	title?: string;
	description?: string;
	confirmLabel?: string;
	onConfirm: () => void;
	requiredText?: string;
}

export const DeleteConfirmDialog = ({
	trigger,
	title = "Confirmar exclusão",
	description = "Essa ação é irreversível. Deseja continuar?",
	confirmLabel = "Excluir",
	requiredText = "DELETAR",
	onConfirm,
}: DeleteConfirmDialogProps) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");

	const handleConfirm = () => {
		onConfirm();
		setOpen(false);
		setValue("");
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				<div className="space-y-2">
					<p className="text-muted-foreground text-sm">
						Digite <strong>{requiredText}</strong> para confirmar:
					</p>
					<Input
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder={requiredText}
					/>
				</div>
				<DialogFooter>
					<Button
						variant="destructive"
						disabled={value !== requiredText}
						onClick={handleConfirm}
					>
						{confirmLabel}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
