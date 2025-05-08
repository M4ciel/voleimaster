import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User2 } from "lucide-react";

interface NavUserProps {
	user?: {
		name: string;
		email: string;
		avatar?: string;
	};
}

export const NavUser = ({
	user = {
		name: "Caio Maciel",
		email: "caiolmaciell@gmail.com",
		avatar: "/avatar.jpg",
	},
}: NavUserProps) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="cursor-pointer">
					<AvatarImage src={user.avatar} alt={user.name} />
					<AvatarFallback>{user.name[0]}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-56">
				<DropdownMenuLabel>
					<div className="flex flex-col">
						<span className="text-sm font-medium">{user.name}</span>
						<span className="text-muted-foreground text-xs">
							{user.email}
						</span>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<User2 className="mr-2 h-4 w-4" />
					Perfil
				</DropdownMenuItem>
				<DropdownMenuItem>
					<LogOut className="mr-2 h-4 w-4" />
					Sair
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
