"use client";

import { useKpiHook } from "../../hooks/use-kpi";
import { DashboardKpiCard } from "./kpi-card";

export const DashboardKpiGrid = () => {
	const { kpis } = useKpiHook();

	return (
		<div className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{kpis.map(({ id, title, value }) => (
				<DashboardKpiCard key={id} title={title} value={value} />
			))}
		</div>
	);
};
