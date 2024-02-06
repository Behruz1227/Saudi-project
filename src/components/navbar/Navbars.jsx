import { useEffect, useState } from "react";
import { logoimage } from "../../assets/index";
import { Link } from "react-router-dom";
import "./navbar.css";
import MobileNav from "./components/mobileNav";
import DesktopNav from "./components/desktopNav";
import DropDown from "./components/dropDown";

const Navbars = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [navActive, setNavActive] = useState(false);
    const [navActive2, setNavActive2] = useState(false);
    const [navActive3, setNavActive3] = useState(false);
    const [navActive4, setNavActive4] = useState(false);
    const [navActive5, setNavActive5] = useState(false);

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
                {/* site logo link */}
                <Link
                    to="/"
                    onClick={() => {
                        setNavActive(false);
                        setNavActive2(false);
                        setNavActive3(false);
                        setNavActive4(false);
                        setNavActive5(false);
                    }}
                    className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logoimage} className="h-8" alt="Logo" />
                </Link>

                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {/* dropdown */}
                    <DropDown openDropDown={openDropDown} isOpenDrop={isOpenDrop} />

                    {/* open mobile nav menu button */}
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
                <DesktopNav
                    navActive={navActive}
                    navActive2={navActive2}
                    navActive3={navActive3}
                    navActive4={navActive4}
                    navActive5={navActive5}
                    setNavActive={setNavActive}
                    setNavActive2={setNavActive2}
                    setNavActive3={setNavActive3}
                    setNavActive4={setNavActive4}
                    setNavActive5={setNavActive5}
                />
            </div>

            {/* mobile nav */}
            <MobileNav
                openMenu={openMenu}
                isOpen={isOpen}
                navActive={navActive}
                navActive2={navActive2}
                navActive3={navActive3}
                navActive4={navActive4}
                navActive5={navActive5}
                setNavActive={setNavActive}
                setNavActive2={setNavActive2}
                setNavActive3={setNavActive3}
                setNavActive4={setNavActive4}
                setNavActive5={setNavActive5}
            />
        </nav>
    )
}

export default Navbars;