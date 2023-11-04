import { Lato, Roboto } from "next/font/google";
import "./globals.css";

const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
    variable: "--font-lato",
});

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
    variable: "--font-roboto",
});

export const metadata = {
    title: "Eidenai",
    description: "Eidenai",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${lato.variable} ${roboto.variable} bg-mainBlue`}>
                {children}
            </body>
        </html>
    );
}
