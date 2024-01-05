import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { serviceConfig } from "@/config/services";
import { type ServiceItem } from "@/types";
import Link from "next/link";
import Image from "next/image";

const ServiceBrief = ({ service }: { service: ServiceItem }) => {
    return <Card>
        <CardHeader className="overflow-hidden rounded-xl">
            <CardDescription className="overflow-hidden -mx-10 -mt-10 mb-5">
                <Image src={service.photo} width={800} height={600} alt={service.name} />
            </CardDescription>
            <CardTitle>{service.name}</CardTitle>
        </CardHeader>
        <CardContent className="text-justify">
            {service.description}
        </CardContent>
        <CardFooter>
            <Link href={"/contact"} className="w-full">
                <Button className="w-full">
                    Programare
                </Button>
            </Link>
        </CardFooter>
    </Card>;
}

export const ServiceSection = () => {
    return <section className="text-center flex flex-col gap-5 mb-20">
        <h1 className="font-bold text-4xl mb-10">Services</h1>
        <div className="grid md:grid-cols-3 grid-flow-row gap-20 max-w-8xl mx-auto">
            {serviceConfig.services.map((service) => {
                return <ServiceBrief service={service} key={service.name} />
            })}
        </div>
    </section>
}
