import Image from "next/image";
import DiscName from "@/components/svg/DiscName";
import SpotifyLogo from "@/components/svg/SpotifyLogo";

const Hero = () => {
    return (
        <section className="bg-mainBlue min-h-[calc(100vh-90px)] flex flex-col bg-[url('/estrellas.svg')] relative">
            <div className="h-full w-full absolute z-10">
                <img
                    src="/background.png"
                    alt=""
                    className="absolute h-4/5 object-cover z-10"
                />
            </div>
            <div className="bg-black/40 min-h-[calc(100vh-90px)] z-30">
                <section className="flex flex-col gap-8 justify-center items-center pt-12 h-full  z-20">
                    <div className="w-48 flex justify-center font-fuentelato text-5xl z-20">
                        <h1 className="text-right">NUESTRO ALBUM</h1>
                        {/* <h2>ALBUM</h2> */}
                    </div>

                    <div className="flex flex-col gap-4 max-w-md px-9 z-20">
                        <p className="">
                            "Mudando Coplas" tomó vida entre marzo y agosto de
                            2022 en Estudio Diapasón, provincia de Mendoza...{" "}
                            <br />
                            {/* Con el desafío de combinar horarios y actividades de
                            por medio, logramos reflejar la calidez y el cariño
                            con el que trabajamos, grabamos y creamos. */}
                        </p>
                        <p className="hidden">
                            Javier Ledda estuvo a nuestro lado, no solo técnica
                            sino emocionalmente, compartiendo mateadas y
                            haciéndonos sentir como en casa. En "Esta tonada
                            doy", nos honró con su talento en las guitarras y el
                            guitarrón. Además, durante el verano de 2023, se
                            encargó de darle el toque final con la
                            masterización, ¡siempre al tanto de cada idea que se
                            nos ocurría!.
                        </p>
                        <p className="hidden">
                            Las sesiones casi siempre fueron de mañana. Lo que
                            tal vez le dé al disco un cierto toque de relax.
                            Pero el amor y la dedicación con el que nos pusimos
                            a disposición para recrear las canciones que tanto
                            amamos, están ahí, libres y frescas, con la
                            intención de renovarse para ustedes.
                        </p>
                        <span className="text-green-500 underline self-end z-20 -mt-2">
                            Leer más
                        </span>
                    </div>

                    <div className="z-20 mt-4">
                        <a href="https://open.spotify.com/intl-es/artist/71baCB6blbKsE4HjrWbUZn?si=vxEtBkiRTryt3cmEdKi_ng">
                            <button className="flex bg-[#1DBC45] gap-2 items-center py-3 px-8 rounded-3xl justify-self-end">
                                <h3>Eidenai en</h3>
                                <SpotifyLogo />
                            </button>
                        </a>
                    </div>
                    <div className="z-20 mt-4">
                        <DiscName />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Hero;
