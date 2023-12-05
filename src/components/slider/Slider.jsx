"use client";
import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imagesArray = [
    {
        src: "/eidenai_1.jpg",
        alt: "Foto del grupo Eidenai sentados en el campo",
    },
    {
        src: "/eidenai_2.jpg",
        alt: "Foto de grupo Eidenai sonriendo en el campo de Mendoza",
    },
    {
        src: "/eidenai_3.jpg",
        alt: "Foto del grupo Eidenai mirando a camara en el campo de Mendoza",
    },
];

const Slider = () => {
    return (
        <section className="flex justify-center items-center xl:container xl:mx-auto mt-8 xl:mt-12">
            <Carousel
                autoPlay
                infiniteLoop
                emulateTouch
                showStatus={false}
                interval={3000}
                showThumbs={false}
                swipeable
                // centerSlidePercentage={95}
                // centerMode
                // animationHandler={"fade"}
            >
                {imagesArray.map((image, index) => (
                    <Image
                        src={image.src}
                        alt={image.alt}
                        width={1920}
                        height={1080}
                        key={index}
                        // className="px-1 -translate-x-3 xl:-translate-x-12"
                    />
                ))}
            </Carousel>
        </section>

        // <section className="flex justify-center items-center overflow-x-scroll xl:container xl:mx-auto mt-8 xl:mt-12 xl:overflow-hidden">
        //     <div className="h-full flex shadow-xl gap-4 pr-16 xl:pr-0">
        //         <Image src="/eidenai_1.jpg" width={1920} height={1080} alt="" />
        //         <Image
        //             src="/eidenai_2.jpg"
        //             width={1920}
        //             height={1080}
        //             alt=""
        //             className="xl:hidden"
        //         />
        //         <Image
        //             src="/eidenai_3.jpg"
        //             width={1920}
        //             height={1080}
        //             alt=""
        //             className="xl:hidden"
        //         />
        //     </div>
        // </section>
    );
};

export default Slider;
