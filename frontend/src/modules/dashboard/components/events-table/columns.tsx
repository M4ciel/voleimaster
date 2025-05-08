"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DeleteConfirmDialog } from "@/components/ui/delete-confirm-dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { VariantProps } from "class-variance-authority";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

type BadgeVariant = VariantProps<typeof Badge>["variant"];

const statusVariantMap: Record<Dashboard.Events.Data["status"], BadgeVariant> =
	{
		ativo: "default",
		encerrado: "secondary",
		cancelado: "destructive",
	};

export const columns: ColumnDef<Dashboard.Events.Data>[] = [
	{
		accessorKey: "name",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Nome
					<ArrowUpDown className="ml-2 size-4" />
				</Button>
			);
		},
		filterFn: "includesString",
	},
	{
		accessorKey: "date",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Data
					<ArrowUpDown className="ml-2 size-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const value = row.getValue<string>("date");
			const date = new Date(value);
			return format(date, "dd 'de' MMMM 'às' HH:mm", { locale: ptBR });
		},
	},
	{
		accessorKey: "type",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Tipo
					<ArrowUpDown className="ml-2 size-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "participants",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Participantes
					<ArrowUpDown className="ml-2 size-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "status",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Status
					<ArrowUpDown className="ml-2 size-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const status =
				row.getValue<Dashboard.Events.Data["status"]>("status");
			const variant = statusVariantMap[status];

			return (
				<Badge variant={variant} className="capitalize">
					{status}
				</Badge>
			);
		},
	},
	{
		id: "actions",
		header: "", // ❗ não mostra título na tabela
		cell: ({ row }) => {
			const event = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Abrir opções</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Ações</DropdownMenuLabel>

						<DropdownMenuItem
							onClick={() =>
								navigator.clipboard.writeText(event.id)
							}
						>
							Copiar ID do Evento
						</DropdownMenuItem>

						<DropdownMenuSeparator />

						<DropdownMenuItem
							onClick={() => console.log("Editar", event)}
						>
							Editar Evento
						</DropdownMenuItem>

						<DropdownMenuItem asChild>
							<DeleteConfirmDialog
								onConfirm={() =>
									console.log("Deletar evento", event.id)
								}
								trigger={
									<Button
										variant="ghost"
										className="text-destructive w-full justify-start px-2"
									>
										Excluir
									</Button>
								}
							/>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
		enableSorting: false,
		enableHiding: false,
	},
];
