export async function fetchOrganizations(): Promise<Organizations.Data[]> {
	return [
		{
			id: "org-001",
			name: "White Dragons ForFun",
			logo: "/team/forfun.png",
			plan: "free",
			type: "for_fun",
			totalMembers: 12,
			eventsCount: 4,
			createdAt: new Date("2024-05-01").toISOString(),
			status: "active",
			cashBalance: -60,
		},
		{
			id: "org-002",
			name: "White Dragons Treinos",
			logo: "/team/treino.png",
			plan: "pro",
			type: "training",
			totalMembers: 30,
			eventsCount: 7,
			createdAt: new Date("2024-03-12").toISOString(),
			status: "inactive",
			cashBalance: 480,
		},
	];
}
