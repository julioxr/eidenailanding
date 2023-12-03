import Logo from "@/components/svg/Logo";
import BurgerMenuIcon from "./BurgerMenuIcon";

const MenuHeader = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <>
            <div className="flex justify-between items-center container mx-auto h-20 sm:h-16 px-8 sm:px-0 gap-8">
                <div className="container mx-auto flex items-center justify-center xl:justify-start">
                    <Logo />
                </div>
                <div className="hidden md:block h-full">
                    <ul className="list-none gap-6 flex text-lg font-medium items-center h-full text-white">
                        <li className="w-20">El album</li>
                        <li className="w-20">Nosotros</li>
                        <li className="w-20">Spotify</li>
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
