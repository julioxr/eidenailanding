import { IoIosArrowDroprightCircle } from "react-icons/io";

const AlbumTextCard = ({ title, subtitle }) => {
    return (
        <>
            <div className="font-fuentelato flex flex-col items-end gap-1 bg-[#0A0D18]/50 rounded-xl p-4">
                <h2 className="font-bold text-2xl">{title}</h2>
                <h3 className="text-xs uppercase">{subtitle}</h3>
                <div className="text-2xl translate-x-[2px] opacity-60">
                    <IoIosArrowDroprightCircle />
                </div>
            </div>
        </>
    );
};

export default AlbumTextCard;
