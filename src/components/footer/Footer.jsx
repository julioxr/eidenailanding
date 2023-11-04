const Footer = () => {
    return (
        <footer className="bg-[#05060C] flex gap-2 flex-col justify-center items-center h-[175px] text-white">
            <h3>NUESTRAS REDES</h3>
            <div className="flex gap-2">
                <div className="rounded-full bg-red-400 p-4"></div>
                <div className="rounded-full bg-red-400 p-4"></div>
                <div className="rounded-full bg-red-400 p-4"></div>
                <div className="rounded-full bg-red-400 p-4"></div>
                <div className="rounded-full bg-red-400 p-4"></div>
            </div>
            <div className="flex gap-2">
                <h2>CONTRATACIONES</h2>
                <h2 className="text-green-500">EMAIL@EMAIL.COM</h2>
            </div>
        </footer>
    );
};

export default Footer;
