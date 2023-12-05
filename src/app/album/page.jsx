"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import AlbumImage from "@/components/album/AlbumImage";
import AlbumTextCard from "@/components/album/AlbumTextCard";
import AlbumData from "../../../data/datos.json";
import Song from "@/components/song/Song";
import Loader from "@/components/loader/Loader";
import { IoIosArrowBack } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";

const Album = () => {
    const lastBackgroundRef = useRef(null);
    const [showLoader, setShowLoader] = useState(true);
    const [showLyrics, setShowLyrics] = useState(false);
    const [song, setSong] = useState({});

    const handleLyrics = async (title) => {
        const filteredSong = await AlbumData.find((song) => {
            return song.titulo == title;
        });
        setShowLyrics(true);
        setSong(filteredSong);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowLoader(false);
            if (lastBackgroundRef.current) {
                lastBackgroundRef.current.scrollIntoView({
                    block: "end",
                });
            }
        }, 1500); // Simula una carga de 1 segundo. Ajusta según sea necesario.

        return () => clearTimeout(timeout);
    }, [lastBackgroundRef]);

    return (
        <>
            {showLoader && <Loader />}

            <section className="snap-y snap-mandatory h-screen w-screen text-4xl overflow-x-hidden text-white relative overflow-y-scroll no-scrollbar">
                {/* Componente con la letra y data de la cancion */}
                <div className="fixed z-30 flex items-center justify-center ml-4 mt-4 cursor-pointer bg-black/20 p-2 rounded-full">
                    <IoIosArrowBack className="text-2xl" />
                    <Link className="text-base pl-1" href="/">
                        Volver
                    </Link>
                </div>
                {showLyrics && (
                    <Song setShowLyrics={setShowLyrics} song={song} />
                )}

                {/* Imagen 6 */}
                <AlbumImage background="back_6.jpg">
                    <div
                        className="absolute bottom-24 left-8 xl:left-96 cursor-pointer"
                        onClick={() => handleLyrics("La sixto Violín")}
                    >
                        <AlbumTextCard
                            title="La sixto Violín"
                            subtitle="Chacarera"
                        />
                    </div>
                </AlbumImage>

                {/* Imagen 5 */}
                <AlbumImage background="back_5.jpg">
                    <div
                        className="absolute top-20 right-8 xl:right-auto xl:left-96 cursor-pointer"
                        onClick={() => handleLyrics("Canto de la Rama")}
                    >
                        <AlbumTextCard
                            title="Canto de la Rama"
                            subtitle="Vidala"
                        />
                    </div>
                    <div
                        className="absolute bottom-16 right-8 xl:right-96 cursor-pointer"
                        onClick={() => handleLyrics("Garzas Viajeras")}
                    >
                        <AlbumTextCard
                            title="Garzas Viajeras"
                            subtitle="Rasguido doble"
                        />
                    </div>
                </AlbumImage>

                {/* Imagen 4 */}
                <AlbumImage background="back_4.jpg">
                    <div
                        className="absolute bottom-20 left-8 xl:left-96 cursor-pointer"
                        onClick={() => handleLyrics("Posadeña Linda")}
                    >
                        <AlbumTextCard
                            title="Posadeña Linda"
                            subtitle="Chamamé-Cancion"
                        />
                    </div>
                </AlbumImage>

                {/* Imagen 3 */}
                <AlbumImage background="back_3.jpg">
                    <div
                        className="absolute bottom-20 right-8 xl:right-96 cursor-pointer"
                        onClick={() => handleLyrics("Amanecer")}
                    >
                        <AlbumTextCard
                            title="Amanecer"
                            subtitle="Aire litoraleño"
                        />
                    </div>
                </AlbumImage>

                {/* Imagen 2 */}
                <AlbumImage background="back_2.jpg">
                    <div
                        className="absolute top-20 left-8 xl:left-96 cursor-pointer"
                        onClick={() => handleLyrics("Soledad - Jujuy 1941")}
                    >
                        <AlbumTextCard
                            title="Soledad - Jujuy 1941"
                            // subtitle="Aire litoraleño"
                        />
                    </div>
                    <div
                        className="absolute bottom-80 right-8 xl:right-96 cursor-pointer"
                        onClick={() =>
                            handleLyrics("La Plumita - La cocinerita")
                        }
                    >
                        <AlbumTextCard
                            title="La Plumita - La cocinerita"
                            subtitle="Selección de cuecas norteñas"
                        />
                    </div>
                </AlbumImage>

                {/* Imagen 1 */}
                <div ref={lastBackgroundRef}>
                    <AlbumImage background="back_1.jpg">
                        <div
                            className="absolute top-20 right-8 xl:right-96 cursor-pointer"
                            onClick={() => handleLyrics("Esta tonada doy")}
                        >
                            <AlbumTextCard
                                title="Esta tonada doy"
                                subtitle="Aire de tonada"
                            />
                        </div>
                        <div
                            className="absolute bottom-16 left-8 xl:left-96 cursor-pointer"
                            onClick={() => handleLyrics("Peón Viñador")}
                        >
                            <AlbumTextCard
                                title="Peón Viñador"
                                subtitle="Chaya"
                            />
                        </div>
                    </AlbumImage>
                </div>
            </section>
        </>
    );
};

export default Album;
