import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const MainLayOut = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;