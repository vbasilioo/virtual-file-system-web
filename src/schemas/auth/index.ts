import { z } from 'zod';

export const loginFormSchema = z.object({
  username: z.string(),
  password: z.string().min(8, 'A senha precisa ter no mínimo 8 caracteres.'),
});
