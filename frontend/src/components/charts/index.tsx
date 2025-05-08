"use client";

import { CustomBarChart } from "./components/bar";
import { CustomLineChart } from "./components/line";
import { CustomAreaChart } from "./components/area";
import { CustomPieChart } from "./components/pie";
import { CustomRadarChart } from "./components/radar";
import { CustomRadialBarChart } from "./components/radial";
import { useEffect, useState } from "react";

export const Chart = ({
	type,
	data,
	xKey,
	datasets,
	config,
	height = 100,
	innerRadius,
	outerRadius,
}: Chart.Props) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const renderByType = () => {
		switch (type) {
			case "bar":
				return (
					<CustomBarChart
						config={config}
						data={data}
						xKey={xKey}
						datasets={datasets}
						type={type}
						height={height}
					/>
				);
			case "line":
				return (
					<CustomLineChart
						config={config}
						data={data}
						xKey={xKey}
						datasets={datasets}
						type={type}
						height={height}
					/>
				);
			case "area":
				return (
					<CustomAreaChart
						config={config}
						data={data}
						xKey={xKey}
						datasets={datasets}
						type={type}
						height={height}
					/>
				);
			case "pie":
				return (
					<CustomPieChart
						config={config}
						data={data}
						xKey={xKey}
						datasets={datasets}
						innerRadius={innerRadius}
						outerRadius={outerRadius}
						type={type}
						height={height}
					/>
				);
			case "radar":
				return (
					<CustomRadarChart
						config={config}
						data={data}
						xKey={xKey}
						datasets={datasets}
						type={type}
						height={height}
					/>
				);
			case "radialBar":
				return (
					<CustomRadialBarChart
						config={config}
						data={data}
						xKey={xKey}
						datasets={datasets}
						innerRadius={innerRadius}
						outerRadius={outerRadius}
						type={type}
						height={height}
					/>
				);
			default:
				return (
					<p className="text-sm text-zinc-400">
						Tipo de gráfico inválido.
					</p>
				);
		}
	};
	return (
		<div className="rounded-lg bg-transparent p-4">{renderByType()}</div>
	);
};
