export type NavItem = {
    title: string
    href: string
    disabled?: boolean
}

export type MainNavItem = NavItem

export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
        facebook: string
    }
}

export type BaseConfig = {
    mainNav: NavItem[]
}

export type ServiceItem = {
    name: string;
    description: string;
    photo: string;
};

export type ServiceConfig = {
    services: ServiceItem[]
};
