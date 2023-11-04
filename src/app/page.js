import About from "@/components/about/About";
import Description from "@/components/description/Description";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Slider from "@/components/slider/Slider";

export default function Home() {
    return (
        <>
            <main className="min-h-screen gap-8 container mx-auto text-white">
                <Header />
                <Hero />
                <Slider />
                <About />
                {/* <Description /> */}
            </main>
            <Footer />
        </>
    );
}
