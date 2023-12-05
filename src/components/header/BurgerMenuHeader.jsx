import { useEffect, useRef } from "react";
import Link from "next/link";
import SpotifyLogo from "@/components/svg/SpotifyLogo";

const BurgerMenuHeader = ({ handleMenu }) => {
    const bodyRef = useRef(document.body);

    useEffect(() => {
        bodyRef.current.classList.add("overflow-hidden");
        return () => {
            bodyRef.current.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <>
            <section className="fixed bg-[#0A0D18] text-white z-40 min-h-screen h-auto w-full shadow-xl overflow-hidden">
                <div className="min-h-screen flex items-center pb-40 mt-32 flex-col gap-8">
                    <ul className="list-none gap-8 flex flex-col text-3xl font-medium text-center">
                        <Link
                            onClick={() => {
                                handleMenu();
                            }}
                            href="/album"
                        >
                            El album
                        </Link>
                        <Link
                            onClick={() => {
                                handleMenu();
                            }}
                            href="/#"
                        >
                            Nosotros
                        </Link>
                        <div className="w-auto h-auto">
                            <Link
                                onClick={() => {
                                    handleMenu();
                                }}
                                href="https://open.spotify.com/intl-es/artist/71baCB6blbKsE4HjrWbUZn?si=vxEtBkiRTryt3cmEdKi_ng"
                            >
                                <SpotifyLogo w={"150"} h={"47"} />
                            </Link>
                        </div>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default BurgerMenuHeader;
