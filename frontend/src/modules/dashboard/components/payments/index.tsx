"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { usePaymentsTableHook } from "../../hooks/use-payments-table";

export const DashboardPaymentsTable = () => {
	const { payments } = usePaymentsTableHook();

	return (
		<Card className="col-span-2 h-full">
			<CardHeader>
				<CardTitle className="text-base font-semibold">
					Pagamentos
				</CardTitle>
			</CardHeader>
			<CardContent>
				<DataTable columns={columns} data={payments} />
			</CardContent>
		</Card>
	);
};
