declare namespace Organizations {
	type Type = "for_fun" | "training" | "championship";

	type Status = "active" | "inactive";

	type Plan = "free" | "pro";

	interface Data {
		id: string;
		name: string;
		logo?: string;
		plan: Plan;
		type: Type;
		totalMembers: number;
		eventsCount: number;
		createdAt: string; // ISO string
		status: Status;
		cashBalance: number;
	}
}
