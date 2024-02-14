import logo from "../../../assets/home-page/logo.png"
import vektor from "../../../assets/home-page/Vector.png"
import ios from "../../../assets/home-page/ios.svg"
import android from "../../../assets/home-page/android.svg"
import logosecond from "../../../assets/home-page/logosecond.png"
import video from "../../../assets/home-page/video/riyadhbusvideo.mp4"
import iosApp from "../../../assets/home-page/ios-app.png"
import androidApp from "../../../assets/home-page/android-app.png"
import "../style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function MobilApp() {

    return (
        <div className='w-full py-20  h-max'>
            <div className='relative h-[300px]'>
                <div className='w-full md:px-40 important  z-10 absolute'>
                    <div className="rounded-xl text-black p-4 border global-bg">
                        <div className="container mx-auto  flex lg:flex-row  justify-between items-center ">
                            <div className="flex items-center">
                                {/* Logo va boshqa tarkib uchun joy */}
                                <img src={logo} alt="Logo" className="mr-4" />
                            </div>
                            <div className="lg:block hidden md:flex items-center">
                                {/* Navigatsiya havolalari */}
                                <a href="" className="px-4 py-2  transition-colors">Plan</a>
                                <a href="" className=" px-4 py-2  transition-colors">Routes</a>
                                <a href="" className=" px-4 py-2  transition-colors">Tickets</a>
                                <a href="" className=" px-4 py-2  transition-colors">About</a>
                                <a href="" className=" px-4 py-2  transition-colors">Contact</a>
                            </div>
                            <div className="flex items-center">
                                {/* Profil va sozlamalar uchun ikonkalar */}
                                <button className="p-2">
                                    <img src={ios} alt="" />
                                </button>
                                <button className="p-2">
                                    <img src={android} className="w-15" alt="" />
                                </button>
                                {/* Tilni tanlash uchun dropdown */}
                                <div className="relative">
                                    <button className="p-2">
                                        <i className="fas fa-chevron-down"></i> {/* Dropdown ikonkasi */}
                                    </button>
                                    {/* Dropdown menyusi */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full text-center lg:px-40 important important2 absolute top-8 -z-10'>
                    <h1 className='lg:text-9xl md:text-7xl text-6xl text-gray-400 md:mt-0 mt-10'>Riyadh Bus</h1>
                </div>
            </div>

            <div className='w-full h-max md:pt-44 md:mt-0 -mt-48 flex lg:flex-row flex-col-reverse'>
                <div className='lg:w-[40vw] w-full h-[600] md:block hidden  flex-col items-center relative'>
                    <div className='w-full h-[300px] flex items-center bg-gray-200'>
                        <div><img src={vektor} alt="" className='h-[300px]' /></div>
                        <div><h1 className='px-10'>New look, more routes, more stations.</h1></div>
                    </div>
                    <div className='w-full h-[300px] md:block hidden bg-gray-200'>
                        <div className='global-bg w-full h-[300px] rounded-tr-3xl'></div>
                    </div>
                </div>

                <div className='lg:w-[60vw] w-full md:h-[600px] h-max flex flex-col'>
                    <div className='md:bg-gray-200 w-full md:h-[300px] h-max flex md:items-end items-center md:flex-row flex-col '>
                        <div className='max-w-[310px] h-[625px] relative md:px-0 flex justify-center video_border overflow-hidden'>
                            <div className="w-full h-full ">
                                <video src={video} autoPlay loop className="" ></video>
                            </div>
                        </div>
                        <div className='md:w-8/12 w-full h-[300px] flex items-center justify-center bg-gray-200'>
                            <div class="w-full h-full global-bg text-black md:px-6 px-2 rounded-bl-3xl flex flex-col justify-center py-3">
                                <div class="flex items-center mb-4">
                                    {/* <!-- Bu yerga sizning logotipingizning tasvirini qo'ying --> */}
                                    <img src={logosecond} alt="Riyadh Bus Logo" class="w-12 h-12 mr-3 " />
                                </div>
                                <p class="text-lg mb-4 md:w-32 w-full">Download the Riyadh Bus app today.</p>
                                <div class="flex mt-2">
                                    <img src={iosApp} alt="" className="w-36 mr-5" />
                                    <img src={androidApp} alt="" className="w-36" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex justify-around  h-[300px]'>
                        <div className='w-full flex justify-around bg-gray-200  text-green-700 h-full items-center lg:rounded-bl-2xl'>
                            <div className='flex flex-col items-center '>
                                <p className='md:text-6xl text-3xl'>800+</p>
                                <p className='text-2xl'>buses</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='md:text-6xl text-3xl'>3.0 M</p>
                                <p className='text-2xl'>passengers</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='md:text-6xl text-3xl'>1.6K+</p>
                                <p className='text-2xl'>stations</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MobilApp;