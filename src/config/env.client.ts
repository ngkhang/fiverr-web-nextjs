import { validateEnv } from '@/lib/env/validate-env';
import z from 'zod';

const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_TIMEOUT: z
    .string()
    .default('15000')
    .transform((val) => Number(val))
    .pipe(z.number().positive()),
});

export const clientEnv = validateEnv(
  clientEnvSchema,
  {
    NEXT_PUBLIC_API_TIMEOUT: process.env.NEXT_PUBLIC_API_TIMEOUT,
  },
  'client',
);
