import React from "react";
import Image from "next/image";

const Slider = () => {
    return (
        <section className="flex justify-center items-center overflow-x-scroll xl:container xl:mx-auto mt-8 xl:mt-12 xl:overflow-hidden">
            <div className="h-full flex shadow-xl gap-4 pr-16 xl:pr-0">
                <Image src="/eidenai_1.jpg" alt="" />
                <Image src="/eidenai_2.jpg" alt="" className="xl:hidden" />
                <Image src="/eidenai_3.jpg" alt="" className="xl:hidden" />
            </div>
        </section>
    );
};

export default Slider;
