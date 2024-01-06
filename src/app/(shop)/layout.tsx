import "@/styles/globals.css";

import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";
import { baseConfig } from "@/config/base";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/config/site";

export const metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function ShopLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col scroll-smooth">
            <header className="sticky top-0 z-40 w-full bg-background/50 backdrop-blur-md">
                <div className="container flex h-16 items-center space-x-4 justify-between sm:space-x-0">
                    <MainNav items={baseConfig.mainNav} />
                    <nav className="flex space-x-4">
                        <Button>Programeaza-te!</Button>
                    </nav>
                </div>
            </header>
            {children}
            <Footer />
        </div>
    );
}
