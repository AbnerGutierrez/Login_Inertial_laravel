import { Link } from "@inertiajs/react";
import { useState } from "react";
import FooterM from "./FooterM";
export default function VisitLayout({ children }) {
    const [open, setOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    return (
        <>
           <nav className="fixed top-0 left-0 w-full border-b border-gray-100 bg-white z-50">
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
                        <a
                            href="#tipos"
                            className="hover:text-gray-500 transition"
                        >
                            ¿ Qué web necesito ?
                        </a>
                        <a
                            href="#costosYplanes"
                            className="hover:text-gray-500 transition"
                        >
                            Costos y planes
                        </a>
                        <a
                            href="#contacto"
                            className="hover:text-gray-500 transition"
                        >
                            Contacto
                        </a>

                        <Link
                            href={route("login")}
                            className="hover:text-gray-500 transition"
                        >
                            Iniciar sesión
                        </Link>
                        <Link
                            href={route("register")}
                            className="hover:text-gray-500 transition"
                        >
                            Registrarse
                        </Link>
                    </div>
                </div>

                {/* Menú desplegable móvil */}
                {open && (
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={() => setOpen(false)}
                    />
                )}
                <div
                    className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}
    `}
                >
                    {/* Header del menú */}
                    <div className="flex items-center justify-between px-6 py-4 border-b">
                        <span className="text-xl font-semibold">LuneDev</span>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-2xl"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-col gap-6 px-6 py-10 text-lg font-medium text-gray-700">
                        <a href="#tipos" onClick={() => setOpen(false)}>
                            ¿Qué web necesito?
                        </a>
                        <a href="#costosYplanes" onClick={() => setOpen(false)}>
                            Costos y planes
                        </a>
                        <a href="#contacto" onClick={() => setOpen(false)}>
                            Contacto
                        </a>

                        <Link
                            href={route("login")}
                            onClick={() => setOpen(false)}
                        >
                            Iniciar sesión
                        </Link>
                        <Link
                            href={route("register")}
                            onClick={() => setOpen(false)}
                        >
                            Registrarse
                        </Link>
                    </nav>
                </div>
            </nav>
            <main className="pt-20">{children}</main>
            <FooterM />
        </>
    );
}
