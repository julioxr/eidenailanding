"use client";
import { useRef, useEffect } from "react";

const AlbumImage = ({ background, children }) => {
    return (
        <>
            <div
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
