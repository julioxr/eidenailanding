import AlbumImage from "@/components/album/AlbumImage";
import AlbumTextCard from "@/components/album/AlbumTextCard";

// const backgrounds = [
//     "back_6.jpg",
//     "back_5.jpg",
//     "back_4.jpg",
//     "back_3.jpg",
//     "back_2.jpg",
//     "back_1.jpg",
// ];

const Album = () => {
    return (
        <>
            <section className="snap-y snap-mandatory h-screen w-screen text-4xl overflow-x-hidden text-white">
                {/* Imagen 6 */}
                <AlbumImage background="back_6.jpg">
                    <div className="absolute bottom-24 left-8">
                        <AlbumTextCard
                            title="La Sixto violín"
                            subtitle="Chacarera"
                        />
                    </div>
                </AlbumImage>

                {/* Imagen 5 */}
                <AlbumImage background="back_5.jpg">
                    <div className="absolute top-8 right-8">
                        <AlbumTextCard
                            title="Canto en la rama"
                            subtitle="Vidala"
                        />
                    </div>
                    <div className="absolute bottom-16 right-8">
                        <AlbumTextCard
                            title="Garzas viajeras"
                            subtitle="Rasguido doble"
                        />
                    </div>
                </AlbumImage>

                {/* Imagen 4 */}
                <AlbumImage background="back_4.jpg">
                    <div className="absolute bottom-20 left-8">
                        <AlbumTextCard
                            title="Posadeña linda"
                            subtitle="Chamamé-Cancion"
                        />
                    </div>
                </AlbumImage>

                {/* Imagen 3 */}
                <AlbumImage background="back_3.jpg">
                    <div className="absolute bottom-20 right-8">
                        <AlbumTextCard
                            title="Amanecer"
                            subtitle="Aire litoraleño"
                        />
                    </div>
                </AlbumImage>

                {/* Imagen 2 */}
                <AlbumImage background="back_2.jpg">
                    <div className="absolute top-20 left-8">
                        <AlbumTextCard
                            title="Soledad, Jujuy 1941"
                            subtitle="Aire litoraleño"
                        />
                    </div>
                    <div className="absolute bottom-80 right-8">
                        <AlbumTextCard
                            title="La plumita - La cocinerita"
                            subtitle="Selección de cuecas norteñas"
                        />
                    </div>
                </AlbumImage>

                {/* Imagen 1 */}
                <AlbumImage background="back_1.jpg">
                    <div className="absolute top-8 right-8">
                        <AlbumTextCard
                            title="Esta tonada doy"
                            subtitle="Aire de tonada"
                        />
                    </div>
                    <div className="absolute bottom-16 left-8">
                        <AlbumTextCard title="Peón Viñador" subtitle="Chaya" />
                    </div>
                </AlbumImage>
            </section>
        </>
    );
};

export default Album;
