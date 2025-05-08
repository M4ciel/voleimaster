"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEventsTableHook } from "../../hooks/use-events-table";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export const DashboardEventsTable = () => {
	const { events } = useEventsTableHook();

	return (
		<Card className="col-span-2 h-full">
			<CardHeader>
				<CardTitle className="text-base font-semibold">
					Eventos
				</CardTitle>
			</CardHeader>
			<CardContent>
				<DataTable columns={columns} data={events} />
			</CardContent>
		</Card>
	);
};
