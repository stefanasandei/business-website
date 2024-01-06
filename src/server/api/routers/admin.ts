import { env } from "@/env";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { parse } from "cookie";
import { verify } from "jsonwebtoken";

export const adminRouter = createTRPCRouter({
    isLoggedIn: publicProcedure
        .query(async ({ ctx }) => {
            const cookies = ctx.headers.get("Cookie");
            if (!cookies)
                return false;

            const token = parse(cookies).access_token;
            if (!token)
                return false;

            const is_valid = verify(token, env.SECRET);
            return is_valid;
        }),
});
