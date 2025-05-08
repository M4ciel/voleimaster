"use client";

import { Chart } from "../../../components/charts";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../../../components/ui/card";
import { ChartSelect } from "../../../components/charts/components/select";
import { useChartSectionHook } from "../hooks/use-chart-section";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export const DashboardChartSection = () => {
	const {
		chartData,
		chartType,
		setChartType,
		dataKey,
		setDataKey,
		labelMap,
	} = useChartSectionHook();

	if (!chartData?.length) {
		return <p className="text-sm text-zinc-400">Nenhum dado disponível.</p>;
	}

	return (
		<Card className="col-span-full h-full">
			<CardHeader className="flex items-center justify-between">
				<CardTitle>Evolução Mensal: {labelMap[dataKey]}</CardTitle>
				<div className="flex gap-2">
					<ChartSelect
						setChartType={setChartType}
						defaultValue="bar"
					/>
					<Select
						value={dataKey}
						onValueChange={(e: Dashboard.Datakey) => setDataKey(e)}
					>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Informacao" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="events">Eventos</SelectItem>
							<SelectItem value="players">Jogadores</SelectItem>
							<SelectItem value="revenue">Receita</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</CardHeader>
			<CardContent className="min-h-[100px]">
				<Chart
					type={chartType}
					data={chartData}
					height={200}
					datasets={[
						{
							dataKey,
							label: labelMap[dataKey],
							color: "var(--chart-1)",
						},
					]}
					config={{
						valor: { label: "Valor", color: "#00ff00" },
					}}
				/>
			</CardContent>
		</Card>
	);
};
