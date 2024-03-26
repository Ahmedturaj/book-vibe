import { Link, NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {

    return (
        <nav>
            <div className="navbar bg-base-100 rounded-3xl shadow-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-bold text-xl p-2 rounded-md' : 'text-black text-xl'}>Home</NavLink></li>
                            <li> <NavLink to={'/listedBooks'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-bold  p-2 rounded-md text-xl' : 'text-black text-xl'}>Listed Books</NavLink></li>
                            <li><NavLink to={'/pagesRead'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-bold p-2 rounded-md text-xl' : 'text-black text-xl'}>Pages To Read</NavLink></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost  text-3xl font-bold">Book Vibe</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-bold text-xl p-2 rounded-md' : 'text-black text-xl'}>Home</NavLink></li>
                        <li> <NavLink to={'/listedBooks'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-bold  p-2 rounded-md text-xl' : 'text-black text-xl'}>Listed Books</NavLink></li>
                        <li><NavLink to={'/pagesRead'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-bold p-2 rounded-md text-xl' : 'text-black text-xl'}>Pages To Read</NavLink></li>
                        <li><NavLink to={'/authors'} className={({ isActive }) => isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-bold p-2 rounded-md text-xl' : 'text-black text-xl'}>About Authors</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#23BE0A] font-semibold text-white text-xl rounded-2xl mr-2 hidden md:flex">Sign In</a>
                    <a className="btn bg-[#59C6D2] font-semibold text-white text-xl rounded-2xl hidden md:flex">Sign Up</a>

                    <div className=" flex md:hidden dropdown dropdown-end">
                        <div style={{transition:'all 1s'}} tabIndex={0} role="button" className="btn btn-circle  rounded-full font-extrabold text-3xl bg-[#23BE0A] text-white hover:scale-105"><CiLogin/></div>
                        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                            <li> <a className="bg-[#23BE0A] font-semibold text-white rounded-2xl mb-2 text-xs">Sign In</a></li>
                            <li> <a className="bg-[#59C6D2] font-semibold text-white  rounded-2xl text-xs">Sign Up</a></li>
                        </ul>
                    </div>
            </div>
        </div>
        </nav >
    );
};

export default Navbar;