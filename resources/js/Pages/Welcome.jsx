import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Head title="Inicio" />
            <nav className="border-b border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
                    {/* Logo */}
                    <div className="text-xl font-semibold tracking-wide">
                        DesWeb
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
                            href="#sobreNosotros"
                            className="hover:text-gray-500 transition"
                        >
                            Sobre nosotros
                        </a>
                        <a
                            href="#loQueHacemos"
                            className="hover:text-gray-500 transition"
                        >
                            Lo que hacemos
                        </a>
                        <a
                            href="#costosYplanes"
                            className="hover:text-gray-500 transition"
                        >
                            Costos y planes
                        </a>
                        <Link
                            href={route("login")}
                            className="hover:text-gray-500 transition"
                        >
                            Iniciar sesión
                        </Link>
                        <Link
                            href={route("login")}
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
                    <Link
                        href={route("login")}
                        className="block hover:text-gray-500 py-1"
                    >
                        Sobre nosotros
                    </Link>
                    <Link
                        href={route("login")}
                        className="block hover:text-gray-500 py-1"
                    >
                        Lo que hacemos
                    </Link>
                    <Link
                        href={route("login")}
                        className="block hover:text-gray-500 py-1"
                    >
                        Costos y planes
                    </Link>
                    <Link
                        href={route("login")}
                        className="block hover:text-gray-500 py-1"
                    >
                        Iniciar sesión
                    </Link>
                    <Link
                        href={route("login")}
                        className="block hover:text-gray-500 py-1"
                    >
                        Registrarse
                    </Link>
                </div>
            </nav>
            <main>
                <section className="bg-white">
                    <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:gap-12">
                        <div className="flex-1 text-center lg:text-start">
                            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl leading-tight">
                                {" "}
                                <span className="text-indigo-600">
                                    Facilitamos tu trabajo
                                </span>
                            </h1>

                            <p className="mt-4 text-lg text-gray-600  text-start lg:text-start">
                                Desarrollo de aplicaciones web que facilitan tus
                                tareas y optimizan la administración de tu
                                negocio.
                            </p>

                            <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                                <a
                                    href="#"
                                    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
                                >
                                    Saber mas
                                </a>

                                <a
                                    href="#"
                                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition"
                                >
                                    Costos y planes
                                </a>
                            </div>
                        </div>

                        <div className="flex-1 mt-12 lg:mt-0 hidden lg:block">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                                alt="Hero image"
                                className="w-full rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-indigo-100" id="sobreNosotros">
                    <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:gap-12">
                        <div className="flex-1 mt-12 lg:mt-0 hidden lg:block ">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                                alt="Hero image"
                                className="w-full rounded-3xl shadow-lg"
                            />
                        </div>
                        <div className="flex-1 text-center lg:text-start">
                            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl leading-tight">
                                {" "}
                                <span className="text-indigo-600">
                                    Mejora tu productividad y toma de decisiones
                                </span>
                            </h1>

                            <p className="mt-4 text-lg text-gray-600  text-start lg:text-start">
                                Ofrecemos soluciones a los desafíos más comunes
                                de tu negocio. Centraliza toda la información
                                que necesitas para gestionar y administrar tus
                                operaciones.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-white">
                    <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:gap-12">
                        <div className="flex-1 text-center lg:text-start">
                            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl leading-tight">
                                {" "}
                                <span className="text-indigo-600">
                                    Mejora la experiencia de tus clientes
                                </span>
                            </h1>

                            <p className="mt-4 text-lg text-gray-600  text-start lg:text-start">
                                No solo tú obtienes beneficios: tus clientes
                                también disfrutan de una experiencia más ágil,
                                con la información y las herramientas necesarias
                                para realizar sus consultas y acciones de manera
                                rápida y sencilla.
                            </p>
                        </div>

                        <div className="flex-1 mt-12 lg:mt-0 hidden lg:block">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                                alt="Hero image"
                                className="w-full rounded-3xl shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-indigo-100">
                    <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:gap-12">
                        <div className="flex-1 mt-12 lg:mt-0 hidden lg:block">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                                alt="Hero image"
                                className="w-full rounded-3xl shadow-lg"
                            />
                        </div>

                        <div className="flex-1 text-center lg:text-start">
                            <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl leading-tight">
                                {" "}
                                <span className="text-indigo-600">
                                    ¿ Quines somos ?
                                </span>
                            </h1>

                            <p className="mt-4 text-lg text-gray-600  text-start lg:text-start">
                                Somos una empresa enfocada en ofrecer soluciones
                                reales a las necesidades de tu negocio. Gracias
                                a nuestro equipo de expertos, creamos
                                aplicaciones personalizadas que te permiten
                                gestionar de manera eficiente cualquier
                                actividad que necesites.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-white" id="costosYplanes">
                    <section className="">
                        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-indigo-600 ">
                                    Nuestros planes y costos
                                </h2>
                                <p className="mb-5 font-light  sm:text-xl ">
                                    Estos son nuestros planes más contratados.
                                    Consulta{" "}
                                    <a
                                        className="text-blue-600 hover:text-blue-800"
                                        href=""
                                    >
                                        otros planes
                                    </a>{" "}
                                    para conocer más opciones y precios
                                    adicionales.
                                </p>
                            </div>
                            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 ">
                                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-indigo-1000 rounded-lg shadow bg-indigo-100">
                                    <h3 className="mb-4 text-2xl font-semibold ">
                                        Pagina de aterizaje
                                    </h3>
                                    <p className="font-light  sm:text-lg ">
                                        Haz que una visita sea un nuevo cliente
                                    </p>
                                    <div className="flex justify-center items-baseline my-8">
                                        <span className="mr-2 text-4xl font-extrabold text-indigo-600">
                                            599 MXN
                                        </span>
                                        <span className="">/mensuales</span>
                                    </div>
                             
                                    <ul
                                        role="list"
                                        className="mb-8 space-y-4 text-left"
                                    >
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                            Configuración personalizada
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                            Actualizaciones ilimitadas
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                                <span className="">
                                                Atención al cliente 24/7
                                                </span>
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                                <span className="">
                                                Soporte durante todo el periodo contratado
                                                </span>
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                                <span className="">
                                                Comunicación continua y acompañamiento constante
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                    <a
                                        href="#"
                                        className=" bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        Saber más
                                    </a>
                                </div>

                                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-indigo-1000 rounded-lg shadow bg-indigo-100">
                                    <h3 className="mb-4 text-2xl font-semibold ">
                                        Pagina de aterizaje
                                    </h3>
                                    <p className="font-light  sm:text-lg ">
                                        Haz que una visita sea un nuevo cliente
                                    </p>
                                    <div className="flex justify-center items-baseline my-8">
                                        <span className="mr-2 text-4xl font-extrabold text-indigo-600">
                                            599 MXN
                                        </span>
                                        <span className="">/mensuales</span>
                                    </div>
                             
                                    <ul
                                        role="list"
                                        className="mb-8 space-y-4 text-left"
                                    >
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                            Configuración personalizada
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                            Actualizaciones ilimitadas
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                                <span className="">
                                                Atención al cliente 24/7
                                                </span>
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                                <span className="">
                                                Soporte durante todo el periodo contratado
                                                </span>
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                                <span className="">
                                                Comunicación continua y acompañamiento constante
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                    <a
                                        href="#"
                                        className=" bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        Saber más
                                    </a>
                                </div>

                                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-indigo-1000 rounded-lg shadow bg-indigo-100">
                                    <h3 className="mb-4 text-2xl font-semibold ">
                                        Pagina de aterizaje
                                    </h3>
                                    <p className="font-light  sm:text-lg ">
                                        Haz que una visita sea un nuevo cliente
                                    </p>
                                    <div className="flex justify-center items-baseline my-8">
                                        <span className="mr-2 text-4xl font-extrabold text-indigo-600">
                                            599 MXN
                                        </span>
                                        <span className="">/mensuales</span>
                                    </div>
                             
                                    <ul
                                        role="list"
                                        className="mb-8 space-y-4 text-left"
                                    >
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                            Configuración personalizada
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                            Actualizaciones ilimitadas
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                                <span className="">
                                                Atención al cliente 24/7
                                                </span>
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                                <span className="">
                                                Soporte durante todo el periodo contratado
                                                </span>
                                            </span>
                                        </li>
                                        <li className="flex items-center space-x-3">
                                            <svg
                                                className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"
                                                ></path>
                                            </svg>
                                            <span>
                                                <span className="">
                                                Comunicación continua y acompañamiento constante
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                    <a
                                        href="#"
                                        className=" bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        Saber más
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <footer className="bg-indigo-600 text-white py-10">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div>
                            <h2 className="text-2xl font-bold">DesWeb</h2>
                            <p className="mt-3 text-sm text-indigo-100">
                                Simplificamos tus procesos con soluciones
                                digitales modernas y profesionales para impulsar
                                el crecimiento de tu empresa.
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
                                <a
                                    href="#"
                                    className="hover:text-white text-xl"
                                >
                                    📘
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-white text-xl"
                                >
                                    📸
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-white text-xl"
                                >
                                    🎵
                                </a>
                                <a
                                    href="#"
                                    className="hover:text-white text-xl"
                                >
                                    🐦
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center text-indigo-200 text-sm mt-10 border-t border-indigo-500 pt-6">
                        © 2025 DesWeb. Todos los derechos reservados.
                    </div>
                </footer>
            </main>
        </>
    );
}
