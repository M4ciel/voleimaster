import { useState } from "react";

export const usePaymentsTableHook = () => {
	const [payments, setPayments] = useState<Dashboard.Payments.Data[]>([
		{
			id: "pay1",
			name: "Caio Maciel",
			amount: 120.0,
			method: "Pix",
			status: "pago",
			date: "2025-05-08T21:00:00",
		},
		{
			id: "pay2",
			name: "Gustavo Moncayo",
			amount: 75.5,
			method: "Cartão",
			status: "pendente",
			date: "2025-05-09T14:30:00",
		},
	]);

	return { payments };
};
