"use client";

import { ReactNode } from "react";
import { SidebarProvider } from "../../../components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { AppToolbar } from "./app-toolbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";

type AppShellProps = {
	children: ReactNode;
};

export const queryClient = new QueryClient();

export const AppShell = ({ children }: AppShellProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<SidebarProvider>
				<div className="bg-muted flex min-h-screen w-full">
					<AppSidebar />
					<div className="flex flex-1 flex-col">
						<AppToolbar />
						<main className="flex-1 p-6">{children}</main>
					</div>
				</div>
				<Toaster />
			</SidebarProvider>
		</QueryClientProvider>
	);
};
