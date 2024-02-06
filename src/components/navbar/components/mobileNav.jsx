import { Link } from 'react-router-dom';

const MobileNav = (props) => {
    const {
        isOpen,
        openMenu,
        navActive,
        navActive2,
        navActive3,
        navActive4,
        navActive5,
        setNavActive,
        setNavActive2,
        setNavActive3,
        setNavActive4,
        setNavActive5,
    } = props;

    return (
        <div className={`${isOpen ? 'inline absolute top-16 w-80 right-10 md:hidden z-30 mobile-nav' : 'hidden'}`}>
            <ul
                className="w-full font-semibold p-4 mt-4 border border-gray-100 overflow-hidden shadow-lg 
                rounded-3xl bg-gray-50 rtl:space-x-reverse tracking-wider font-mono text-[1.2rem]">
                <li className="w-full flex justify-center items-start text-center">
                    <Link
                        onClick={() => {
                            openMenu();
                            setNavActive(true);
                            setNavActive2(false);
                            setNavActive3(false);
                            setNavActive4(false);
                            setNavActive5(false);
                        }}
                        to="/plan"
                        className={`pt-4 px-1 ${navActive ? 'text-green-500 font-bold border-b-2 border-b-yellow-400 duration-200' : ''}`}>Plan</Link>
                </li>
                <li className="w-full flex justify-center items-start text-center">
                    <Link
                        onClick={() => {
                            openMenu();
                            setNavActive(false);
                            setNavActive2(true);
                            setNavActive3(false);
                            setNavActive4(false);
                            setNavActive5(false);
                        }}
                        to="/routes"
                        className={`pt-4 px-1 ${navActive2 ? 'text-green-500 font-bold border-b-2 border-b-yellow-400 duration-200' : ''}`}>Routes</Link>
                </li>
                <li className="w-full flex justify-center items-start text-center">
                    <Link
                        onClick={() => {
                            openMenu();
                            setNavActive(false);
                            setNavActive2(false);
                            setNavActive3(true);
                            setNavActive4(false);
                            setNavActive5(false);
                        }}
                        to="/tickets"
                        className={`pt-4 px-1 ${navActive3 ? 'text-green-500 font-bold border-b-2 border-b-yellow-400 duration-200' : ''}`}>Tickets</Link>
                </li>
                <li className="w-full flex justify-center items-start text-center">
                    <Link
                        onClick={() => {
                            openMenu();
                            setNavActive(false);
                            setNavActive2(false);
                            setNavActive3(false);
                            setNavActive4(true);
                            setNavActive5(false);
                        }}
                        to="/about"
                        className={`pt-4 px-1 ${navActive4 ? 'text-green-500 font-bold border-b-2 border-b-yellow-400 duration-200' : ''}`}>About</Link>
                </li>
                <li className="w-full flex justify-center items-start text-center">
                    <Link
                        onClick={() => {
                            openMenu();
                            setNavActive(false);
                            setNavActive2(false);
                            setNavActive3(false);
                            setNavActive4(false);
                            setNavActive5(true);
                        }}
                        to="/contact"
                        className={`pt-4 px-1 ${navActive5 ? 'text-green-500 font-bold border-b-2 border-b-yellow-400 duration-200' : ''}`}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default MobileNav;