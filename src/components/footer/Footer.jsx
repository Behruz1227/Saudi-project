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
    const styles = {
        linksStyle: 'w-full flex justify-start items-start border-b border-b-slate-600 pb-3 my-4 footer-main-links',
        linkStyle: 'hover:cursor-pointer hover:text-red-600 duration-200',
        networkStyle: 'ml-8 hover:cursor-pointer hover:-mt-1 duration-300',
        buttonsStyle: 'w-32 h-10 ml-4 shadow-xl cursor-pointer hover:-mt-1 duration-200',
        linkPargStyle: 'w-1/2 text-[1rem] tracking-widest',
        flexCenter: 'flex justify-between items-center',
        flexStart: 'flex justify-between items-start',
        flexCenterClass: 'flex justify-between items-center footer-main-parg'
    }

    return (
        <div className="footer-main w-full p-24 pb-0">
            <div className={`${styles.flexStart} w-full text-white opacity-90 footer-main-box`}>
                <div className="w-2/5 footer-main-box1">
                    <img src={brand} alt="footerLogo" className="cursor-pointer opacity-100" />
                    <div className="pr-10 mt-8 lg:mt-6">
                        <p className={styles.flexCenterClass}>
                            <span className="opacity-75">
                                <img src={phone} alt="number" className="w-5 inline-block -mt-1 mr-5" />
                                Customer Care:
                            </span>
                            <span>1 99 33</span>
                        </p>
                    </div>
                    <div className="pr-10 mt-4">
                        <p className={styles.flexCenterClass}>
                            <span className="opacity-75">
                                <img src={email} alt="email" className="w-5 inline-block -mt-1 mr-5" />
                                Email us at:
                            </span>
                            <span>info@riyadhbus.com</span>
                        </p>
                    </div>
                </div>
                <div className="w-3/5 pl-10 footer-main-box2">
                    <div className={styles.linksStyle}>
                        <p className={styles.linkPargStyle}><Link to='/about' className={styles.linkStyle}>About Riyadh Bus</Link></p>
                        <p className={`${styles.linkPargStyle} text-right`}><Link to='/routes' className={styles.linkStyle}>Explore Routes</Link></p>
                    </div>
                    <div className={styles.linksStyle}>
                        <p className={styles.linkPargStyle}><Link to='/tickets' className={styles.linkStyle}>Tickets & fares</Link></p>
                        <p className={`${styles.linkPargStyle} text-right`}><Link to='/plan' className={styles.linkStyle}>PLAN YOUR TRIP</Link></p>
                    </div>
                    <div className={styles.linksStyle}>
                        <p className={styles.linkPargStyle}><Link to='/contact' className={styles.linkStyle}>Contact Us</Link></p>
                        <p className={`${styles.linkPargStyle} text-right`}><Link to='/question' className={styles.linkStyle}>FAQs</Link></p>
                    </div>
                </div>
            </div>

            <div
                className="py-4 mt-20 border-y border-y-slate-600 w-full text-white opacity-90
                flex justify-between items-center footer-networks">
                <div className="flex justify-start items-center">
                    <span className="text-[1rem]">FOLLOW US</span>
                    <img className={styles.networkStyle} src={facebook} alt="facebook" />
                    <img className={styles.networkStyle} src={instagram} alt="instagram" />
                    <img className={styles.networkStyle} src={layerX} alt="layerX" />
                    <img className={styles.networkStyle} src={youtube} alt="youtube" />
                </div>
                <div className="opacity-75 text-[1rem]">
                    <span className={`mr-8 ${styles.linkStyle}`}><Link to='/privacy-policy'>PRIVACY POLICY</Link></span>
                    <span className="mr-8">|</span>
                    <span className={`mr-8 ${styles.linkStyle}`}><Link to='/terms-and-conditions'>TERMS AND CONDITIONS</Link></span>
                    <span className="mr-8">|</span>
                    <span className={styles.linkStyle}><Link>DISCLAIMER</Link></span>
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
                            <img src={appleButton} alt="img" className={styles.buttonsStyle} />
                            <img src={googleButton} alt="img" className={styles.buttonsStyle} />
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