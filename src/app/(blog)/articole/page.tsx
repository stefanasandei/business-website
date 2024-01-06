"use server";

import { api } from "@/trpc/server";

export default async function Articole() {
    const data = await api.post.hello.query({ text: "yep" });

    return <main>
        <div className="container flex-1 min-h-[100vh] mt-20">
            articole: {data.greeting}
        </div>
    </main>;
}
