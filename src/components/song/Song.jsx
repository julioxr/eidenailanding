import React from "react";
import { CgClose } from "react-icons/cg";
import SpotifyLogo from "../svg/SpotifyLogo";
import DiscName from "../svg/DiscName";

const Song = ({ setShowLyrics, song }) => {
    console.log(song);
    const { titulo, tipo, letra, participan, autor, link } = song;
    return (
        <>
            <section className="fixed z-30 flex gap-4 flex-col xl:flex-row xl:justify-center xl:items-end px-4 pt-8 h-screen w-screen text-base overflow-y-auto bg-black/40 xl:bg-black/80 no-scrollbar">
                {/* Encabezado letra */}
                <div className="bg-black p-8 rounded-2xl xl:h-[calc(100vh-100px)] xl:overflow-auto xl:w-80 no-scrollbar xl:mb-16">
                    <div
                        className="absolute top-14 right-12 text-2xl"
                        onClick={() => setShowLyrics(false)}
                    >
                        <CgClose />
                    </div>
                    <h2 className="font-fuentelato font-bold text-2xl">
                        {titulo}
                    </h2>
                    <h3 className="font-fuentelato text-xs">{tipo}</h3>
                    <p className="font-fuenteroboto mt-4 font-normal whitespace-pre-wrap">
                        {letra}
                    </p>
                </div>

                {/* Participantes e info */}
                <div className="bg-black p-8 rounded-2xl mb-16 font-fuenteroboto text-xs xl:w-80 xl:h-64">
                    <h3 className="">PARTICIPAN: {participan}</h3>
                    <h3 className="mt-4">Letra y Música: {autor}</h3>
                    <div className="flex flex-col justify-center items-center gap-8 xl:flex-row xl:w-full xl:justify-between">
                        <div className="z-20 mt-4">
                            <a href={link}>
                                <button className="flex bg-[#1DBC45] gap-2 items-center py-3 px-8 rounded-3xl justify-self-end">
                                    <h3>Escucha en</h3>
                                    <SpotifyLogo />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Song;
