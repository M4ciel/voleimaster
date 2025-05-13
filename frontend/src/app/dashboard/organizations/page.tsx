import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { OrganizationsTable } from "@/modules/organizations";
import Link from "next/link";

const OrganizationsPage = () => {
	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<PageHeader
					title="Organizações"
					description="Gerencie suas organizações e seus membros."
				/>
				<Link href="organizations/new">
					<Button variant="default" size="sm">
						Nova organização
					</Button>
				</Link>
			</div>
			<OrganizationsTable />
		</div>
	);
};

export default OrganizationsPage;
