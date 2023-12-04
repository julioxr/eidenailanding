import { ClipLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <ClipLoader color="#ffffff" size={50} />
            <h3 className="text-white font-fuenteroboto mt-4">Cargando</h3>
        </div>
    );
};

export default Loader;
