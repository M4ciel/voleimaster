"use client";

import { useDropzone } from "react-dropzone";
import { FormControl } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoDropzoneProps {
	value?: string;
	onChange: (value: string) => void;
}

export const LogoDropzone = ({ value, onChange }: LogoDropzoneProps) => {
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: {
			"image/*": [],
		},
		multiple: false,
		onDrop: async (acceptedFiles) => {
			const file = acceptedFiles[0];
			if (!file) return;

			// Simulação de upload: convertendo para base64
			const reader = new FileReader();
			reader.onload = () => {
				if (reader.result) {
					onChange(reader.result.toString());
				}
			};
			reader.readAsDataURL(file);
		},
	});

	return (
		<FormControl>
			<div
				{...getRootProps()}
				className={cn(
					"flex h-36 items-center justify-center rounded-md border border-dashed transition-all",
					isDragActive ? "border-primary bg-muted" : "border-border",
				)}
			>
				<input {...getInputProps()} />
				{value ? (
					<Image
						src={value}
						alt="Logo"
						width={200}
						height={200}
						className="h-full object-contain"
					/>
				) : (
					<p className="text-muted-foreground text-sm">
						Arraste uma imagem ou clique para selecionar
					</p>
				)}
			</div>
		</FormControl>
	);
};
