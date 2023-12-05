import Link from "next/link";
import Logo from "@/components/svg/Logo";
import BurgerMenuIcon from "./BurgerMenuIcon";
import SpotifyLogo from "../svg/SpotifyLogo";

const MenuHeader = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <>
            <div className="flex justify-between items-center container mx-auto h-20 sm:h-16 px-8 sm:px-0 gap-8">
                <div className="container mx-auto flex items-center justify-center xl:justify-start">
                    <Logo />
                </div>
                <div className="hidden md:block h-full">
                    <ul className="list-none gap-6 flex text-lg font-medium items-center h-full text-white">
                        <Link href="/album" className="w-20">
                            El album
                        </Link>
                        <Link href="#" className="w-20">
                            Nosotros
                        </Link>
                        <span className="border h-10"></span>
                        <Link
                            href="https://open.spotify.com/intl-es/artist/71baCB6blbKsE4HjrWbUZn?si=vxEtBkiRTryt3cmEdKi_ng"
                            className="w-20"
                        >
                            <SpotifyLogo w={"82"} h={"29"} />
                        </Link>
                    </ul>
                </div>
                <div
                    className="z-50 md:hidden"
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                    }}
                >
                    <BurgerMenuIcon />
                </div>
            </div>
        </>
    );
};

export default MenuHeader;
