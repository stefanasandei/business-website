import { postRouter } from "@/server/api/routers/post";
import { createTRPCRouter } from "@/server/api/trpc";
import { adminRouter } from "./routers/admin";

export const appRouter = createTRPCRouter({
  admin: adminRouter,
  post: postRouter,
});

export type AppRouter = typeof appRouter;
