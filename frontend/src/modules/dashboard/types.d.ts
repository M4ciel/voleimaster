declare namespace Dashboard {
	type Datakey = "events" | "players" | "revenue";

	namespace Events {
		type Status = "active" | "closed" | "canceled";
		type Type = "Treino" | "Jogo" | "Torneio";

		type Data = {
			id: string;
			name: string;
			date: string;
			type: Type;
			participants: number;
			status: EventStatus;
		};
	}

	namespace Payments {
		type Status = "pending" | "paid" | "canceled";

		interface Data {
			id: string;
			name: string;
			amount: number;
			method: string;
			status: PaymentStatus;
			date: string; // ISO string
		}
	}
}
