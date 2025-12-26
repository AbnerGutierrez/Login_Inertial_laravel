import { Link } from "@inertiajs/react";
import { useState } from "react";
import FooterM from "./FooterM";
export default function LoginLayout({ children }) {
    const [open, setOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    return (
        <>
            <nav className="border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
                    {/* Logo */}
                    <div className="text-xl font-semibold tracking-wide">
                        LuneDev
                    </div>

                    {/* Botón móvil */}
                    <button
                        className="md:hidden text-gray-600 hover:text-gray-900"
                        onClick={() => setOpen(!open)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Links */}
                    <div className="hidden md:flex gap-6 text-gray-700 font-medium">
                        <Link
                            href={route("home")}
                            className="hover:text-gray-500 transition"
                        >
                            Inicio
                        </Link>
                    </div>
                </div>

                {/* Menú desplegable móvil */}
                <div
                    className={`${
                        open ? "block" : "hidden"
                    } md:hidden px-4 pb-4 space-y-2`}
                >
                    <Link
                        href={route("home")}
                        className="block hover:text-gray-500 py-1"
                    >
                        Inicio
                    </Link>
                </div>
            </nav>
            <main>{children}</main>
            <FooterM/>
        </>
    );
}
