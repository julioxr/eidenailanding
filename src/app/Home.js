import Burger from "@/components/svg/Burger";
import DiscName from "@/components/svg/DiscName";
import SpotifyLogo from "@/components/svg/SpotifyLogo";

export default function Home() {
    return (
        <main className="min-h-screen bg-green-500 gap-8">
            <header className="flex items-center justify-center bg-red-300 h-[90px] relative text-4xl font-bold tracking-widest">
                <h1>EIDENAI</h1>
                <div className="absolute right-8">
                    <Burger color="white" />
                </div>
            </header>
            <section className="bg-emerald-900">
                <h2>NUEVO ALBUM</h2>
                <p>
                    Queremos compartir nuestro nuevo álbum, nos inspiramos en...
                    porque ... y algo mas... luego invitamos al usuario a
                    escuchar el álbum al clickear el botón primario o descubrir
                    las canciones con el botón secundario.
                </p>
                <DiscName />
                <button className="flex bg-[#1DBC45] gap-2 items-center py-3 px-8 rounded-3xl">
                    <h3>Eidenai en</h3>
                    <SpotifyLogo />
                </button>
            </section>
            <section className="h-[300px] bg-yellow-200 text-black flex justify-center items-center">
                empty
            </section>
            <section>
                <h2>SOMOS EIDENAI</h2>
                <p>
                    ¿Qué es Eidenai? Eidenai (εἰδέναι), es una palabra griega,
                    que se traduce como "Darse cuenta" o "haber visto".
                    Evoluciona a "saber, comprender, reconocer" y adquiere
                    connotaciones filosóficas con el término Eidética, que
                    implica la capacidad de percibir la esencia de las cosas.
                    Derivada del griego "Eidos", que denota "idea" o "el aspecto
                    que presenta una cosa", esta noción va más allá de la simple
                    percepción personal, abarcando la forma típica o el
                    arquetipo de algo. En su origen, la palabra griega "idea" no
                    solo se refería a la visión que alguien tenía de algo, sino
                    también al aspecto que una cosa mostraba al ser vista,
                    destacando tanto la contemplación de esa cosa como el hecho
                    de "verla" en un aspecto específico. Conoce a lo s
                    integrantes :
                </p>
            </section>
        </main>
    );
}
