import { OrganizationFormValues } from "../schemas";
import { create } from "zustand";

interface OrganizationStore {
	selected: OrganizationFormValues | null;
	setSelected: (org: OrganizationFormValues | null) => void;
}

export const useOrganizationStore = create<OrganizationStore>((set) => ({
	selected: null,
	setSelected: (org) => set({ selected: org }),
}));
