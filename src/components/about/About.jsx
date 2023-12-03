"use client";
import { useState, useEffect } from "react";

const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAndroid, setIsAndroid] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userAgent = navigator.userAgent;
            setIsAndroid(/Android/i.test(userAgent));
        }
    }, []);

    return (
        <section className="flex flex-col gap-8 justify-center items-center pt-12 h-full z-20 container mx-auto bg-mainBlue pb-24 text-white">
            <div className="w-full px-14 flex flex-col font-fuentelato text-5xl z-20 xl:w-auto xl:self-start xl:text-7xl">
                <h2 className="self-start">SOMOS</h2>
                <h2 className="self-end">EIDENAI</h2>
            </div>

            <div className="px-8 flex flex-col gap-4 font-fuenteroboto">
                <p
                    className={`transition-height ease-in-out duration-500 ${
                        isOpen ? "line-clamp-none" : "line-clamp-12"
                    }`}
                >
                    Este proyecto musical comenzó como un dúo conformado por Emi
                    Esmoris y Gugui Molina, originarios de Zárate, Buenos Aires,
                    y Guaymallén, Mendoza, respectivamente. En 2017, se unió al
                    proyecto Ary Rodríguez, permitiendo arreglos vocales a tres
                    voces. Y la última incorporación fue Iñaki Abarzúa en flauta
                    traversa, en 2020. Nuestro repertorio se basa principalmente
                    en arreglos de obras influyentes del cancionero folclórico
                    argentino, poniendo un énfasis especial en el aspecto vocal,
                    que es la característica distintiva de “Eidenai”. Esto no
                    sólo demuestra nuestro profundo respeto por la rica herencia
                    musical de Argentina, sino también nuestro deseo de aportar
                    una nueva dimensión a las composiciones clásicas a través de
                    arreglos vocales únicos. Nuestra dedicación a la
                    reinterpretación y a la experimentación dentro de la música
                    tradicional argentina promete un emocionante viaje musical
                    para nuestros oyentes. En este camino nos acompañaron Charly
                    Bueno, Adrián González, Javier Ledda, La orquesta con brío y
                    Alejo Viard.
                </p>

                <div
                    className={
                        isAndroid
                            ? isOpen
                                ? "line-clamp-none"
                                : "line-clamp-3"
                            : "line-clamp-none"
                    }
                >
                    <h3 className="font-medium text-lg">¿Qué es Eidenai?</h3>
                    <p>
                        ¿Suena raro no? ¿qué significa? Eidenai (εἰδέναι), se
                        traduce como “Darse cuenta”, “‘haber visto”, “yo sé lo
                        que he visto”, de ahí pasó a significar “saber,
                        comprender, reconocer” que transformado en Eidética,
                        filosóficamente hablando, es poder percibir la esencia.
                        Eidenai es un verbo en infinitivo. Proviene de la
                        palabra “Eidos” (εἶδος) que significa idea “el aspecto
                        que presenta una cosa”, “su forma típica”, “prototipo,
                        modelo, arquetipo de una cosa”. Debe tenerse en cuenta,
                        sin embargo, que esta “visión” no es sólo, la que
                        alguien tiene de algo, es un completo abstracto; la
                        “visión” a la que se refiere la ἰδέα (idea) griega es
                        más bien el aspecto o figura que ofrece una cosa al
                        verla. ἰδέα (idea) significó luego tanto el aspecto de
                        la cosa como el hecho de “verla”. Cuando se acentuó lo
                        último la “idea” designó lo que se “ve” de una cosa
                        cuando se contempla cierto aspecto de ésta.
                    </p>
                    <h3 className="font-medium text-lg">
                        ¿Qué queremos decirles con esto?{" "}
                    </h3>
                    <p>
                        La construcción, paso a paso, de las palabras denota
                        transformaciones y evoluciones en sus significados. Es
                        un símil con la música, con nuestra música. Nuestro
                        grupo fue tejiendo ideas desde el 2017, que nos
                        encontramos las tres voces que conformaron la esencia
                        del sonido de Eidenai. Poco a poco fuimos descubriendo
                        nuestro estilo, nuestro camino, y sobre todo ganas,
                        fuerzas y aprendizaje. En el 2020 edificamos algo mucho
                        más sólido y pudimos, desde allí, producir en 2022 este
                        hermoso disco. Esperamos que lo disfruten con la misma
                        alegría con la que lo grabamos.
                    </p>
                </div>
                <span
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    className="text-green-500 underline self-end z-20 -mt-2 cursor-pointer"
                >
                    {isAndroid && (isOpen ? "Leer menos" : "Leer más")}
                </span>
            </div>
        </section>
    );
};

export default About;
