import { Line, LineChart, XAxis, YAxis } from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export const CustomLineChart = ({
	config,
	data,
	xKey,
	datasets,
	height,
}: Chart.Props) => {
	return (
		<ChartContainer config={config} style={{ height }} className="w-full">
			<LineChart data={data}>
				<XAxis dataKey={xKey} stroke="#a1a1aa" />
				<YAxis stroke="#a1a1aa" />
				<ChartTooltip content={<ChartTooltipContent />} />
				{datasets.map((ds, i) => (
					<Line
						key={ds.dataKey}
						type="monotone"
						dataKey={ds.dataKey}
						stroke={ds.color ?? `var(--chart-${i + 1})`}
						strokeWidth={2}
						name={ds.label}
					/>
				))}
			</LineChart>
		</ChartContainer>
	);
};
