import Burger from "@/components/svg/Burger";
import Logo from "@/components/svg/Logo";

const Header = () => {
    return (
        <header className="flex items-center justify-center bg-[#010205] h-[90px] relative text-4xl font-bold">
            <div className="container mx-auto w-full flex items-center justify-center xl:justify-start">
                <Logo />
            </div>
            {/* <div className="absolute right-8">
                <Burger color="white" />
            </div> */}
        </header>
    );
};

export default Header;
