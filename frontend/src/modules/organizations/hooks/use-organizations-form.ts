import { useForm } from "react-hook-form";
import { OrganizationFormValues, OrganizationSchema } from "../schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useOrganizationsForm = () => {
	const form = useForm<OrganizationFormValues>({
		resolver: zodResolver(OrganizationSchema),
	});

	const mutation = useMutation({
		mutationFn: async (values: OrganizationFormValues) => {
			console.log(values);
		},
		onSuccess: () => {
			toast("Organizacao criada");
		},
		onError: (error: { message: string }) => {
			toast("Erro ao salvar organizacao", {
				description: error.message,
			});
		},
	});

	const onSubmit = async (values: OrganizationFormValues) => {
		mutation.mutate(values);
	};
	return { form, onSubmit };
};
