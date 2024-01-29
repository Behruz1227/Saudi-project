import buss from "../../../assets/home-page/buss.png"
import layerfamely from "../../../assets/home-page/Layerfamely.png"
import layer from "../../../assets/home-page/Layer-first.png"

function MaterSafety() {
    return (
        <div>
            <div className=" py-20 h-max md:px-20 sm:px-5 px-3">
                <h2 className="sm:text-4xl text-3xl text-lime-900 font-bold text-center mb-6 lg:pb-20 pb-5">Your safety matters</h2>
                <div className="flex justify-around items-center lg:flex-row flex-col">
                    <div className="text-center px-4">
                        <div className="mb-4">
                            <img src={buss} alt="Driver Screenings Icon" className="mx-auto md:h-24 sm:h-20 h-14" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Driver screenings</h3>
                        <p className='text-neutral-500'>All potential drivers in Riyadh are required to undergo driver and criminal screenings. Existing drivers must consent to annual screenings.</p>
                    </div>
                    <div className="text-center px-4 md:mt-0 mt-5">
                        <div className="mb-4">
                            <img src={layerfamely} alt="Community Guidelines Icon" className="mx-auto md:h-24 sm:h-20 h-14" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Community Guidelines</h3>
                        <p className='text-neutral-500'>Our standards help to create safe connections and positive interactions with everyone.</p>
                    </div>
                    <div className="text-center px-4 md:mt-0 mt-5">
                        <div className="mb-4">
                            <img src={layer} alt="Customer Support Icon" className="mx-auto md:h-24 sm:h-20 h-14" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Customer support</h3>
                        <p className='text-neutral-500'>In the Riyadh bus app, the Emergency Button in the app lets you call 1 99 33. You can also count on 24/7 support for questions or safety concerns.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MaterSafety;