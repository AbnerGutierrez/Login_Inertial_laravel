import { useState, useEffect } from "react";

export default function RodeoLanding() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [visibleSections, setVisibleSections] = useState(new Set());
    const [selectedCategory, setSelectedCategory] = useState(null);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections(
                            (prev) => new Set([...prev, entry.target.id])
                        );
                    }
                });
            },
            { threshold: 0.1 }
        );

        document
            .querySelectorAll("section[id]")
            .forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [loading]);

    const isVisible = (id) => visibleSections.has(id);

    const menuData = {
        Desayunos: [
            { name: "Omelette", price: 150 },
            { name: "Chilaquiles verdes", price: 200 },
            { name: "Huevos al gusto", price: 140 },
            { name: "Omelette", price: 150 },
            { name: "Chilaquiles verdes", price: 200 },
            { name: "Huevos al gusto", price: 140 },
            { name: "Omelette", price: 150 },
            { name: "Chilaquiles verdes", price: 200 },
            { name: "Huevos al gusto", price: 140 },
        ],
        Entradas: [
            { name: "Papas gajo", price: 120 },
            { name: "Pescadillas", price: 160 },
        ],
        Hamburguesas: [
            { name: "Clásica", price: 180 },
            { name: "Tocino", price: 210 },
            { name: "Pulled Pork", price: 230 },
        ],
    };

    if (loading) {
        return (
            <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50 p-4">
                <div className="relative flex flex-col items-center">
                    {/* Logo con efecto de pulso suave */}
                    <img
                        src="/images/examples/pericocrudo.png"
                        alt="El Perico Crudo"
                        className="w-40 md:w-52 mb-8 animate-pulse-slow"
                    />

                    {/* Contenedor de la barra */}
                    <div className="relative w-48 md:w-64 h-1.5 bg-[#3e2b20] rounded-full overflow-hidden">
                        {/* Barra de progreso con gradiente y brillo */}
                        <div className="h-full bg-gradient-to-r from-[#b23a2a] via-[#d64d3b] to-[#b23a2a] animate-loading-infinite rounded-full" />
                    </div>

                    {/* Texto opcional de feedback */}
                    <p className="mt-4 text-[#b23a2a]/60 text-xs tracking-widest uppercase animate-pulse">
                        Cargando...
                    </p>
                </div>

                <style jsx>{`
                    @keyframes loading-infinite {
                        0% {
                            transform: translateX(-100%);
                        }
                        50% {
                            transform: translateX(0%);
                        }
                        100% {
                            transform: translateX(100%);
                        }
                    }
                    @keyframes pulse-slow {
                        0%,
                        100% {
                            opacity: 1;
                            transform: scale(1);
                        }
                        50% {
                            opacity: 0.8;
                            transform: scale(0.98);
                        }
                    }
                    .animate-loading-infinite {
                        width: 100%;
                        animation: loading-infinite 2s
                            cubic-bezier(0.4, 0, 0.2, 1) infinite;
                    }
                    .animate-pulse-slow {
                        animation: pulse-slow 3s ease-in-out infinite;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-[#0f0f0f] text-[#f5f3ef] font-serif tracking-widest border-b border-[#5a3e2b] z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
                    {/* Logo */}
                    <div className="text-xl uppercase font-semibold tracking-[0.25em]">
                        El perico crudo
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
                            className="hover:text-[#c2a25d] transition uppercase text-sm"
                            href="#"
                            onClick={() => setOpen(false)}
                        >
                            Inicio
                        </a>
                        <a
                            className="hover:text-[#c2a25d] transition uppercase text-sm"
                            href="#nosotros"
                            onClick={() => setOpen(false)}
                        >
                            Nosotros
                        </a>
                        <a
                            className="hover:text-[#c2a25d] transition uppercase text-sm"
                            href="#menu"
                            onClick={() => setOpen(false)}
                        >
                            Nuestro Menú
                        </a>
                        <a
                            className="hover:text-[#c2a25d] transition uppercase text-sm"
                            href="#productos"
                            onClick={() => setOpen(false)}
                        >
                            Contacto
                        </a>
                        <a
                            className="hover:text-[#c2a25d] transition uppercase text-sm"
                            href="#equipo"
                            onClick={() => setOpen(false)}
                        >
                            Equipo
                        </a>
                        <a
                            className="hover:text-[#c2a25d] transition uppercase text-sm"
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
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setOpen(false)}
                    />
                )}
                <div
                    className={`fixed inset-0 z-50 md:hidden transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
             bg-[#0f0f0f] text-[#f5f3ef]`}
                >
                    {/* Header del menú */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-[#5a3e2b]">
                        <span className="text-lg uppercase tracking-[0.35em] font-semibold">
                            El perico crudo
                        </span>
                        <button
                            onClick={() => setOpen(false)}
                            className="text-2xl text-[#f5f3ef] hover:text-[#c2a25d] transition"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-col gap-6 px-6 py-10 text-lg text-gray-300 font-light">
                        <a href="#" onClick={() => setOpen(false)}>
                            Inicio
                        </a>
                        <a href="#nosotros" onClick={() => setOpen(false)}>
                            Sobre nosotros
                        </a>
                        <a href="#menu" onClick={() => setOpen(false)}>
                            Nuestro Menú
                        </a>
                        <a href="#contacto" onClick={() => setOpen(false)}>
                            Contactanos
                        </a>
                    </nav>
                </div>
            </nav>

            <main className=" bg-white text-[#2b1e16]">
                {/* HERO */}
                <section
                    id="hero"
                    className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/images/examples/pericocrudo.png')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative z-10 text-black">
                        <a
                            href="#menu"
                            className="
                                    inline-block
                                    mt-96 px-10 py-3 
                                    border-2 border-[#f5f3ef] 
                                    text-[#f5f3ef]
                                    uppercase tracking-[0.3em] text-base
                                    hover:bg-[#f5f3ef] hover:text-[#0f0f0f]
                                    transition-all duration-300 backdrop-blur-sm
                                "
                        >
                            Ver menú
                        </a>
                    </div>
                </section>
                {/* SOBRE NOSOTROS */}
                <section
                    id="nosotros"
                    className={`py-24 bg-[#0f0f0f] text-[#f5f3ef] transition-all duration-1000 ${
                        isVisible("nosotros")
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-20"
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-4">
                        {/* Encabezado */}
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-serif tracking-[0.4em] uppercase">
                                Sobre Nosotros
                            </h2>
                            <div className="w-16 h-px bg-[#5a3e2b] mx-auto mt-6" />
                        </div>

                        {/* Grid principal */}
                        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                            {/* Texto */}
                            <div>
                                <p className="text-[#c2a25d] uppercase tracking-[0.3em] text-sm font-semibold mb-4">
                                    Nuestra historia
                                </p>
                                <p className="text-[#f5f3ef]/80 text-lg leading-relaxed mb-6 font-light">
                                    El Perico Crudo nació de la pasión por
                                    reunir a la gente alrededor de una buena
                                    mesa. Somos un espacio donde el sabor
                                    auténtico se encuentra con un ambiente
                                    relajado y lleno de carácter.
                                </p>
                            </div>

                            {/* Imagen placeholder o decorativo */}
                            <div className="relative">
                                <div className="w-full h-72 bg-[#2b1e16] border border-[#5a3e2b] flex items-center justify-center">
                                    <img
                                        src="/images/examples/bannerPerico.png"
                                        alt="El Perico Crudo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Acento decorativo */}
                                <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c2a25d]/30 -z-10" />
                            </div>
                        </div>

                        {/* Valores / Pilares */}
                        <div className="grid md:grid-cols-3 gap-12 border-t border-[#5a3e2b] pt-16">
                            {[
                                {
                                    icon: "✦",
                                    title: "Sabor auténtico",
                                    desc: "Recetas pensadas con cariño, ingredientes frescos y sazón que no se improvisa.",
                                },
                                {
                                    icon: "✦",
                                    title: "Ambiente único",
                                    desc: "Un espacio para relajarte, reírte y disfrutar en buena compañía.",
                                },
                                {
                                    icon: "✦",
                                    title: "Para todos",
                                    desc: "Desde el desayuno hasta la última cerveza, siempre hay algo para ti.",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group border-b border-[#5a3e2b] pb-8 hover:border-[#c2a25d] transition-all duration-500"
                                    style={{
                                        transitionDelay: `${index * 150}ms`,
                                    }}
                                >
                                    <span className="text-[#c2a25d] text-xl block mb-4">
                                        {item.icon}
                                    </span>
                                    <h3 className="text-xl uppercase tracking-widest font-semibold mb-3 group-hover:text-[#c2a25d] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#f5f3ef]/50 italic font-light leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* MENU */}
                <section
                    id="menu"
                    className={`py-20 bg-[#f5f3ef] text-[#2b1e16] transition-all duration-1000 ${
                        isVisible("menu")
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-20"
                    }`}
                >
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <p className="text-4xl font-serif tracking-[0.4em] uppercase">
                                Nuestro Menú
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    name: "Desayunos",
                                    price: "",
                                    desc: "(Ommellete, chilaquiles, huevo al gusto, postres).",
                                },
                                {
                                    name: "Entradas",
                                    price: "",
                                    desc: "Papas gajo, pescadillas",
                                },
                                {
                                    name: "Hamburguesas",
                                    price: "",
                                    desc: "Sencilla, Tocino, Champiñones, Hawaiana, Pulled Pork...",
                                },
                                {
                                    name: "Ensaladas",
                                    price: "",
                                    desc: "Ensalada verde, mediterranea, pasta.",
                                },
                                {
                                    name: "Tacos",
                                    price: "",
                                    desc: "Pollo, Pescado, Cecina, Pulled Pork...",
                                },
                                {
                                    name: "Hot-dogs",
                                    price: "",
                                    desc: "Sencillo, Queso, Champiñones, Especial...",
                                },
                                {
                                    name: "Alitas/Boneless",
                                    price: "",
                                    desc: "-BBQ, Taiñ, Doritos, Chile de arbol, Red Hot...",
                                },
                                {
                                    name: "Postres",
                                    price: "",
                                    desc: "Huevo de perico, Cheesecake",
                                },
                                {
                                    name: "Bebidas calientes",
                                    price: "",
                                    desc: "Café americano, de olla, expreso, té.",
                                },
                                {
                                    name: "Aguas",
                                    price: "",
                                    desc: "Horchata, Mango",
                                },
                                {
                                    name: "Refrescos",
                                    price: "",
                                    desc: "Coca Cola, Sidral, Sprite...",
                                },
                                {
                                    name: "Cervezas",
                                    price: "",
                                    desc: "Corona, Victoria, Amstel Ultra, Heineken...",
                                },
                                {
                                    name: "Coktail",
                                    price: "",
                                    desc: "Mojito, Gin.",
                                },
                            ].map((service, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        setSelectedCategory(service.name)
                                    }
                                    className={`group border-b border-gray-800 pb-8 hover:border-amber-500 transition-all duration-500 ${
                                        isVisible("menu")
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-20"
                                    }`}
                                    style={{
                                        transitionDelay: `${index * 150}ms`,
                                    }}
                                >
                                    <div className="flex justify-between items-end mb-4">
                                        <h3 className="text-2xl uppercase tracking-widest font-semibold group-hover:text-[#c2a25d]">
                                            {" "}
                                            {service.name}
                                        </h3>
                                    </div>
                                    <p className="text-[#5a3e2b] italic">
                                        {service.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACTO */}
                <section
                    className="py-24 bg-[#f5f3ef] text-[#2b1e16] text-center"
                    id="contacto"
                >
                    <div className="max-w-7xl mx-auto px-4">
                        {/* Encabezado */}
                        <div className="text-center mb-16">
                            <p className="text-xs uppercase tracking-[0.5em] text-[#c2a25d] mb-4">
                                Estamos para ti
                            </p>
                            <h2 className="text-3xl font-serif tracking-[0.4em] uppercase mb-4">
                                Contáctanos
                            </h2>
                            <div className="w-16 h-px bg-[#5a3e2b] mx-auto" />
                        </div>

                        {/* Grid de contacto */}
                        <div className="grid md:grid-cols-3 gap-12 mb-16">
                            {[
                                {
                                    icon: "📍",
                                    title: "Ubicación",
                                    desc: "México, México, México",
                                    sub: "Ven a visitarnos",
                                },
                                {
                                    icon: "🕐",
                                    title: "Horario",
                                    desc: "Lun – Vie: 8am – 10pm",
                                    sub: "Sáb – Dom: 8am – 11pm",
                                },
                                {
                                    icon: "💬",
                                    title: "WhatsApp",
                                    desc: "+52 777 000 0000",
                                    sub: "Respuesta inmediata",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group border-b border-[#5a3e2b] pb-8 hover:border-[#c2a25d] transition-all duration-500"
                                >
                                    <span className="text-3xl block mb-4">
                                        {item.icon}
                                    </span>
                                    <h3 className="text-lg uppercase tracking-widest font-semibold mb-2 group-hover:text-[#c2a25d] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#2b1e16] font-light">
                                        {item.desc}
                                    </p>
                                    <p className="text-[#5a3e2b] italic text-sm mt-1">
                                        {item.sub}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <p className="text-[#5a3e2b] italic font-light max-w-md">
                                ¿Tienes una reservación, pedido especial o
                                simplemente quieres saber el menú del día?
                                Escríbenos directamente.
                            </p>
                            <a
                                href="https://wa.me/527770000000?text=Hola%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20El%20Perico%20Crudo%20%F0%9F%A6%9C"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    group inline-flex items-center gap-3
                                    px-10 py-4
                                    border-2 border-[#5a3e2b]
                                    text-[#2b1e16] uppercase tracking-[0.3em] text-sm font-semibold
                                    hover:bg-[#2b1e16] hover:text-[#f5f3ef] hover:border-[#2b1e16]
                                    transition-all duration-300
                                "
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    className="w-5 h-5 fill-current"
                                >
                                    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.77L0 32l8.454-2.007A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.769-1.848l-.484-.287-5.016 1.191 1.26-4.893-.317-.502A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.354-1.162-2.719-1.295-.365-.133-.631-.199-.897.199-.266.398-1.031 1.295-1.264 1.561-.233.266-.465.299-.863.1-.398-.199-1.681-.62-3.202-1.977-1.183-1.056-1.981-2.36-2.214-2.758-.233-.398-.025-.613.175-.811.18-.178.398-.465.597-.698.199-.233.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.777-.653-.672-.897-.684l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.395 1.363-1.395 3.325s1.428 3.857 1.627 4.123c.199.266 2.81 4.29 6.808 6.017.951.411 1.694.656 2.272.839.955.304 1.824.261 2.511.158.766-.114 2.354-.962 2.686-1.891.332-.929.332-1.727.232-1.892-.099-.165-.365-.265-.763-.464z" />
                                </svg>
                                Escribir por WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            {selectedCategory && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setSelectedCategory(null)}
                    />

                    {/* Modal */}
                    <div className="relative bg-[#2b1e16] text-[#f5f3ef] w-11/12 max-w-lg p-8 border-2 border-[#5a3e2b] shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-serif tracking-widest">
                                {selectedCategory}
                            </h2>
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="text-xl"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="space-y-4">
                            {menuData[selectedCategory]?.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex justify-between border-b border-[#5a3e2b] pb-2"
                                >
                                    <span className="uppercase tracking-wider">
                                        {item.name}
                                    </span>
                                    <span className="text-[#c2a25d]">
                                        ${item.price}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <style>
                        {`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                `}
                    </style>
                </div>
            )}

            {/* FOOTER */}
            <footer className="bg-[#0f0f0f] text-[#f5f3ef] border-t border-[#5a3e2b]">
                {/* Main footer content */}
                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Columna 1 - Marca */}
                        <div className="flex flex-col gap-4">
                            <p className="text-2xl uppercase font-serif tracking-[0.35em] font-semibold">
                                El Perico Crudo
                            </p>
                            <div className="w-10 h-px bg-[#c2a25d]" />
                            <p className="text-[#f5f3ef]/50 font-light leading-relaxed italic text-sm">
                                Un espacio donde el buen sabor y la buena vibra
                                se juntan. Ven, come, disfruta.
                            </p>
                            {/* Redes sociales */}
                            <div className="flex gap-4 mt-2">
                                <a
                                    href="#"
                                    className="w-9 h-9 border border-[#5a3e2b] flex items-center justify-center hover:border-[#c2a25d] hover:text-[#c2a25d] transition-all duration-300 text-sm"
                                    aria-label="Instagram"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://wa.me/527770000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 border border-[#5a3e2b] flex items-center justify-center hover:border-[#c2a25d] hover:text-[#c2a25d] transition-all duration-300 text-sm"
                                    aria-label="WhatsApp"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 fill-current"
                                        viewBox="0 0 32 32"
                                    >
                                        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.77L0 32l8.454-2.007A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.769-1.848l-.484-.287-5.016 1.191 1.26-4.893-.317-.502A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.354-1.162-2.719-1.295-.365-.133-.631-.199-.897.199-.266.398-1.031 1.295-1.264 1.561-.233.266-.465.299-.863.1-.398-.199-1.681-.62-3.202-1.977-1.183-1.056-1.981-2.36-2.214-2.758-.233-.398-.025-.613.175-.811.18-.178.398-.465.597-.698.199-.233.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.96-.324-.777-.653-.672-.897-.684l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.395 1.363-1.395 3.325s1.428 3.857 1.627 4.123c.199.266 2.81 4.29 6.808 6.017.951.411 1.694.656 2.272.839.955.304 1.824.261 2.511.158.766-.114 2.354-.962 2.686-1.891.332-.929.332-1.727.232-1.892-.099-.165-.365-.265-.763-.464z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="w-9 h-9 border border-[#5a3e2b] flex items-center justify-center hover:border-[#c2a25d] hover:text-[#c2a25d] transition-all duration-300 text-sm"
                                    aria-label="Facebook"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-4 h-4 fill-current"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Columna 2 - Navegación */}
                        <div className="flex flex-col gap-4">
                            <p className="text-xs uppercase tracking-[0.5em] text-[#c2a25d] mb-2">
                                Navegación
                            </p>
                            <div className="w-10 h-px bg-[#5a3e2b]" />
                            <nav className="flex flex-col gap-3 mt-2">
                                {[
                                    "Inicio",
                                    "Sobre Nosotros",
                                    "Nuestro Menú",
                                    "Contacto",
                                ].map((link, i) => (
                                    <a
                                        key={i}
                                        href={
                                            [
                                                "#",
                                                "#nosotros",
                                                "#menu",
                                                "#contacto",
                                            ][i]
                                        }
                                        className="text-[#f5f3ef]/50 hover:text-[#c2a25d] uppercase tracking-widest text-sm transition-colors duration-300 w-fit"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        {/* Columna 3 - Horarios */}
                        <div className="flex flex-col gap-4">
                            <p className="text-xs uppercase tracking-[0.5em] text-[#c2a25d] mb-2">
                                Horarios
                            </p>
                            <div className="w-10 h-px bg-[#5a3e2b]" />
                            <div className="flex flex-col gap-3 mt-2">
                                {[
                                    {
                                        day: "Lunes – Viernes",
                                        hours: "8:00am – 10:00pm",
                                    },
                                    {
                                        day: "Sábado",
                                        hours: "8:00am – 11:00pm",
                                    },
                                    {
                                        day: "Domingo",
                                        hours: "8:00am – 10:00pm",
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between border-b border-[#5a3e2b]/40 pb-2"
                                    >
                                        <span className="text-[#f5f3ef]/50 text-sm font-light">
                                            {item.day}
                                        </span>
                                        <span className="text-[#c2a25d] text-sm tracking-wider">
                                            {item.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Dirección */}
                            <div className="mt-4 pt-4 border-t border-[#5a3e2b]/40">
                                <p className="text-[#f5f3ef]/30 uppercase tracking-[0.3em] text-xs mb-1">
                                    Dirección
                                </p>
                                <p className="text-[#f5f3ef]/50 text-sm font-light">
                                México, México, México
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[#5a3e2b] py-6 px-4">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
                        <p className="text-[#f5f3ef]/20 text-xs uppercase tracking-widest">
                            © {new Date().getFullYear()} El Perico Crudo. Todos
                            los derechos reservados.
                        </p>
                        <p className="text-[#5a3e2b] text-xs uppercase tracking-widest">
                        México, México
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
