"use client";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useOrganizationsForm } from "../../hooks/use-organizations-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { LogoDropzone } from "./logo-dropzone";

interface OrganizationsFormProps {
	organizationId: string;
}

export const OrganizationsForm = ({
	organizationId,
}: OrganizationsFormProps) => {
	const { form, onSubmit } = useOrganizationsForm();
	return (
		<Card>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="grid grid-cols-1 gap-4 space-y-8 md:grid-cols-2"
					>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome</FormLabel>
									<FormControl>
										<Input
											placeholder="Nome da Organizacao"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="type"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tipo</FormLabel>
									<FormControl>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Tipo de Organizacao" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="for_fun">
													For Fun
												</SelectItem>
												<SelectItem value="training">
													Treino
												</SelectItem>
												<SelectItem value="championship">
													Campeonato
												</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="logo"
							render={({ field }) => (
								<FormItem className="col-span-full">
									<FormLabel>Logo</FormLabel>
									<LogoDropzone
										value={field.value}
										onChange={field.onChange}
									/>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="col-span-full">
							{organizationId != "new" ? "Editar" : "Cadastrar"}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};
