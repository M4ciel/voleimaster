"use client";

import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useOrganizationsSwitcher } from "../hooks/use-organizations-switcher";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export const OrganizationsSwitcher = () => {
	const {
		isMobile,
		isLoading,
		activeOrganization,
		setActiveOrganization,
		organizations,
	} = useOrganizationsSwitcher();

	if (isLoading)
		return (
			<SidebarMenu>
				<SidebarMenuItem>
					<Skeleton className="h-10 w-full rounded-md" />
				</SidebarMenuItem>
			</SidebarMenu>
		);

	if (organizations.length === 0)
		return (
			<Button variant="outline" className="w-full">
				Criar organização
			</Button>
		);

	if (!activeOrganization) return null;

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<Avatar>
								<AvatarImage
									src={activeOrganization.logo}
									alt={activeOrganization.name}
								/>
								<AvatarFallback>
									{activeOrganization.name[0]}
								</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-semibold">
									{activeOrganization.name}
								</span>
								<span className="truncate text-xs">
									{activeOrganization.plan}
								</span>
							</div>
							<ChevronsUpDown className="ml-auto" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
						align="start"
						side={isMobile ? "bottom" : "right"}
						sideOffset={4}
					>
						<DropdownMenuLabel className="text-muted-foreground text-xs">
							Organizações
						</DropdownMenuLabel>
						{organizations.map((organization, index) => (
							<DropdownMenuItem
								key={organization.name}
								onClick={() =>
									setActiveOrganization(organization)
								}
								className="gap-2 p-2"
							>
								<Avatar>
									<AvatarImage
										src={organization.logo}
										alt={organization.name}
									/>
									<AvatarFallback>
										{organization.name[0]}
									</AvatarFallback>
								</Avatar>
								{organization.name}
								<DropdownMenuShortcut>
									⌘{index + 1}
								</DropdownMenuShortcut>
							</DropdownMenuItem>
						))}
						<DropdownMenuSeparator />
						<DropdownMenuItem className="gap-2 p-2">
							<div className="bg-background flex size-6 items-center justify-center rounded-md border">
								<Plus className="size-4" />
							</div>
							<Link
								href="/dashboard/organizations/new"
								className="text-muted-foreground font-medium"
							>
								Adicionar organizações
							</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};
