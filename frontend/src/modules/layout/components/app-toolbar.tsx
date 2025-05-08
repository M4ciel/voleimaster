import { Bell } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { SidebarTrigger } from "../../../components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import { NavUser } from "./nav-user";

export const AppToolbar = () => {
	return (
		<header className="bg-muted flex h-16 items-center justify-between border-b px-6">
			<div className="flex gap-4">
				<SidebarTrigger variant="ghost" size="icon" />
				<h1 className="text-primary text-lg font-semibold">
					Painel Administrativo
				</h1>
			</div>

			<div className="flex items-center gap-4">
				<ModeToggle />
				<Button variant="ghost" size="icon">
					<Bell className="size-5" />
				</Button>
				<NavUser />
			</div>
		</header>
	);
};
