import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"

export const HeroSection = () => {
    return <div className="relative overflow-hidden">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-56">
            <motion.div initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                        Oana Asandei
                    </h1>
                    <ul className="mt-4 text-xl list-disc ml-6">
                        <li>consiliere dezvoltare personala</li>
                        <li>terapii complementare: terapie Kundalini Reiki, vindecarea liniei temporale (TLH)</li>
                        <li>terapie pentru suflet</li>
                    </ul>
                </div>
                <div>
                    <div className="mt-10">
                        <Link
                            href="/"
                        >
                            <Button size={"lg"}>Hai sa ne vedem!</Button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>;
}
