import buss from "../../../assets/home-page/buss.png"
import layerfamely from "../../../assets/home-page/Layerfamely.png"
import layer from "../../../assets/home-page/Layer-first.png"

function MaterSafety() {
    return (
        <div>
            <div className=" py-20 h-max px-20">
                <h2 className="text-4xl text-lime-900 font-bold text-center mb-6 pb-20">Your safety matters</h2>
                <div className="flex justify-around items-start">

                    <div className="text-center px-4">
                        <div className="mb-4">
                            <img src={buss} alt="Driver Screenings Icon" className="mx-auto h-24" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Driver screenings</h3>
                        <p className='text-neutral-500'>All potential drivers in Riyadh are required to undergo driver and criminal screenings. Existing drivers must consent to annual screenings.</p>
                    </div>

                    <div className="text-center px-4">
                        <div className="mb-4">
                            <img src={layerfamely} alt="Community Guidelines Icon" className="mx-auto h-24" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Community Guidelines</h3>
                        <p className='text-neutral-500'>Our standards help to create safe connections and positive interactions with everyone.</p>
                    </div>

                    <div className="text-center px-4">
                        <div className="mb-4">
                            <img src={layer} alt="Customer Support Icon" className="mx-auto h-24" />
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