import { useSidebar } from "@/components/ui/sidebar";
import { useOrganizations } from "./use-organizations";
import { useEffect, useState } from "react";

export const useOrganizationsSwitcher = () => {
	const { isMobile } = useSidebar();
	const { organizations, isLoading } = useOrganizations();
	const [activeOrganization, setActiveOrganization] =
		useState<Organizations.Data | null>(null);

	useEffect(() => {
		if (!activeOrganization && organizations.length > 0) {
			setActiveOrganization(organizations[0]);
		}
	}, [organizations, activeOrganization]);

	return {
		isMobile,
		isLoading,
		activeOrganization,
		setActiveOrganization,
		organizations,
	};
};
