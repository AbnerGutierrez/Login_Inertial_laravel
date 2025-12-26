export default function FooterM() {
    return (
        <footer className="bg-indigo-600 text-white py-10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <h2 className="text-2xl font-bold">LuneDev</h2>
                    <p className="mt-3 text-sm text-indigo-100">
                        Simplificamos tus procesos con soluciones digitales
                        modernas y profesionales para impulsar el crecimiento de
                        tu empresa.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Navegación</h3>
                    <ul className="space-y-2 text-indigo-100">
                        <li>
                            <a href="#" className="hover:text-white">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Nosotros
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Síguenos</h3>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white text-xl">
                            📘
                        </a>
                        <a href="#" className="hover:text-white text-xl">
                            📸
                        </a>
                        <a href="#" className="hover:text-white text-xl">
                            🎵
                        </a>
                        <a href="#" className="hover:text-white text-xl">
                            🐦
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-indigo-200 text-sm mt-10 border-t border-indigo-500 pt-6">
                © 2025 LuneDev.
            </div>
        </footer>
    );
}
