import { Head, Link } from "@inertiajs/react";
import HeroSection from "@/Components/Sections/HeroSection";
import InfoSection from "@/Components/Sections/InfoSection";
import PrecioSection from "@/Components/Sections/PrecioSection";
import ClienteSection from "@/Components/Sections/ClienteSection";
import TestimonioSection from "@/Components/Sections/TestimonioSection";
import VisitLayout from "@/Layouts/VisitLayout";
import Contact from "@/Components/Sections/Contact";
import WebTypes from "@/Components/Sections/WebTypes";
export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Inicio" />
            <VisitLayout>
                <div>
                    <HeroSection id={"inicio"} />
                    <InfoSection
                        baColor={false}
                        id={"porquenecesitas"}
                        imagen={"/images/undraw_questions.png"}
                        titulo={"¿ Por que necesitas una pagina web ?"}
                        descripcion={`Es tu mejor herramienta para tener presencia en internet, captar clientes, mostrar lo que haces y diferenciarte de la competencia.`}
                        reverse={false}
                    />
                    <WebTypes
                        id={"tipos"}
                        webTypes={[
                            {
                                titulo: "Landing Page",
                                icono: "/images/landing.png",
                                descripcion:
                                    "Ideal para promocionar un producto, servicio o campaña específica.",
                                usos: [
                                    "Captar clientes",
                                    "Promociones",
                                    "Publicidad digital",
                                ],
                            },
                            {
                                titulo: "Página Corporativa",
                                icono: "/images/corporative.png",
                                descripcion:
                                    "Perfecta para empresas que buscan presencia profesional en internet.",
                                usos: [
                                    "Mostrar servicios",
                                    "Generar confianza",
                                    "Marca profesional",
                                ],
                            },
                            {
                                titulo: "Tienda en Línea",
                                icono: "/images/tienda.png",
                                descripcion:
                                    "Vende tus productos en línea con pagos y gestión de pedidos.",
                                usos: [
                                    "Ventas 24/7",
                                    "Pagos en línea",
                                    "Catálogo de productos",
                                ],
                            },
                            {
                                titulo: "Sistema Web",
                                icono: "/images/sistema.png",
                                descripcion:
                                    "Soluciones personalizadas para automatizar procesos internos.",
                                usos: [
                                    "Panel administrativo",
                                    "Gestión de usuarios",
                                    "Procesos internos",
                                ],
                            },
                            {
                                titulo: "Portafolio Web",
                                icono: "/images/portafolio.png",
                                descripcion:
                                    "Presenta tu experiencia, proyectos y habilidades de forma profesional para atraer clientes o conseguir oportunidades laborales.",
                                usos: [
                                    "Mostrar proyectos y trabajos realizados",
                                    "Destacar habilidades y tecnologías",
                                    "Atraer reclutadores o clientes",
                                ],
                            },
                            {
                                titulo: "¿Necesitas otro tipo de sistema?",
                                icono: "/images/mensaje.png",
                                descripcion:
                                    "Desarrollamos sistemas web totalmente personalizados según las necesidades de tu negocio o proyecto.",
                                usos: [
                                    "Sistemas a medida",
                                    "Automatización de procesos",
                                    "Integraciones con APIs",
                                ],
                                cta: "Cuéntanos tu idea",
                            },
                        ]}
                    />

                    <InfoSection
                        baColor={false}
                        id={"porqueluna"}
                        imagen={"/images/undraw_business.png"}
                        titulo={"¿Por qué elegir LunaDev?"}
                        descripcion={`En LunaDev desarrollamos soluciones digitales a la medida de tu negocio.
                        Nos enfocamos en entender tus procesos para crear aplicaciones web
                        eficientes, seguras y fáciles de usar que realmente aporten valor.`}
                        reverse={false}
                    />
                    <PrecioSection />

                   {/* <TestimonioSection
                    id={"ourwork"}
                        testimonios={[
                            {
                                nombre: "MMM Galeana",
                                rol: "Iglesia",
                                foto: "https://mmmgaleana.com/images/hero-iglesia.png",
                                testimonio:
                                    "Una landing creada para informar, conectar y comunicar de manera clara con nuestra comunidad.",
                                url: "https://mmmgaleana.com/",
                            },
                            {
                                nombre: "Alejandro Flores",
                                rol: "Emprendedor",
                                foto: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                                testimonio:
                                    "LuneDev me permitio conectar con clientes y obtener mis primeras ventas.",
                            },
                            {
                                nombre: "Ana Torres",
                                rol: "Actriz",
                                foto: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                                testimonio:
                                    "Mi portafolio quedó increíble y me ha ayudado a conseguir múltiples entrevistas profesionales.",
                            },
                        ]}
                    />*/}
                    <Contact
                        id={"contacto"}
                        testimonios={[
                            {
                                nombre: "WhatsApp",
                                rol: "",
                                foto: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                                estrellas: 0,
                                testimonio: "734-133-09-70",
                            },
                            {
                                nombre: "Correo electronico",
                                rol: "",
                                foto: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                                estrellas: 0,
                                testimonio:
                                    "Mi landing quedó increíble, moderna y rápida. El mejor servicio que he probado.",
                            },
                            {
                                nombre: "Por nuestra web",
                                rol: "",
                                foto: "https://cdn-icons-png.flaticon.com/512/219/219983.png",
                                estrellas: 0,
                                testimonio:
                                    "Excelente trato y comunicación. Me ayudaron a crear mi primera página web sin complicaciones.",
                            },
                        ]}
                    />
                </div>
            </VisitLayout>
        </>
    );
}
