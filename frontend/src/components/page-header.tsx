interface PageHeaderProps {
	title: string;
	description?: string;
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
	return (
		<header className="col-span-full">
			<h2 className="text-primary text-4xl font-bold">{title}</h2>
			{description && (
				<p className="text-foreground text-sm">{description}</p>
			)}
		</header>
	);
};
