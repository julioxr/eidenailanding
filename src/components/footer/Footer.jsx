"use client";
import { useRouter } from "next/navigation";
import { FaFacebookF, FaYoutube, FaInstagram, FaSpotify } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    const router = useRouter();
    return (
        <footer className="bg-[#05060C] flex gap-4 flex-col justify-center items-center h-[175px] xl:h-20 text-white xl:flex-row xl:gap-12">
            <div className="flex gap-4 justify-center items-center flex-col xl:flex-row">
                <h3>NUESTRAS REDES</h3>
                <div className="flex gap-4">
                    <Link
                        href="https://www.facebook.com/trioeidenai.folclore/"
                        className="text-3xl"
                    >
                        <FaFacebookF />
                    </Link>
                    <Link
                        href="https://www.youtube.com/channel/UCgcvEnVtwbnnnhWfB9BlE3w"
                        className="text-3xl"
                    >
                        <FaYoutube />
                    </Link>
                    <Link
                        href="https://www.instagram.com/eidenai_trio"
                        className="text-3xl"
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        href="https://open.spotify.com/intl-es/artist/71baCB6blbKsE4HjrWbUZn?si=vxEtBkiRTryt3cmEdKi_ng"
                        className="text-3xl"
                    >
                        <FaSpotify />
                    </Link>
                </div>
            </div>
            <div className="w-[1px] h-10 bg-white xl:block hidden"></div>
            <div className="flex gap-2">
                <h2>CONTRATACIONES</h2>
                <h2
                    className="text-green-500 uppercase cursor-pointer"
                    onClick={() => router.push("mailto:eidenaitrio@gmail.com")}
                >
                    eidenaitrio@gmail.com
                </h2>
            </div>
        </footer>
    );
};

export default Footer;
