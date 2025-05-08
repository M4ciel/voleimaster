import {
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";

type NavMainProps = {
	items: {
		title: string;
		url: string;
		icon: React.ElementType;
	}[];
};

export const NavMain = ({ items }: NavMainProps) => {
	return (
		<SidebarMenu>
			{items.map((item) => (
				<SidebarMenuItem key={item.title}>
					<SidebarMenuButton asChild>
						<Link href={item.url}>
							<item.icon className="mr-2 size-4" />
							{item.title}
						</Link>
					</SidebarMenuButton>
				</SidebarMenuItem>
			))}
		</SidebarMenu>
	);
};
