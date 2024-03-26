import { Link, useRouteError } from "react-router-dom";
import errorPhoto from '../../assets/bones-10508_256.gif'

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className="bg-base-200 p-10">
            <div className="flex items-center justify-center">
           <img src={errorPhoto} alt="" className="w-96"/>
        </div>
        <div className="text-center flex items-center justify-center flex-col">
            <p className=" md:text-7xl  font-bold italic text-red-500">!{error.status || error.message}!</p>
            <p className="text-3xl text-red-500">Page not Found</p>
            <button className="mt-5 btn px-10 rounded-3xl bg-red-500 text-white"><Link to={'/'}>Go Home
            </Link></button>
        </div>
        </div>
    );
};

export default ErrorPage;