import { api } from "@/trpc/server";

export default async function NoutArticol() {
    const data = await api.post.create.mutate({ name: "Test" });

    return <main className="min-h-[100vh]">
        <h1>{JSON.stringify(data)}</h1>
    </main>;
}
