import { Cell, Pie, PieChart } from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export const CustomPieChart = ({
	config,
	data,
	xKey,
	datasets,
	height,
	innerRadius,
	outerRadius,
}: Chart.Props) => {
	return (
		<ChartContainer config={config} style={{ height }} className="w-full">
			<PieChart>
				<ChartTooltip content={<ChartTooltipContent />} />
				<Pie
					data={data}
					dataKey={datasets[0].dataKey}
					nameKey={xKey}
					cx="50%"
					cy="50%"
					outerRadius={outerRadius ?? 80}
					innerRadius={innerRadius ?? 40}
					label
				>
					{data.map((_, i) => (
						<Cell
							key={`cell-${i}`}
							fill={datasets[i]?.color ?? `var(--chart-${i + 1})`}
						/>
					))}
				</Pie>
			</PieChart>
		</ChartContainer>
	);
};
