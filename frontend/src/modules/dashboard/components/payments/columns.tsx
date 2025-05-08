// src/modules/payments/components/columns.tsx

import { ColumnDef } from "@tanstack/react-table";
import { formatCurrency } from "@/lib/utils"; // função para "R$ 100,00"
import { Badge } from "@/components/ui/badge";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { VariantProps } from "class-variance-authority";
import { DeleteConfirmDialog } from "@/components/ui/delete-confirm-dialog";

type BadgeVariant = VariantProps<typeof Badge>["variant"];

const statusVariantMap: Record<Dashboard.Events.Data["status"], BadgeVariant> =
	{
		paid: "default",
		pending: "secondary",
		canceled: "destructive",
	};

export const columns: ColumnDef<Dashboard.Payments.Data>[] = [
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
	},
	{
		accessorKey: "amount",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Valor
					<ArrowUpDown className="ml-2 size-4" />
				</Button>
			);
		},
		cell: ({ row }) => formatCurrency(row.original.amount),
	},
	{
		accessorKey: "method",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === "asc")
					}
				>
					Método
					<ArrowUpDown className="ml-2 size-4" />
				</Button>
			);
		},
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
		cell: ({ row }) =>
			new Intl.DateTimeFormat("pt-BR", {
				dateStyle: "medium",
				timeStyle: "short",
			}).format(new Date(row.original.date)),
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
			const status = row.original.status;

			const variant = statusVariantMap[status];

			return <Badge variant={variant}>{status}</Badge>;
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const payment = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Ações</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() =>
								navigator.clipboard.writeText(payment.id)
							}
						>
							Copiar ID
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<DeleteConfirmDialog
								onConfirm={() =>
									console.log("Deletar evento", payment.id)
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
	},
];
