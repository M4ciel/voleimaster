"use client";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
} from "../../../components/ui/sidebar";
import { TeamSwitcher } from "../../team/components/team-switcher";
import { useSidebarHook } from "../hooks/use-sidebar";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";

export const AppSidebar = ({
	...props
}: React.ComponentProps<typeof Sidebar>) => {
	const { navFinanceiroItems, navMainItems, navSecondaryItems, teams } =
		useSidebarHook();
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={teams} />
			</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Geral</SidebarGroupLabel>
					<SidebarGroupContent>
						<NavMain items={navMainItems} />
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarGroup>
					<SidebarGroupLabel>Financeiro</SidebarGroupLabel>
					<SidebarGroupContent>
						<NavMain items={navFinanceiroItems} />
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarGroup className="mt-auto">
					<SidebarGroupLabel>Suporte</SidebarGroupLabel>
					<SidebarGroupContent>
						<NavSecondary items={navSecondaryItems} />
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
};
