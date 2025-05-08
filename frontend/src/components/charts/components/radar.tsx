import {
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
} from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export const CustomRadarChart = ({
	config,
	data,
	xKey,
	datasets,
	height,
}: Chart.Props) => {
	return (
		<ChartContainer config={config} style={{ height }} className="w-full">
			<RadarChart data={data}>
				<PolarGrid />
				<PolarAngleAxis dataKey={xKey} />
				<PolarRadiusAxis />
				<ChartTooltip content={<ChartTooltipContent />} />
				{datasets.map((ds, i) => (
					<Radar
						key={ds.dataKey}
						name={ds.label}
						dataKey={ds.dataKey}
						stroke={ds.color ?? `var(--chart-${i + 1})`}
						fill={ds.color ?? `var(--chart-${i + 1})`}
						fillOpacity={0.6}
					/>
				))}
			</RadarChart>
		</ChartContainer>
	);
};
