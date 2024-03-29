import first from "../../../assets/home-page/gallery/first.png"
import second from "../../../assets/home-page/gallery/second.png"
import third from "../../../assets/home-page/gallery/third.png"
import fourth from "../../../assets/home-page/gallery/fourth.png"
import fiveth from "../../../assets/home-page/gallery/fiveth.png"
import sixth from "../../../assets/home-page/gallery/sixth.png"
import seventh from "../../../assets/home-page/gallery/seventh.png"
import eight from "../../../assets/home-page/gallery/eightth.png"


function Galery() {
    return (
        <div className="h-max">
            <div className='text-center md:px-10 px-3 pb-5 h-max md:mb-20'>
                <h1 className="md:text-4xl text-3xl font-bold my-4 text-green-900">More from Riyadh Bus</h1>
                <h2 className="md:text-lg text-md text-sky-600">#Riyadh #RoyalCommissionForRiyadhCity #Riyadh_bus</h2>
            </div>
            <div className="w-full lg:px-0 md:px-10 sm:px-5 px-3 h-max flex xl:justify-around justify-start items-center xl:flex-row flex-col">
                <div className="lg:w-[64%] w-full h-max flex justify-between xl:flex-row flex-col">
                    <div className="xl:w-[49%] w-full xl:h-[700px] h-max flex flex-col justify-end">
                        <div className='w-full lg:h-[400px] flex xl:justify-end justify-center items-end'>
                            <img src={first} alt="Image 1" className="xl:w-[200px] w-full  object-cover rounded-lg shadow" />
                        </div>
                        <div className='pt-5'>
                            <img src={second} alt="Image 1" className="w-full object-cover rounded-lg shadow" />
                        </div>
                    </div>
                    <div className='xl:w-[48%] w-full xl:h-[700px] h-max flex flex-col justify-end xl:mt-0 mt-5'>
                        <div className="w-full h-[285px]">
                            <img src={third} alt="" className="w-full h-full object-cover rounded-lg " />
                        </div>
                        <div className="w-full h-[200px] flex justify-between gap-5 pt-5">
                            <img src={fourth} alt="" className="w-[47%] object-cover rounded-lg " />
                            <img src={fiveth} alt="" className="w-[47%] object-cover rounded-lg " />
                        </div>
                        <div className="w-full h-[285px] pt-5">
                            <img src={sixth} alt="" className="w-full h-full object-cover rounded-lg " />
                        </div>
                    </div>
                </div>
                <div className="xl:w-[32%] lg:w-[64%] w-full xl:h-[700px] xl_mt-0 mt-5 flex flex-col justify-end">
                    <div className='w-full xl:h-[400px] flex justify-start items-end'>
                        <img src={seventh} alt="Image 1" className="xl:w-[200px] w-full object-cover rounded-lg shadow" />
                    </div>
                    <div className='pt-5'>
                        <img src={eight} alt="Image 1" className="w-full object-cover rounded-lg shadow" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Galery;