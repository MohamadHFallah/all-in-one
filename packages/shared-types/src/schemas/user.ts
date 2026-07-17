import { z } from 'zod';

export const UserSchema = z.object({
    id: z.number().int().optional(),
    firstName: z.string(),
    lastName: z.string(),
});