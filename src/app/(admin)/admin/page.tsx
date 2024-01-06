import AdminLogin from "@/components/sections/admin-login";
import { api } from "@/trpc/server";

export default async function AdminDashboard() {
    const isLoggedIn = await api.admin.isLoggedIn.query();
    if (!isLoggedIn)
        return <AdminLogin />;

    return <main>Admin</main>;
}
