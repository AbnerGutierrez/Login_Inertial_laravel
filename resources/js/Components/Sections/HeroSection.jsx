import useInView from "@/hooks/useInView";
export default function HeroSection(id) {
    const [ref, visible] = useInView({ threshold: 0.2});
    return (
        <section
        id={id}
            ref={ref}
            className={`bg-white reveal ${visible ? "show" : ""}`}
        >
            <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:gap-12">
                <div className="flex-1 text-center  lg:text-start">
                    <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl leading-tight">
                        {" "}
                        <span className="text-indigo-600">
                            Desarrollo web que impulsan tu crecimiento
                        </span>
                    </h1>

                    <p className="mt-4 text-lg text-gray-600  text-start lg:text-start">
                        Desde landing pages efectivas hasta sistemas web
                        totalmente personalizados.{" "}
                    </p>

                    <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                        <a
                            href="#loQueHacemos"
                            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition"
                        >
                            Saber mas
                        </a>

                        <a
                            href="#costosYplanes"
                            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition"
                        >
                            Costos y planes
                        </a>
                    </div>
                </div>

                <div className="flex-1 mt-12 lg:mt-0  ">
                    <img
                        src="https://i.pinimg.com/1200x/92/99/f8/9299f805b25f034bdfe4c281a64acbad.jpg"
                        alt="Hero image"
                        className="w-full rounded-3xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
