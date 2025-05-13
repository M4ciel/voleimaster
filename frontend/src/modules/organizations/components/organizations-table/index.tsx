"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useOrganizations } from "../../hooks/use-organizations";

export const OrganizationsTable = () => {
	const { organizations } = useOrganizations();

	return (
		<Card className="col-span-2 h-full">
			<CardHeader>
				<CardTitle className="text-base font-semibold">
					Minhas Organizações
				</CardTitle>
			</CardHeader>
			<CardContent>
				<DataTable columns={columns} data={organizations} />
			</CardContent>
		</Card>
	);
};
