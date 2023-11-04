import Burger from "@/components/svg/Burger";
import Logo from "@/components/svg/Logo";

const Header = () => {
    return (
        <header className="flex items-center justify-center bg-[#010205] h-[90px] relative text-4xl font-bold tracking-widest">
            {/* <h1>EIDENAI</h1> */}
            <Logo />
            <div className="absolute right-8">
                <Burger color="white" />
            </div>
        </header>
    );
};

export default Header;
