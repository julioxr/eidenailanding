import React from "react";

const backgrounds = [
    "back_6.jpg",
    "back_5.jpg",
    "back_4.jpg",
    "back_3.jpg",
    "back_2.jpg",
    "back_1.jpg",
];

const Album = () => {
    return (
        <>
            <section className="snap-y snap-mandatory h-screen w-screen text-4xl overflow-x-hidden text-white">
                {backgrounds.map((background, index) => (
                    <div
                        key={index}
                        className="snap-start h-screen w-screen flex items-center justify-center"
                        style={{
                            backgroundImage: `url('/${background}')`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    >
                        a
                    </div>
                ))}
            </section>
        </>
    );
};

export default Album;
