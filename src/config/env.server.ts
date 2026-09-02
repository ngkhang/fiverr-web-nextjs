import { validateEnv } from '@/lib/env/validate-env';
import z from 'zod';

const serverEnvSchema = z.object({
  ACADEMY_API_BASE_URL: z.url(),
  ACADEMY_TOKEN: z.string().min(1, 'ACADEMY_TOKEN is required'),
});

export const serverEnv = validateEnv(
  serverEnvSchema,
  {
    ACADEMY_API_BASE_URL: process.env.ACADEMY_API_BASE_URL,
    ACADEMY_TOKEN: process.env.ACADEMY_TOKEN,
  },
  'server',
);
