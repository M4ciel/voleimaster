import { AppShell } from "@/modules/layout";
import { ReactNode } from "react";

type DashboardLayoutProps = {
	children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	return <AppShell>{children}</AppShell>;
};

export default DashboardLayout;
