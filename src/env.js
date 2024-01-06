import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    SECRET: z.string(),
    ADMIN_USER: z.string(),
    ADMIN_PASSWORD: z.string(),
  },

  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    SECRET: process.env.SECRET,
    ADMIN_USER: process.env.ADMIN_USER,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
});
