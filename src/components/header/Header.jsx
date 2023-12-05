"use client";
import { useState } from "react";
import MenuHeader from "@/components/header/MenuHeader";
import BurgerMenuHeader from "./BurgerMenuHeader";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header id="inicio" className="h-20">
            {isMenuOpen && <BurgerMenuHeader handleMenu={handleMenu} />}
            <MenuHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </header>
    );
};

export default Header;
