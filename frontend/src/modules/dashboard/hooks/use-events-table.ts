import { useState } from "react";

export const useEventsTableHook = () => {
	const [events, setEvents] = useState<Dashboard.Events.Data[]>([
		{
			id: "evt1",
			name: "Treino semanal",
			date: "2025-05-09T21:00:00",
			type: "Treino",
			participants: 14,
			status: "ativo",
		},
		{
			id: "evt2",
			name: "Jogo contra Time A",
			date: "2025-05-16T18:00:00",
			type: "Jogo",
			participants: 12,
			status: "encerrado",
		},
		{
			id: "evt3",
			name: "Torneio Regional Amador",
			date: "2025-05-23T10:00:00",
			type: "Torneio",
			participants: 18,
			status: "cancelado",
		},
	]);

	return { events };
};
