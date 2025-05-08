import { RadialBar, RadialBarChart } from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export const CustomRadialBarChart = ({
	config,
	data,
	datasets,
	height,
	innerRadius,
	outerRadius,
}: Chart.Props) => {
	return (
		<ChartContainer config={config} style={{ height }} className="w-full">
			<RadialBarChart
				innerRadius={innerRadius ?? 60}
				outerRadius={outerRadius ?? 100}
				barSize={15}
				data={data}
			>
				<ChartTooltip content={<ChartTooltipContent />} />
				{datasets.map((ds, i) => (
					<RadialBar
						key={ds.dataKey}
						background
						dataKey={ds.dataKey}
						name={ds.label}
						fill={ds.color ?? `var(--chart-${i + 1})`}
					/>
				))}
			</RadialBarChart>
		</ChartContainer>
	);
};
