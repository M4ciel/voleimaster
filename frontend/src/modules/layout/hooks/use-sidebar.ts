import {
	CalendarIcon,
	DollarSignIcon,
	HelpCircleIcon,
	LayoutDashboardIcon,
	SettingsIcon,
	UsersIcon,
} from "lucide-react";

export const useSidebarHook = () => {
	const menu = {
		navMainItems: [
			{
				title: "Dashboard",
				url: "/dashboard",
				icon: LayoutDashboardIcon,
			},
			{
				title: "Organizações",
				url: "/dashboard/organizations",
				icon: UsersIcon,
			},
			{
				title: "Eventos",
				url: "/dashboard/events",
				icon: CalendarIcon,
			},
		],
		navFinanceiroItems: [
			{
				title: "Pagamentos",
				url: "/dashboard/payments",
				icon: DollarSignIcon,
			},
		],
		navSecondaryItems: [
			{
				title: "Settings",
				url: "/dashboard/settings",
				icon: SettingsIcon,
			},
			{
				title: "Get Help",
				url: "/help",
				icon: HelpCircleIcon,
			},
		],
	};

	return {
		navMainItems: menu.navMainItems,
		navFinanceiroItems: menu.navFinanceiroItems,
		navSecondaryItems: menu.navSecondaryItems,
	};
};
