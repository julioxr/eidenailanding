"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import DiscName from "@/components/svg/DiscName";
import SpotifyLogo from "@/components/svg/SpotifyLogo";

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAndroid, setIsAndroid] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const userAgent = navigator.userAgent;
            setIsAndroid(/Android/i.test(userAgent));
        }
    }, []);

    return (
        <section className="bg-mainBlue flex flex-col bg-[url('/estrellas.svg')] relative text-white">
            <div className="h-full w-full absolute z-10 ">
                <Image
                    src="/background.png"
                    alt=""
                    className="absolute h-4/5 object-cover z-10 xl:right-12"
                    height={200}
                    width={800}
                />
            </div>
            <div className="bg-black/60 min-h-[calc(100vh-90px)] z-30">
                <section className="flex flex-col gap-8 justify-center items-center pt-12 h-full z-20 xl:items-start xl:container xl:mx-auto">
                    <div className="w-48 flex justify-center font-fuentelato text-5xl z-20 xl:w-72 xl:pl-8">
                        <h1 className="text-right xl:text-7xl">
                            NUESTRO ALBUM
                        </h1>
                        {/* <h2>ALBUM</h2> */}
                    </div>

                    <div className="max-w-md px-9 z-20 flex flex-col xl:px-0 xl:max-w-2xl">
                        <div>
                            <p
                                className={
                                    isAndroid
                                        ? isOpen
                                            ? "line-clamp-none"
                                            : "line-clamp-3"
                                        : "line-clamp-none"
                                }
                            >
                                <span>
                                    &quot;Mudando Coplas&quot; tomó vida entre
                                    marzo y agosto de 2022 en Estudio Diapasón,
                                    provincia de Mendoza con el desafío de
                                    combinar horarios y actividades de por
                                    medio, logramos reflejar la calidez y el
                                    cariño con el que trabajamos, grabamos y
                                    creamos.
                                </span>

                                <br />
                                <br />
                                <span className="mt-2">
                                    Javier Ledda estuvo a nuestro lado, no solo
                                    técnica sino emocionalmente, compartiendo
                                    mateadas y haciéndonos sentir como en casa.
                                    En &quot;Esta tonada doy&quot;, nos honró
                                    con su talento en las guitarras y el
                                    guitarrón. Además, durante el verano de
                                    2023, se encargó de darle el toque final con
                                    la masterización, ¡siempre al tanto de cada
                                    idea que se nos ocurría!.
                                </span>
                                <br />
                                <br />
                                <span className="mt-2">
                                    Las sesiones casi siempre fueron de mañana.
                                    Lo que tal vez le dé al disco un cierto
                                    toque de relax. Pero el amor y la dedicación
                                    con el que nos pusimos a disposición para
                                    recrear las canciones que tanto amamos,
                                    están ahí, libres y frescas, con la
                                    intención de renovarse para ustedes.
                                </span>
                            </p>
                        </div>

                        <span
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                            className="text-green-500 underline self-end z-20 mt-2 cursor-pointer"
                        >
                            {isAndroid && (isOpen ? "Leer menos" : "Leer más")}
                        </span>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-8 xl:flex-row xl:w-full xl:justify-between">
                        <div className="z-20 mt-4">
                            <a href="https://open.spotify.com/intl-es/artist/71baCB6blbKsE4HjrWbUZn?si=vxEtBkiRTryt3cmEdKi_ng">
                                <button className="flex bg-[#1DBC45] gap-2 items-center py-3 px-8 rounded-3xl justify-self-end">
                                    <h3>Eidenai en</h3>
                                    <SpotifyLogo />
                                </button>
                            </a>
                        </div>
                        <div className="z-20 mt-4 pb-12">
                            <DiscName />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Hero;
