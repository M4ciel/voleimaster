import { z } from "zod";

export const OrganizationSchema = z.object({
	name: z.string(),
	logo: z.string().optional(),
	type: z.enum(["for_fun", "training", "championship"]),
});

export const organizationListSchema = z.array(OrganizationSchema);

export type OrganizationFormValues = z.infer<typeof OrganizationSchema>;
