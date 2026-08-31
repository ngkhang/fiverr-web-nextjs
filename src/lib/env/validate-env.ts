import z from 'zod';

export const validateEnv = <T>(
  schema: z.ZodType<T>,
  values: Record<string, unknown>,
  label: string,
): T => {
  const parsed = schema.safeParse(values);

  if (!parsed.success) {
    console.error(`Invalid ${label} env vars:`, z.flattenError(parsed.error).fieldErrors);
    throw new Error(`Invalid ${label} environment variables`);
  }

  return parsed.data;
};
