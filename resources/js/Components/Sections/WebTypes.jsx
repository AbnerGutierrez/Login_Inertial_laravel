import useInView from "@/hooks/useInView";

export default function WebTypes({ webTypes = [], id }) {
    const [ref, visible] = useInView({ threshold: 0.2 });

    return (
        <section
            ref={ref}
            className={`py-20 bg-indigo-100 reveal ${visible ? "show" : ""}`}
            id={id}
        >
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-black md:text-5xl leading-tight mb-2">
                    ¿Qué tipo de web necesito?
                </h2>

                <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                    Existen diferentes tipos de páginas web, cada una diseñada
                    para cumplir objetivos específicos según las necesidades de
                    tu negocio.
                </p>

                {/* GRID */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {webTypes.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-2xl p-6 text-left border hover:shadow-xl transition"
                        >
                            {/* ICONO */}
                            <div className="mb-4">
                                <img
                                    src={item.icono}
                                    alt={item.titulo}
                                    className="w-16 h-16"
                                />
                            </div>

                            {/* TITULO */}
                            <h3 className="text-xl font-semibold mb-2">
                                {item.titulo}
                            </h3>

                            {/* DESCRIPCION */}
                            <p className="text-gray-600 mb-4">
                                {item.descripcion}
                            </p>

                            {/* USOS */}
                            {item.usos && (
                                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                                    {item.usos.map((uso, i) => (
                                        <li key={i}>• {uso}</li>
                                    ))}
                                </ul>
                            )}

                            {/* CTA */}
                            <a
                                href="#contacto"
                                className="inline-block text-indigo-600 font-medium text-sm hover:cursor-pointer hover:font-extrabold"
                            >
                                Saber más →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
