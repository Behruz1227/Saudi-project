import logo from "../../../assets/home-page/logo.png"
import vektor from "../../../assets/home-page/Vector.png"
import phone from "../../../assets/home-page/phone.png"
import logosecond from "../../../assets/home-page/logosecond.png"


function MobilApp() {

    return (
        <div className='w-full py-20  h-max'>
            <div className='relative h-[300px]'>
                <div className='w-full px-40 important bg-white z-10 absolute'>
                    <div className="rounded-xl text-black p-4 border ">
                        <div className="container mx-auto flex justify-between items-center important">
                            <div className="flex items-center">
                                {/* Logo va boshqa tarkib uchun joy */}
                                <img src={logo} alt="Logo" className="mr-4" />
                            </div>
                            <div className="hidden md:flex items-center">
                                {/* Navigatsiya havolalari */}
                                <a href="/plan" className="px-4 py-2  transition-colors">Plan</a>
                                <a href="/routes" className=" px-4 py-2  transition-colors">Routes</a>
                                <a href="/tickets" className=" px-4 py-2  transition-colors">Tickets</a>
                                <a href="/about" className=" px-4 py-2  transition-colors">About</a>
                                <a href="/contact" className=" px-4 py-2  transition-colors">Contact</a>
                            </div>
                            <div className="flex items-center">
                                {/* Profil va sozlamalar uchun ikonkalar */}
                                <button className=" p-2">
                                    <i className="fas fa-user-circle"></i> {/* Profil ikonkasi */}
                                </button>
                                <button className=" p-2">
                                    <i className="fas fa-cog"></i> {/* Sozlamalar ikonkasi */}
                                </button>
                                {/* Tilni tanlash uchun dropdown */}
                                <div className="relative">
                                    <button className=" p-2">
                                        <i className="fas fa-chevron-down"></i> {/* Dropdown ikonkasi */}
                                    </button>
                                    {/* Dropdown menyusi */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full text-center px-40 important important2 absolute top-8 -z-10'>
                    <h1 className='text-9xl text-gray-400'>Riyadh Bus</h1>
                </div>
            </div>

            <div className='w-full h-max py-44 flex'>
                <div className='w-5/12 h-[600] flex flex-col items-center relative'>
                    <div className='w-full h-[300px] flex items-center bg-gray-200'>
                        <div><img src={vektor} alt="" className='h-[300px]' /></div>
                        <div><h1 className='px-10'>New look, more routes, more stations.</h1></div>
                    </div>
                    <div className='w-full h-[300px] bg-gray-200'>
                        <div className='bg-white w-full h-[300px] rounded-tr-3xl'></div>
                    </div>
                </div>

                <div className='w-8/12 h-[600px] flex flex-col'>
                    <div className=' h-[300px] flex'>
                        <div className=' bg-gray-200 w-5/12 relative'>
                            <img src={phone} alt="" className=' absolute bottom-0 w-full h-[650px]' />
                        </div>
                        <div className='w-7/12 flex items-center bg-gray-200'>
                            <div class="w-full h-full bg-white text-black px-6 rounded-bl-3xl flex flex-col">
                                <div class="flex items-center mb-4">
                                    {/* <!-- Bu yerga sizning logotipingizning tasvirini qo'ying --> */}
                                    <img src={logosecond} alt="Riyadh Bus Logo" class="w-12 h-12 mr-3 " />
                                </div>
                                <p class="text-lg mb-4 w-32">Download the Riyadh Bus app today.</p>
                                <div class="flex mt-2">
                                    <button className='flex justify-center items-center border px-3 py-2 rounded-2xl mr-2 bg-black text-white'>
                                        <i class="fa-brands fa-apple text-3xl mr-2 "></i>
                                        <div className='text-start'>
                                            <p>download on the </p><span className='text-lg mt-0'>App story </span><p />
                                        </div>
                                    </button>
                                    <button className='flex justify-center items-center border px-3 py-2 rounded-2xl bg-black text-white'>
                                        <i class="fa-brands fa-google-play mr-2 text-2xl"></i>
                                        <div className='text-start'>
                                            <p>get on the <br /> <span className='text-lg'>Google play</span></p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex justify-around  h-[300px]'>
                        <div className='w-full flex justify-around bg-neutral-200  text-green-700 h-full items-center rounded-bl-2xl'>
                            <div className='flex flex-col items-center '>
                                <p className='text-6xl'>800+</p>
                                <p className='text-2xl'>buses</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-6xl'>3.0 M</p>
                                <p className='text-2xl'>passengers</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='text-6xl'>1.6K+</p>
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