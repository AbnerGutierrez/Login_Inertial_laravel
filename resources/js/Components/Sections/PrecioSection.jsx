import CardPrecio from "./CardPrecio";
export default function PrecioSection() {
    return (
        <section className="bg-white" id="costosYplanes">
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-indigo-600 ">
                            Nuestros costos y planes
                        </h2>
                        <p className="mb-5 font-light  sm:text-xl ">
                            El precio depende del tipo de desarrollo que
                            requiera tu proyecto. Por eso, ofrecemos planes
                            diseñados para ajustarse a distintas necesidades.{" "}
                        </p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">
                        <CardPrecio
                            titulo={"Pago único"}
                            descripcion={
                                "Realiza un solo pago por el desarrollo de tu sitio web. Ideal si necesitas una web funcional sin mantenimiento continuo."
                            }
                            onClick={() => setSelectedCard("pago-unico")}
                            items={[
                                {
                                    texto: "Diseño web personalizado",
                                    disponible: true,
                                },
                                {
                                    texto: "Desarrollo web completo",
                                    disponible: true,
                                },
                                {
                                    texto: "Entrega del proyecto funcional",
                                    disponible: true,
                                },

                                {
                                    texto: "Soporte técnico continuo",
                                    disponible: false,
                                },
                                {
                                    texto: "Cambios o mejoras posteriores",
                                    disponible: false,
                                },
                                {
                                    texto: "Mantenimiento mensual",
                                    disponible: false,
                                },
                            ]}
                        />

                        <CardPrecio
                            titulo={"Pagos mensuales"}
                            descripcion={
                                "Modelo flexible con pagos mensuales que incluye soporte y mantenimiento continuo para tu sitio web."
                            }
                            onClick={() => setSelectedCard("mensual")}
                            items={[
                                {
                                    texto: "Diseño y desarrollo web",
                                    disponible: true,
                                },
                                {
                                    texto: "Soporte técnico mensual",
                                    disponible: true,
                                },
                                {
                                    texto: "Cambios y ajustes periódicos",
                                    disponible: true,
                                },
                                {
                                    texto: "Mantenimiento y actualizaciones",
                                    disponible: true,
                                },

                                {
                                    texto: "Contrato anual obligatorio",
                                    disponible: false,
                                },
                            ]}
                        />

                        <CardPrecio
                            titulo={"Pagos anuales"}
                            descripcion={
                                "La opción más completa para proyectos serios. Incluye soporte prioritario y mejoras continuas durante todo el año."
                            }
                            onClick={() => setSelectedCard("anual")}
                            items={[
                                {
                                    texto: "Diseño y desarrollo avanzado",
                                    disponible: true,
                                },
                                {
                                    texto: "Soporte técnico prioritario",
                                    disponible: true,
                                },
                                {
                                    texto: "Cambios y mejoras continuas",
                                    disponible: true,
                                },
                                {
                                    texto: "Mantenimiento y optimización",
                                    disponible: true,
                                },
                                {
                                    texto: "Ideal para sistemas y tiendas online",
                                    disponible: true,
                                },
                            ]}
                        />
                    </div>
                </div>
            </section>
        </section>
    );
}
