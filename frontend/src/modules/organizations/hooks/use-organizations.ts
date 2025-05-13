import { useQuery } from "@tanstack/react-query";
import { fetchOrganizations } from "../services/organizations";

export const useOrganizations = () => {
	const { data, isLoading, error } = useQuery<Organizations.Data[]>({
		queryKey: ["organizations"],
		queryFn: fetchOrganizations,
	});

	return { organizations: data ?? [], isLoading, error };
};
