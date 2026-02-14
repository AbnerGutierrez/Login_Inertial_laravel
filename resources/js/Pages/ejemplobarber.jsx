import { useState, useEffect } from "react";

export default function EjemploBarberMejorado() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [visibleSections, setVisibleSections] = useState(new Set());

    // Efecto para el loader inicial
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // 2 segundos de carga

        return () => clearTimeout(timer);
    }, []);

    // Intersection Observer para animaciones de scroll
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px",
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setVisibleSections((prev) =>
                        new Set([...prev, entry.target.id])
                    );
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );

        // Observar todas las secciones
        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [loading]);

    // Función helper para verificar si una sección es visible
    const isSectionVisible = (sectionId) => visibleSections.has(sectionId);

    if (loading) {
        return (
            <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center">
                <div className="text-center">
                    {/* Logo animado */}
                    <div className="mb-8 animate-pulse">
                        <h1 className="font-serif italic text-6xl md:text-8xl text-white">
                            Rude
                            <span className="text-amber-500">Boys</span>
                        </h1>
                    </div>

                    {/* Spinner personalizado */}
                    {/* <div className="flex justify-center items-center space-x-2">
                        <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"></div>
                    </div> */}

                    {/* Barra de progreso */}
                    <div className="mt-8 w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
                        <div className="h-full bg-amber-500 animate-[loading_2s_ease-in-out]"></div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes loading {
                        from {
                            width: 0%;
                        }
                        to {
                            width: 100%;
                        }
                    }
                `}</style>
            </div>
        );
    }

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-black z-50 animate-slideDown">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
                    {/* Logo */}
                    <div className=" text-xl font-semibold tracking-wide font-serif italic text-amber-500">
                        RudeBoys
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
                            className="hover:text-gray-500 transition"
                            href="#"
                            onClick={() => setOpen(false)}
                        >
                            Inicio
                        </a>
                        <a
                            className="hover:text-gray-500 transition"
                            href="#servicios"
                            onClick={() => setOpen(false)}
                        >
                            Servicios
                        </a>
                        <a
                            className="hover:text-gray-500 transition"
                            href="#nosotros"
                            onClick={() => setOpen(false)}
                        >
                            Nosotros
                        </a>
                        <a
                            className="hover:text-gray-500 transition"
                            href="#productos"
                            onClick={() => setOpen(false)}
                        >
                            Productos
                        </a>
                        <a
                            className="hover:text-gray-500 transition"
                            href="#equipo"
                            onClick={() => setOpen(false)}
                        >
                            Equipo
                        </a>
                        <a
                            className="hover:text-gray-500 transition"
                            href="#contacto"
                            onClick={() => setOpen(false)}
                        >
                            Contacto
                        </a>
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
                    className={`fixed inset-0 bg-black z-50 transform transition-transform duration-300 ease-in-out md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}
    `}
                >
                    {/* Header del menú */}
                    <div className="flex items-center justify-between px-6 py-4">
                        <span className="text-xl font-semibold font-serif italic text-amber-500">
                            RudeBoys
                        </span>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-2xl text-gray-700"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-col gap-6 px-6 py-10 text-lg text-gray-300 font-light">
                        <a href="#" onClick={() => setOpen(false)}>
                            Inicio
                        </a>
                        <a href="#servicios" onClick={() => setOpen(false)}>
                            Nuestros servicios
                        </a>
                        <a href="#nosotros" onClick={() => setOpen(false)}>
                            Sobre nosotros
                        </a>
                        <a href="#productos" onClick={() => setOpen(false)}>
                            Nuestros productos
                        </a>
                        <a href="#equipo" onClick={() => setOpen(false)}>
                            Nuestro equipo
                        </a>
                        <a href="#contacto" onClick={() => setOpen(false)}>
                            Contacto
                        </a>
                    </nav>
                </div>
            </nav>

            <main className="pt-20 bg-black">
                {/* HERO */}
                <section
                    id="inicio"
                    className="relative bg-black overflow-hidden min-h-[70vh] flex items-center"
                >
                    {/* Imagen de fondo con un zoom suave */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/examples/bannerBarber1.png"
                            alt="Background"
                            className="w-full h-full object-cover object-top scale-105 animate-zoomIn"
                        />
                        {/* Overlay más dramático (Vignette) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
                    </div>

                    <div className="relative z-10 max-w-screen-xl px-6 py-24 mx-auto w-full">
                        <div className="max-w-3xl text-center sm:text-left">
                            {/* --- EL TÍTULO MEJORADO --- */}
                            <div className="mb-10 animate-fadeInUp">
                                <h1 className="font-serif italic text-5xl tracking-tighter leading-none md:text-8xl xl:text-9xl  text-white drop-shadow-2xl">
                                    Rude
                                    <span className="text-amber-500 italic">
                                        Boys
                                    </span>
                                </h1>
                                <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-xl animate-fadeInUp [animation-delay:0.2s]  [animation-fill-mode:forwards]">
                                    Bienvenido
                                </p>
                            </div>

                            {/* Contenedor de Enlaces - Estilo Botón Real */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fadeInUp [animation-delay:0.4s]  [animation-fill-mode:forwards]">
                                <a
                                    href="#contacto"
                                    className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-black font-black uppercase tracking-widest text-sm hover:bg-amber-600 transition-all duration-300 text-center"
                                >
                                    Agendar cita
                                </a>
                                <a
                                    href="#nosotros"
                                    className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm text-center transition-all duration-300 bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/40"
                                >
                                    Conócenos
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICIOS - Elegante y Minimalista */}
                <section
                    id="servicios"
                    className={`py-20 bg-[#0a0a0a] text-white transition-all duration-1000 ${
                        isSectionVisible("servicios")
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-20"
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-sm uppercase tracking-[0.3em] text-amber-500 mb-2">
                                Nuestros servicios
                            </h2>
                            <p className="text-4xl font-serif italic">
                                Lo más pedido
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    name: "Corte de Cabello",
                                    price: "150",
                                    desc: "(clásicos, desvanecidos/fades, diseños).",
                                },
                                {
                                    name: "Afeitados",
                                    price: "230",
                                    desc: "Afeitado tradicional con navaja, perfilado y diseño de barba y bigote.",
                                },
                                {
                                    name: "Experiencia Vip",
                                    price: "390",
                                    desc: "Tratamientos SPA para barba, mascarillas faciales (carbón activo), depilación (ceja, nariz, oído) y peinado.",
                                },
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    className={`group border-b border-gray-800 pb-8 hover:border-amber-500 transition-all duration-500 ${
                                        isSectionVisible("servicios")
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-20"
                                    }`}
                                    style={{
                                        transitionDelay: `${index * 150}ms`,
                                    }}
                                >
                                    <div className="flex justify-between items-end mb-4">
                                        <h3 className="text-2xl font-light tracking-tight group-hover:text-amber-500 transition-colors">
                                            {service.name}
                                        </h3>
                                        <span className="text-amber-500 font-mono text-xl">
                                            ${service.price}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 font-light leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SOBRE NOSOTROS - Minimalismo Blanco/Negro */}
                <section
                    id="nosotros"
                    className={`py-24 bg-white transition-all duration-1000 ${
                        isSectionVisible("nosotros")
                            ? "opacity-100"
                            : "opacity-0"
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                        <div
                            className={`md:w-1/2 relative transition-all duration-1000 delay-200 ${
                                isSectionVisible("nosotros")
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-20"
                            }`}
                        >
                            <div className="absolute -top-4 -left-4 w-full h-full border border-amber-500/30 z-0"></div>
                            <img
                                src="https://www.ebio.mx/wp-content/uploads/2025/10/AdobeStock_169867228-1024x683.jpeg"
                                alt="Barber Shop"
                                className="relative z-10 grayscale hover:grayscale-0 transition duration-700 shadow-2xl"
                            />
                        </div>
                        <div
                            className={`md:w-1/2 space-y-6 transition-all duration-1000 delay-400 ${
                                isSectionVisible("nosotros")
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-20"
                            }`}
                        >
                            <h2 className="text-4xl font-light text-gray-900 leading-tight">
                                Sobre nosotros{" "}
                                <span className="italic font-serif">
                                    RudeBoys
                                </span>
                                .
                            </h2>
                            <p className="text-gray-600 leading-loose">
                                En <strong>RudeBoys</strong> no solo cortamos
                                cabello, creamos estilo. Somos una barbería
                                donde la técnica, el detalle y la actitud se
                                combinan para que salgas con seguridad y
                                personalidad en cada visita.
                            </p>
                            <div className="pt-4">
                                <a
                                    href="#contacto"
                                    className="border-b-2 border-amber-500 pb-1 text-sm uppercase tracking-widest font-bold hover:text-amber-600 transition"
                                >
                                    Reserva tu espacio
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Articulos - Estilo Galería de Lujo */}
                <section
                    id="productos"
                    className={`py-20 bg-[#0f0f0f] transition-all duration-1000 ${
                        isSectionVisible("productos")
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-20"
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl font-light text-white mb-12 tracking-widest text-center uppercase">
                            Nuestros productos
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "Suero para el cuidado de la barba (50ml)",
                                    price: "399",
                                    img: "https://www.ossionmexico.com/assets/prods/19.jpg",
                                },
                                {
                                    title: "Polvo para peinar el cabello",
                                    price: "339",
                                    img: "https://www.ossionmexico.com/assets/prods/53.jpg",
                                },
                                {
                                    title: "Agua de colonia ola del océano (400ml)",
                                    price: "299",
                                    img: "https://www.ossionmexico.com/assets/prods/44.jpg",
                                },
                                {
                                    title: "Cera para el cabello ",
                                    price: "259",
                                    img: "https://www.ossionmexico.com/assets/prods/5.jpg",
                                },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`text-center group transition-all duration-700 ${
                                        isSectionVisible("productos")
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-20"
                                    }`}
                                    style={{
                                        transitionDelay: `${i * 100}ms`,
                                    }}
                                >
                                    <div className="overflow-hidden mb-4 bg-zinc-900 aspect-[3/4] flex items-center justify-center">
                                        <img
                                            src={item.img}
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
                                            alt={item.title}
                                        />
                                    </div>
                                    <h4 className="text-gray-200 font-light tracking-wide">
                                        {item.title}
                                    </h4>
                                    <p className="text-amber-500 text-sm mt-1">
                                        ${item.price}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* El Equipo - Minimalista */}
                <section
                    id="equipo"
                    className={`py-24 bg-gray-50 transition-all duration-1000 ${
                        isSectionVisible("equipo")
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-20"
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-center text-3xl font-light mb-16 tracking-tighter">
                            Nuestro Equipo
                        </h2>
                        <div className="grid md:grid-cols-3 gap-16">
                            {[
                                {
                                    name: "Charly",
                                    role: "Barbero",
                                    img: "https://i.pinimg.com/736x/1f/81/b5/1f81b5b8370eb18941f20ebdddbfb948.jpg",
                                },
                                {
                                    name: "Denisse",
                                    role: "Barbera",
                                    img: "https://i.pinimg.com/736x/79/d5/85/79d58527795ed577545470831dc4bdb0.jpg",
                                },
                                {
                                    name: "Coaco",
                                    role: "Barbero",
                                    img: "https://i.pinimg.com/1200x/29/7f/18/297f18718301167ae4f4a193f84f772c.jpg",
                                },
                            ].map((staff, i) => (
                                <div
                                    key={i}
                                    className={`text-center transition-all duration-700 ${
                                        isSectionVisible("equipo")
                                            ? "opacity-100 scale-100"
                                            : "opacity-0 scale-90"
                                    }`}
                                    style={{
                                        transitionDelay: `${i * 150}ms`,
                                    }}
                                >
                                    <img
                                        src={staff.img}
                                        className="w-48 h-64 mx-auto object-cover grayscale mb-6 filter contrast-125 hover:grayscale-0 transition duration-700"
                                        alt={staff.name}
                                    />
                                    <h3 className="text-xl font-medium text-gray-900">
                                        {staff.name}
                                    </h3>
                                    <p className="text-amber-600 text-xs uppercase tracking-[.2em] mt-2">
                                        {staff.role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contacto */}
                <section
                    id="contacto"
                    className={`py-20 bg-[#0f0f0f] transition-all duration-1000 ${
                        isSectionVisible("contacto")
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-20"
                    }`}
                >
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-light text-white mb-12 tracking-widest text-center uppercase">
                            Agenda tu cita
                        </h2>

                        <a
                            href="https://wa.me/525512345678?text=Hola,%20quiero%20agendar%20una%20cita"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <div className="bg-zinc-900 border border-zinc-800 p-10 text-center transition duration-700 hover:border-amber-500">
                                <div className="mb-6 flex justify-center">
                                    <div className="w-20 h-20 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-amber-500 transition">
                                        <svg
                                            className="w-10 h-10 text-amber-500"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12.04 2C6.58 2 2.1 6.48 2.1 11.94c0 1.95.52 3.86 1.5 5.53L2 22l4.67-1.23a9.94 9.94 0 005.37 1.53h.01c5.46 0 9.94-4.48 9.94-9.94C21.99 6.48 17.5 2 12.04 2zm5.74 14.33c-.24.67-1.38 1.28-1.9 1.36-.48.07-1.08.1-1.74-.11-.4-.13-.92-.3-1.59-.59-2.8-1.21-4.62-4.03-4.76-4.22-.13-.19-1.14-1.52-1.14-2.9 0-1.38.72-2.05.97-2.33.24-.27.54-.34.72-.34h.52c.17 0 .41-.06.64.49.24.55.82 2.03.89 2.17.07.14.11.31.02.5-.09.19-.13.31-.27.48-.13.17-.28.37-.4.49-.13.13-.27.27-.12.52.15.25.68 1.13 1.46 1.83 1.01.9 1.86 1.18 2.11 1.31.25.13.4.11.55-.07.15-.19.64-.74.81-1 .17-.25.34-.21.57-.13.24.09 1.5.71 1.76.84.26.13.44.19.5.3.06.11.06.67-.18 1.34z" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 className="text-gray-200 font-light tracking-wide text-lg mb-2">
                                    Contáctanos por WhatsApp
                                </h3>

                                <p className="text-gray-400 text-sm font-light mb-6">
                                    Respuesta rápida · Atención personalizada
                                </p>

                                <span className="inline-block border border-amber-500 text-amber-500 px-8 py-3 tracking-widest uppercase text-sm font-light group-hover:bg-amber-500 group-hover:text-black transition duration-500">
                                    Abrir WhatsApp
                                </span>
                            </div>
                        </a>
                    </div>
                </section>
            </main>

            {/* Footer - Minimalista Oscuro */}
            <footer className="bg-[#050505] text-white pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
                    <div className="col-span-2">
                        <h3 className="text-2xl font-serif italic mb-6">
                            RudeBoys
                        </h3>
                        <p className="text-gray-500 max-w-sm font-light leading-loose">
                            Excelencia en cada trazo. Nos dedicamos al arte de
                            la barbería con un enfoque contemporáneo.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-amber-500 text-sm uppercase tracking-widest mb-6">
                            Ubicación
                        </h4>
                        <p className="text-gray-400 font-light">
                            Av. Lujo 404, Suite 10
                            <br />
                            Ciudad de México
                        </p>
                    </div>
                    <div>
                        <h4 className="text-amber-500 text-sm uppercase tracking-widest mb-6">
                            Redes
                        </h4>
                        <div className="flex flex-col gap-2 text-gray-400 font-light">
                            <a href="#" className="hover:text-white transition">
                                Instagram
                            </a>
                            <a href="#" className="hover:text-white transition">
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 pt-10 flex justify-between items-center text-[10px] uppercase tracking-[0.3em] text-gray-600">
                    <p>© 2026 RudeBoys barber</p>
                    <p>Políticas de Privacidad</p>
                </div>
            </footer>

            {/* Estilos personalizados */}
            <style jsx>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes zoomIn {
                    from {
                        transform: scale(1.1);
                    }
                    to {
                        transform: scale(1);
                    }
                }

                .animate-slideDown {
                    animation: slideDown 0.6s ease-out;
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out;
                }

                .animate-zoomIn {
                    animation: zoomIn 3s ease-out;
                }
            `}</style>
        </>
    );
}