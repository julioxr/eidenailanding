"use client";
import { useState } from "react";
import AlbumImage from "@/components/album/AlbumImage";
import AlbumTextCard from "@/components/album/AlbumTextCard";
import { FaRegCircle } from "react-icons/fa";
import AlbumData from "../../../data/datos.json";
import Song from "@/components/song/Song";

const Album = () => {
    const [showLyrics, setShowLyrics] = useState(false);
    const [song, setSong] = useState({});

    const handleLyrics = async (title) => {
        const filteredSong = await AlbumData.find((song) => {
            return song.titulo == title;
        });
        setShowLyrics(true);
        setSong(filteredSong);
    };

    return (
        <>
            <section className="snap-y snap-mandatory h-screen w-screen text-4xl overflow-x-hidden text-white relative">
                {/* Circulos de guia */}
                <div
                    id="dots"
                    className="fixed right-8 z-20 flex flex-col items-center justify-center text-2xl gap-8 h-screen"
                >
                    <FaRegCircle />
                    <FaRegCircle />
                    <FaRegCircle />
                    <FaRegCircle />
                    <FaRegCircle />
                    <FaRegCircle />
                </div>

                {/* Componente con la letra y data de la cancion */}

                {showLyrics && (
                    <Song setShowLyrics={setShowLyrics} song={song} />
                )}

                {/* Imagen 6 */}
                <AlbumImage background="back_6.jpg">
                    <div
                        className="absolute bottom-24 left-8"
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
                        className="absolute top-8 right-8"
                        onClick={() => handleLyrics("Canto de la Rama")}
                    >
                        <AlbumTextCard
                            title="Canto de la Rama"
                            subtitle="Vidala"
                        />
                    </div>
                    <div
                        className="absolute bottom-16 right-8"
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
                        className="absolute bottom-20 left-8"
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
                        className="absolute bottom-20 right-8"
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
                        className="absolute top-20 left-8"
                        onClick={() => handleLyrics("Soledad - Jujuy 1941")}
                    >
                        <AlbumTextCard
                            title="Soledad - Jujuy 1941"
                            subtitle="Aire litoraleño"
                        />
                    </div>
                    <div
                        className="absolute bottom-80 right-8"
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
                <AlbumImage background="back_1.jpg">
                    <div
                        className="absolute top-8 right-8"
                        onClick={() => handleLyrics("Esta tonada doy")}
                    >
                        <AlbumTextCard
                            title="Esta tonada doy"
                            subtitle="Aire de tonada"
                        />
                    </div>
                    <div
                        className="absolute bottom-16 left-8 cursor-pointer"
                        onClick={() => handleLyrics("Peón Viñador")}
                    >
                        <AlbumTextCard title="Peón Viñador" subtitle="Chaya" />
                    </div>
                </AlbumImage>
            </section>
        </>
    );
};

export default Album;
