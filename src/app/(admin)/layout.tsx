import "@/styles/globals.css";

import { siteConfig } from "@/config/site";

export const metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div suppressHydrationWarning>
            {children}
        </div>
    );
}
