import "./footer.css";
import {
    brand,
    phone,
    email,
    layerBrand,
    facebook,
    instagram,
    layerX,
    youtube,
    appleButton,
    googleButton,
    footerBottom,
} from "./footer-img/index";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-main w-full p-24 pb-0">
            <div className="flex justify-between items-start w-full text-white opacity-90 footer-main-box">
                <div className="w-2/5 footer-main-box1">
                    <img src={brand} alt="footerLogo" className="cursor-pointer opacity-100" />
                    <div className="pr-10 mt-8 lg:mt-6">
                        <p className="flex justify-between items-center footer-main-parg">
                            <span className="opacity-75">
                                <img src={phone} alt="number" className="w-5 inline-block -mt-1 mr-5" />
                                Customer Care:
                            </span>
                            <span>1 99 33</span>
                        </p>
                    </div>
                    <div className="pr-10 mt-4">
                        <p className="flex justify-between items-center footer-main-parg">
                            <span className="opacity-75">
                                <img src={email} alt="email" className="w-5 inline-block -mt-1 mr-5" />
                                Email us at:
                            </span>
                            <span>info@riyadhbus.com</span>
                        </p>
                    </div>
                </div>
                <div className="w-3/5 pl-10 footer-main-box2">
                    <div className="w-full flex justify-start items-start border-b border-b-slate-600 pb-3 my-4 footer-main-links">
                        <p className="w-1/2 text-[1rem] tracking-widest hover:cursor-pointer hover:text-red-600 duration-200">About Riyadh Bus</p>
                        <p className="w-1/2 text-[1rem] tracking-widest hover:cursor-pointer hover:text-red-600 duration-200 text-right">Explore Routes</p>
                    </div>
                    <div className="w-full flex justify-start items-start border-b border-b-slate-600 pb-3 my-4 footer-main-links">
                        <p className="w-1/2 text-[1rem] tracking-widest hover:cursor-pointer hover:text-red-600 duration-200">Tickets & fares</p>
                        <p className="w-1/2 text-[1rem] tracking-widest hover:cursor-pointer hover:text-red-600 duration-200 text-right">PLAN YOUR TRIP</p>
                    </div>
                    <div className="w-full flex justify-start items-start border-b border-b-slate-600 pb-3 my-4 footer-main-links">
                        <p className="w-1/2 text-[1rem] tracking-widest hover:cursor-pointer hover:text-red-600 duration-200">contact us</p>
                        <p className="w-1/2 text-[1rem] tracking-widest hover:cursor-pointer hover:text-red-600 duration-200 text-right"><Link to='/question'>FAQs</Link></p>
                    </div>
                </div>
            </div>

            <div
                className="py-4 mt-20 border-y border-y-slate-600 w-full text-white opacity-90
                flex justify-between items-center footer-networks">
                <div className="flex justify-start items-center">
                    <span className="text-[1rem]">FOLLOW US</span>
                    <img className="ml-8 hover:cursor-pointer hover:-mt-1 duration-300" src={facebook} alt="facebook" />
                    <img className="ml-8 hover:cursor-pointer hover:-mt-1 duration-300" src={instagram} alt="instagram" />
                    <img className="ml-8 hover:cursor-pointer hover:-mt-1 duration-300" src={layerX} alt="layerX" />
                    <img className="ml-8 hover:cursor-pointer hover:-mt-1 duration-300" src={youtube} alt="youtube" />
                </div>
                <div className="opacity-75 text-[1rem]">
                    <span className="mr-8 hover:cursor-pointer hover:text-red-600 duration-200">PRIVACY POLICY</span>
                    <span className="mr-8">|</span>
                    <span className="mr-8 hover:cursor-pointer hover:text-red-600 duration-200">TERMS AND CONDITIONS</span>
                    <span className="mr-8">|</span>
                    <span className="hover:cursor-pointer hover:text-red-600 duration-200">DISCLAIMER</span>
                </div>
            </div>

            <div className="flex justify-center items-end w-full mt-24">
                <div className="rounded-t-[30px] sm:rounded-t-[40px] bg-white w-[100%] sm:w-[80%]">
                    <div className="p-10 flex justify-between items-center footer-card-bottom">
                        <div className="flex justify-start items-center">
                            <img src={layerBrand} alt="img" className="w-16 h-16 shadow-xl" />
                            <p className="text-[1.2rem] ml-4 font-semibold tracking-wider leading-7">
                                Download the Riyadh <br className="footer-main-brHidden" /> Bus app <br />
                                <span className="font-normal sm:hidden text-[1rem]">Scan to download</span>
                            </p>
                        </div>
                        <div className="flex justify-end items-center footer-card-bottomIcon">
                            <img src={appleButton} alt="img" className="w-32 h-10 ml-4 shadow-xl cursor-pointer hover:-mt-1 duration-200" />
                            <img src={googleButton} alt="img" className="w-32 h-10 ml-4 shadow-xl cursor-pointer hover:-mt-1 duration-200" />
                        </div>
                    </div>
                    <div>
                        <img src={footerBottom} alt="footerBottom" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;