import { Bar, BarChart, XAxis, YAxis } from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export const CustomBarChart = ({
	config,
	data,
	xKey,
	datasets,
	height,
}: Chart.Props) => {
	return (
		<ChartContainer config={config} style={{ height }} className="w-full">
			<BarChart data={data}>
				<XAxis dataKey={xKey} stroke="#a1a1aa" />
				<YAxis stroke="#a1a1aa" />
				<ChartTooltip content={<ChartTooltipContent />} />
				{datasets.map((ds, i) => (
					<Bar
						key={ds.dataKey}
						dataKey={ds.dataKey}
						fill={ds.color ?? `var(--chart-${i + 1})`}
						name={ds.label}
					/>
				))}
			</BarChart>
		</ChartContainer>
	);
};
