import { useState } from "react";

export const useChartSectionHook = () => {
	const [chartType, setChartType] = useState<Chart.Type>("bar");
	const [dataKey, setDataKey] = useState<Dashboard.Datakey>("events");
	const [chartData, setChartData] = useState([
		{ month: "Jan", events: 3, players: 12, revenue: 450 },
		{ month: "Feb", events: 5, players: 18, revenue: 680 },
		{ month: "Mar", events: 4, players: 14, revenue: 520 },
		{ month: "Apr", events: 6, players: 22, revenue: 880 },
		{ month: "May", events: 2, players: 10, revenue: 300 },
		{ month: "Jun", events: 3, players: 15, revenue: 490 },
	]);

	const labelMap = {
		events: "Eventos Criados",
		players: "Jogadores Ativos",
		revenue: "Receita (R$)",
	};

	return {
		chartData,
		chartType,
		setChartType,
		dataKey,
		setDataKey,
		labelMap,
	};
};
