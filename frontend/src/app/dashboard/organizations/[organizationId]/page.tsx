import { PageHeader } from "@/components/page-header";
import { OrganizationsForm } from "@/modules/organizations";

interface OrganizationDetailProps {
	params: {
		organizationId: string;
	};
}

const OrganizationDetailPage = async (props: OrganizationDetailProps) => {
	const { organizationId } = await props.params;

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<PageHeader
					title={
						organizationId != "new"
							? `Organização ${organizationId}`
							: "Nova Organização"
					}
					description="Aqui você pode cadastrar ou editar uma organização, definindo seu nome, tipo e logotipo."
				/>
			</div>
			<OrganizationsForm organizationId={organizationId} />
		</div>
	);
};

export default OrganizationDetailPage;
