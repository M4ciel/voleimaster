import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../ui/select";

const chartOptions: { value: Chart.Type; label: string }[] = [
	{ value: "bar", label: "Barra" },
	{ value: "line", label: "Linha" },
	{ value: "area", label: "Área" },
	{ value: "pie", label: "Pizza" },
	{ value: "radar", label: "Radar" },
	{ value: "radialBar", label: "Radial" },
];

type ChartSelect = {
	setChartType: (type: Chart.Type) => void;
	defaultValue?: Chart.Type;
};

export const ChartSelect = ({
	setChartType,
	defaultValue = "bar",
}: ChartSelect) => {
	return (
		<Select
			defaultValue={defaultValue}
			onValueChange={(e: Chart.Type) => setChartType(e)}
		>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Tipo de gráfico" />
			</SelectTrigger>
			<SelectContent>
				{chartOptions.map((option) => (
					<SelectItem key={option.value} value={option.value}>
						{option.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};
