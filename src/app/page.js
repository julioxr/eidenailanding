import About from "@/components/about/About";
import Description from "@/components/description/Description";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Slider from "@/components/slider/Slider";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Slider />
            <About />
            {/* <Description /> */}
            <Footer />
        </>
    );
}
