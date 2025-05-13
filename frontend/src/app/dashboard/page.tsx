import { PageHeader } from "@/components/page-header";
import {
	DashboardChartSection,
	DashboardEventsTable,
	DashboardKpiGrid,
	DashboardPaymentsTable,
} from "@/modules/dashboard";

const DashboardPage = () => {
	return (
		<div className="grid h-full grid-cols-2 gap-4 lg:grid-cols-4">
			<PageHeader
				title="Resumo da Organização"
				description="Aqui você gerencia todas as suas organizações, eventos e jogadores."
			/>
			<DashboardKpiGrid />
			<DashboardChartSection />

			<DashboardEventsTable />
			<DashboardPaymentsTable />
		</div>
	);
};

export default DashboardPage;
