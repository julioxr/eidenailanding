"use client";
import { useRef, useEffect } from "react";

const AlbumImage = ({ background, children }) => {
    // const lastBackgroundRef = useRef(null);

    // useEffect(() => {
    //     if (lastBackgroundRef.current) {
    //         lastBackgroundRef.current.scrollIntoView({
    //             block: "end", // Utiliza "end" para el último elemento
    //         });
    //     }
    // }, [lastBackgroundRef]);
    console.log(background);

    return (
        <>
            <div
                // key={index}
                // ref={lastBackgroundRef}
                className="snap-start h-screen w-screen flex items-center justify-center relative"
                style={{
                    backgroundImage: `url('/${background}')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
            >
                {children}
            </div>
        </>
    );
};

export default AlbumImage;
