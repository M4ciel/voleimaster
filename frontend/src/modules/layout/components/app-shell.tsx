import { ReactNode } from "react";
import { SidebarProvider } from "../../../components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { AppToolbar } from "./app-toolbar";

type AppShellProps = {
	children: ReactNode;
};

export const AppShell = ({ children }: AppShellProps) => {
	return (
		<SidebarProvider>
			<div className="bg-muted flex min-h-screen w-full">
				<AppSidebar />
				<div className="flex flex-1 flex-col">
					<AppToolbar />
					<main className="flex-1 p-6">{children}</main>
				</div>
			</div>
		</SidebarProvider>
	);
};
