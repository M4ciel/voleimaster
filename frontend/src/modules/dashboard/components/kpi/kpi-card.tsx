import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../../../../components/ui/card";

type KpiCardProps = {
	title: string;
	value: string | number;
};

export const DashboardKpiCard = ({ title, value }: KpiCardProps) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-zinc-600 dark:text-zinc-300">
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<p className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
					{value}
				</p>
			</CardContent>
		</Card>
	);
};
