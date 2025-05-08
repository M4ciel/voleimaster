import {
	DashboardChartSection,
	DashboardEventsTable,
	DashboardKpiGrid,
	DashboardPaymentsTable,
} from "@/modules/dashboard";

const DashboardPage = () => {
	return (
		<div className="grid h-full grid-cols-2 gap-4 lg:grid-cols-4">
			<header className="col-span-full">
				<h2 className="text-primary text-4xl font-bold">
					Resumo da Organização
				</h2>
				<p className="text-foreground text-sm">
					Aqui você gerencia todas as suas organizações, eventos e
					jogadores.
				</p>
			</header>
			<DashboardKpiGrid />
			<DashboardChartSection />

			<DashboardEventsTable />
			<DashboardPaymentsTable />
		</div>
	);
};

export default DashboardPage;
