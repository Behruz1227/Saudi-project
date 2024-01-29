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
            <div className='text-center px-10 pb-5'>
                <h1 className="text-4xl font-bold my-4">More from Riyadh Bus</h1>
                <h2 className="text-lg">#Riyadh #RoyalCommissionForRiyadhCity #Riyadh_bus</h2>
            </div>
            <div className="flex justify-around h-max">
                {/* Birinchi qator - uchta tasvir */}
                <div className="w-[64%] h-max flex justify-between">
                    <div className="w-[49%] h-[700px] flex flex-col justify-end">
                        <div className='w-full h-[400px] flex justify-end items-end'>
                            <img src={first} alt="Image 1" className="w-[200px] object-cover rounded-lg shadow" />
                        </div>
                        <div className='pt-5'>
                            <img src={first} alt="Image 1" className="w-full object-cover rounded-lg shadow" />
                        </div>
                    </div>
                    <div className='w-[48%] h-[700px] flex flex-col justify-end'>
                        <div className="w-full h-[285px]">
                            <img src={eight} alt="" className="w-full h-full object-cover rounded-lg " />
                        </div>
                        <div className="w-full h-[200px] flex justify-between gap-5 pt-5">
                            <img src={eight} alt="" className="w-[47%] object-cover rounded-lg " />
                            <img src={eight} alt="" className="w-[47%] object-cover rounded-lg " />
                        </div>
                        <div className="w-full h-[285px] pt-5">
                            <img src={eight} alt="" className="w-full h-full object-cover rounded-lg " />
                        </div>
                    </div>
                </div>
                <div className="w-[32%] h-[700px] flex flex-col justify-end">
                    <div className='w-full h-[400px] flex justify-start items-end'>
                        <img src={first} alt="Image 1" className="w-[200px] object-cover rounded-lg shadow" />
                    </div>
                    <div className='pt-5'>
                        <img src={first} alt="Image 1" className="w-full object-cover rounded-lg shadow" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Galery;