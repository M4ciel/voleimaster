import { useState } from "react";

export const useKpiHook = () => {
	const [kpis, setKpis] = useState([
		{ id: 1, title: "Organizações", value: 2 },
		{ id: 2, title: "Eventos ativos", value: 5 },
		{ id: 3, title: "Jogadores", value: 34 },
		{ id: 4, title: "Receita do mês", value: "R$ 680,00" },
	]);

	return { kpis };
};
