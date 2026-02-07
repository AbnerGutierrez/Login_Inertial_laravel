import useInView from "@/hooks/useInView";

export default function Contact({ id }) {
    const [ref, visible] = useInView({ threshold: 0.2 });

    return (
        <section
            ref={ref}
            id={id}
            className={`py-24 bg-gradient-to-t from-indigo-100 to-white reveal ${
                visible ? "show" : ""
            }`}
        >
            <div className="max-w-5xl mx-auto px-6 text-center">
                {/* TITULO */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Contáctanos
                </h2>

                <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
                    Estamos disponibles para ayudarte. Escríbenos por WhatsApp o
                    envíanos un correo y te responderemos lo antes posible.
                </p>

                {/* CONTACTOS PRINCIPALES */}
                <div className="grid gap-8 md:grid-cols-2">
                    {/* WHATSAPP */}
                    <a
                        href="https://wa.me/527341330970"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-left border"
                    >
                        <div className="flex items-center gap-5 mb-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                                alt="WhatsApp"
                                className="w-14 h-14"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    WhatsApp
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Respuesta rápida
                                </p>
                            </div>
                        </div>

                        <p className="text-lg font-medium text-gray-700">
                            +52 734 133 09 70
                        </p>

                        <span className="inline-block mt-4 text-green-600 font-semibold group-hover:underline">
                            Enviar mensaje →
                        </span>
                    </a>

                    {/* EMAIL */}
                    <a
                        href="mailto:lunadevbusiness@gmail.com"
                        className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-left border"
                    >
                        <div className="flex items-center gap-5 mb-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                                alt="Correo electrónico"
                                className="w-14 h-14"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    Correo electrónico
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Atención personalizada
                                </p>
                            </div>
                        </div>

                        <p className="text-lg font-medium text-gray-700">
                            lunadevbusiness@gmail.com
                        </p>

                        <span className="inline-block mt-4 text-indigo-600 font-semibold group-hover:underline">
                            Enviar correo →
                        </span>
                    </a>
                </div>

                {/* TEXTO FINAL */}
                <p className="text-sm text-gray-500 mt-16">
                    Atención 24/7 · Soporte humano · Respuestas claras
                </p>
            </div>
        </section>
    );
}
