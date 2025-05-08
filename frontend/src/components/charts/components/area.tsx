import { Area, AreaChart, XAxis, YAxis } from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export const CustomAreaChart = ({
	config,
	data,
	xKey,
	datasets,
	height,
}: Chart.Props) => {
	return (
		<ChartContainer config={config} style={{ height }} className="w-full">
			<AreaChart data={data}>
				<XAxis dataKey={xKey} stroke="#a1a1aa" />
				<YAxis stroke="#a1a1aa" />
				<ChartTooltip content={<ChartTooltipContent />} />
				{datasets.map((ds, i) => (
					<Area
						key={ds.dataKey}
						type="monotone"
						dataKey={ds.dataKey}
						stroke={ds.color ?? `var(--chart-${i + 1})`}
						fill={ds.color ?? `var(--chart-${i + 1})`}
						name={ds.label}
					/>
				))}
			</AreaChart>
		</ChartContainer>
	);
};
