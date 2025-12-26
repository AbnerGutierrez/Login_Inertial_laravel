import { Link } from "@inertiajs/react";
import { useState } from "react";
import FooterM from "./FooterM";
export default function VisitLayout({ children }) {
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
                <div
                    className={`${
                        open ? "block" : "hidden"
                    } md:hidden px-4 pb-4 space-y-2`}
                >
                    <a
                        href="#loQueHacemos"
                        className="block hover:text-gray-500 py-1"
                    >
                        Lo que hacemos
                    </a>
                    <a
                        href="#quienSomos"
                        className="block hover:text-gray-500 py-1"
                    >
                        Quienes somos
                    </a>
                    <a
                        href="#clientes"
                        className="block hover:text-gray-500 py-1"
                    >
                        Nuestros clientes
                    </a>
                    <a
                        href="#costosYplanes"
                        className="block hover:text-gray-500 py-1"
                    >
                        Costos y planes
                    </a>
                    <a
                        href="#contacto"
                        className="block hover:text-gray-500 py-1"
                    >
                        Contacto
                    </a>
                    <Link
                        href={route("login")}
                        className="block hover:text-gray-500 py-1"
                    >
                        Iniciar sesión
                    </Link>
                    <Link
                        href={route("register")}
                        className="block hover:text-gray-500 py-1"
                    >
                        Registrarse
                    </Link>
                </div>
            </nav>
            <main>{children}</main>
            <FooterM/>
        </>
    );
}
