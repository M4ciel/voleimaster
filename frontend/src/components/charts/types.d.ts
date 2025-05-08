declare namespace Chart {
	type Type = "bar" | "line" | "area" | "pie" | "radar" | "radialBar";

	interface Dataset {
		dataKey: string;
		label?: string;
		color?: string;
	}

	interface Config {
		[key: string]: {
			label?: React.ReactNode;
			icon?: React.ComponentType;
		} & (
			| { color?: string; theme?: never }
			| { color?: never; theme: Record<"light" | "dark", string> }
		);
	}

	interface Props {
		type: Type;
		data: unknown[];
		xKey?: string;
		datasets: Dataset[];
		config: Config;
		height?: number;
		innerRadius?: number;
		outerRadius?: number;
	}
}
