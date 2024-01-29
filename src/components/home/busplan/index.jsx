import uber from "../../../assets/home-page/uber.png"
import circle from "../../../assets/home-page/Ellipse.png"
import car from "../../../assets/home-page/car.png"
import line from "../../../assets/home-page/Line.png"
import buss from "../../../assets/home-page/buss.png"


function BusPlan() {
    return (
        <div className='w-full h-[500px] px-10 flex items-center bg-neutral-800 text-white relative'>
            <img src={circle} alt="" className='absolute left-0 right-0 mx-auto w-80' />
            <div className='w-7/12 flex'>
                <div className='mr-5'>
                    <img src={uber} alt="" className='w-[200px]' />
                </div>
                <div>
                    <h1 className='text-4xl'>Is your bus stop far?</h1>
                    <h2 className='text-5xl'>Get a free Uber to your next bus stop for <span className='text-green-400'>FREE.</span></h2>
                    <p className='text-3xl mt-10'>Avail free Uber rides to designated bus stations if you have a bus ticket or a pass</p>
                </div>
            </div>
            <div className='w-6/12 flex items-center relative'>
                <img src={car} alt="" className='absolute left-0 z-10 w-[300px]' />
                <img src={line} alt="" className='absolute  right-2 z-0' />
                <div className='p-4 w-24 h-24 bg-white flex justify-center items-center rounded-lg absolute  right-0'>
                    <img src={buss} alt="" />
                </div>
            </div>
        </div>
    );
}

export default BusPlan;