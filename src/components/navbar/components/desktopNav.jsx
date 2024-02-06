import { Link } from "react-router-dom";

const DesktopNav = (props) => {
    const {
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
        <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 text-gray-900"
            id="navbar-cta">
            <ul
                className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 
                        rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 desktop-nav">
                <li>
                    <Link
                        to="/plan"
                        onClick={() => {
                            setNavActive(true);
                            setNavActive2(false);
                            setNavActive3(false);
                            setNavActive4(false);
                            setNavActive5(false);
                        }}
                        className={`${navActive ? 'border-b-2 border-b-red-400 text-yellow-400 font-semibold hover:text-yellow-400' : ''} 
                                font-medium font-mono text-[1.2rem] tracking-wide 
                                px-1 pb-1 hover:text-gray-500 duration-200`}>Plan</Link>
                </li>
                <li>
                    <Link
                        to="/routes"
                        onClick={() => {
                            setNavActive(false);
                            setNavActive2(true);
                            setNavActive3(false);
                            setNavActive4(false);
                            setNavActive5(false);
                        }}
                        className={`${navActive2 ? 'border-b-2 border-b-red-400 text-yellow-400 font-semibold hover:text-yellow-400' : ''} 
                                font-medium font-mono text-[1.2rem] tracking-wide 
                                px-1 pb-1 hover:text-gray-500 duration-200`}>Routes</Link>
                </li>
                <li>
                    <Link
                        to="/tickets"
                        onClick={() => {
                            setNavActive(false);
                            setNavActive2(false);
                            setNavActive3(true);
                            setNavActive4(false);
                            setNavActive5(false);
                        }}
                        className={`${navActive3 ? 'border-b-2 border-b-red-400 text-yellow-400 font-semibold hover:text-yellow-400' : ''} 
                                font-medium font-mono text-[1.2rem] tracking-wide 
                                px-1 pb-1 hover:text-gray-500 duration-200`}>Tickets</Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        onClick={() => {
                            setNavActive(false);
                            setNavActive2(false);
                            setNavActive3(false);
                            setNavActive4(true);
                            setNavActive5(false);
                        }}
                        className={`${navActive4 ? 'border-b-2 border-b-red-400 text-yellow-400 font-semibold hover:text-yellow-400' : ''} 
                                font-medium font-mono text-[1.2rem] tracking-wide 
                                px-1 pb-1 hover:text-gray-500 duration-200`}>About</Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        onClick={() => {
                            setNavActive(false);
                            setNavActive2(false);
                            setNavActive3(false);
                            setNavActive4(false);
                            setNavActive5(true);
                        }}
                        className={`${navActive5 ? 'border-b-2 border-b-red-400 text-yellow-400 font-semibold hover:text-yellow-400' : ''} 
                                font-medium font-mono text-[1.2rem] tracking-wide 
                                px-1 pb-1 hover:text-gray-500 duration-200`}>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default DesktopNav