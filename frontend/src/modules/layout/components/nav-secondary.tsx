"use client";

import {
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Se estiver usando classnames utilitário

type NavSecondaryProps = {
	items: {
		title: string;
		url: string;
		icon: React.ElementType;
	}[];
	className?: string;
};

export const NavSecondary = ({ items, className }: NavSecondaryProps) => {
	return (
		<SidebarMenu className={cn("pt-4", className)}>
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
