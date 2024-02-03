import { useEffect, useState } from "react";
import { logoimage } from "../../assets/index";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbars = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const openMenu = () => setIsOpen(!isOpen);
    const openDropDown = () => setIsOpenDrop(!isOpenDrop);

    const handleScroll = () => {
        if (window.scrollY > 100) setIsSticky(true)
        else setIsSticky(false)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    return (
        <nav
            className={`${isSticky
                ? 'sticky px-4 py-3 w-[70%] ml-[15%] shadow-lg rounded-3xl border border-green-500 bg-white'
                : ''} py-2 z-50`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logoimage} className="h-8" alt="Logo" />
                </Link>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button
                        onClick={openDropDown}
                        className="text-black font-bold rounded-lg text-[1.2rem] text-center 
                        inline-flex items-center tracking-widest hover:opacity-70 duration-300">
                        العربية
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    <div
                        className={`z-10 ${isOpenDrop ? 'inline-block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-40 
                        absolute top-[4.2rem] right-3`}>
                        <ul
                            className="py-2 text-sm text-gray-700">
                            <li>
                                <Link className="block px-4 py-2 hover:bg-gray-100">Drop 1</Link>
                            </li>
                            <li>
                                <Link className="block px-4 py-2 hover:bg-gray-100">Drop 2</Link>
                            </li>
                            <li>
                                <Link className="block px-4 py-2 hover:bg-gray-100">Drop 3</Link>
                            </li>
                            <li>
                                <Link className="block px-4 py-2 hover:bg-gray-100">Drop 4</Link>
                            </li>
                        </ul>
                    </div>

                    <button
                        onClick={openMenu}
                        className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 
                        rounded-2xl md:hidden focus:outline-none focus:border-2 focus:border-green-600">
                        <span className="sr-only">Open navbar menu</span>
                        {isOpen
                            ? <i className="fa-solid fa-xmark scale-150"></i>
                            : <i className="fa-solid fa-bars scale-150"></i>
                        }
                    </button>
                </div>

                {/* desktop nav */}
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-cta">
                    <ul
                        className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 
                        rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 desktop-nav">
                        <li>
                            <Link
                                to="/plan"
                                className="text-gray-900 font-medium font-mono text-[1.2rem] tracking-wide 
                                px-1 pb-1 hover:text-gray-500 focus:border-b-2 focus:border-b-red-400 
                                focus:text-yellow-400 focus:font-semibold duration-200">Plan</Link>
                        </li>
                        <li>
                            <Link
                                to="/routes"
                                className="text-gray-900 font-medium font-mono text-[1.2rem] tracking-wide 
                                px-1 pb-1 hover:text-gray-500 focus:border-b-2 focus:border-b-red-400 
                                focus:text-yellow-400 focus:font-semibold duration-200">Routes</Link>
                        </li>
                        <li>
                            <Link
                                to="/tickets"
                                className="text-gray-900 font-medium font-mono text-[1.2rem] tracking-wide 
                                px-1 pb-1 hover:text-gray-500 focus:border-b-2 focus:border-b-red-400 
                                focus:text-yellow-400 focus:font-semibold duration-200">Tickets</Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="text-gray-900 font-medium font-mono text-[1.2rem] tracking-wide 
                                px-1 pb-1 hover:text-gray-500 focus:border-b-2 focus:border-b-red-400 
                                focus:text-yellow-400 focus:font-semibold duration-200">About</Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="text-gray-900 font-medium font-mono text-[1.2rem] tracking-wide 
                                px-1 pb-1 hover:text-gray-500 focus:border-b-2 focus:border-b-red-400 
                                focus:text-yellow-400 focus:font-semibold duration-200">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* mobile nav */}
            <div className={`${isOpen ? 'inline absolute top-16 w-80 right-10 md:hidden mobile-nav' : 'hidden'}`}>
                <ul
                    className="w-full font-semibold p-4 mt-4 border border-gray-100 overflow-hidden shadow-lg 
                    rounded-3xl bg-gray-50 rtl:space-x-reverse tracking-wider font-mono text-[1.2rem]">
                    <li className="w-full flex justify-center items-start text-center">
                        <Link
                            onClick={openMenu}
                            to="/plan"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                            md:hover:bg-transparent md:hover:text-blue-700">Plan</Link>
                    </li>
                    <li className="w-full flex justify-center items-start text-center">
                        <Link
                            onClick={openMenu}
                            to="/routes"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                            md:hover:bg-transparent md:hover:text-blue-700">Routes</Link>
                    </li>
                    <li className="w-full flex justify-center items-start text-center">
                        <Link
                            onClick={openMenu}
                            to="/tickets"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                            md:hover:bg-transparent md:hover:text-blue-700">Tickets</Link>
                    </li>
                    <li className="w-full flex justify-center items-start text-center">
                        <Link
                            onClick={openMenu}
                            to="/about"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                            md:hover:bg-transparent md:hover:text-blue-700">About</Link>
                    </li>
                    <li className="w-full flex justify-center items-start text-center">
                        <Link
                            onClick={openMenu}
                            to="/contact"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                            md:hover:bg-transparent md:hover:text-blue-700">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbars;