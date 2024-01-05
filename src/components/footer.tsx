import Link from "next/link"
import { Icons } from "./icons"
import { siteConfig } from "@/config/site"

export const Footer = () => {
    return <footer className="bg-input/20 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link href="/" className="flex items-center">
                        <Icons.logo />
                        <span className="self-center ml-3 text-2xl font-semibold whitespace-nowrap dark:text-white">Oana Asandei</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resurse</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link href="/articole" className="hover:underline">Articole</Link>
                            </li>
                            <li>
                                <Link href="/servicii" className="hover:underline">Servicii</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Urmareste-ma</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link href={siteConfig.links.facebook} className="hover:underline">Facebook</Link>
                            </li>
                            <li>
                                <Link href={siteConfig.links.facebook} className="hover:underline">Facebook</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Politica de confidentialitate</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Termeni &amp; Conditii</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} Oana Asandei. All Rights Reserved.</span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Created by <a href="https://stefan-asandei.netlify.app/" className="hover:underline">Stefan Asandei</a>.</span>
                </div>
            </div>
        </div>
    </footer>
}
