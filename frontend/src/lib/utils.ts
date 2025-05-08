import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const formatCurrency = (value: number) => {
	return value.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
};
