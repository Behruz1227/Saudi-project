import uber from "../../../assets/home-page/uber.png"
import circle from "../../../assets/home-page/Ellipse.png"
import car from "../../../assets/home-page/car.png"
import line from "../../../assets/home-page/Line.png"
import buss from "../../../assets/home-page/buss.png"


function BusPlan() {
    return (
        <div className='w-full lg:h-[500px] md:h-[700px] h-max py-5 md:px-10 px-3 flex items-center lg:flex-row flex-col bg-neutral-800 text-white relative'>
            <img src={circle} alt="" className='absolute left-0 right-0 mx-auto bsolute top-0 bottom-0 my-auto w-80' />
            <div className='md:w-7/12 w-full flex lg:h-[470px] h-max'>
                <div className='mr-5'>
                    <img src={uber} alt="" className='w-[200px]' />
                </div>
                <div>
                    <h1 className='text-4xl'>Is your bus stop far?</h1>
                    <h2 className='md:text-5xl text-3xl md:mt-0 mt-3'>Get a free Uber to your next bus stop for <span className='text-green-400'>FREE.</span></h2>
                    <p className='md:text-3xl text-2xl md:mt-10 pt-3'>Avail free Uber rides to designated bus stations if you have a bus ticket or a pass</p>
                </div>
            </div>
            <div className='lg:w-6/12 w-full flex items-center relative h-[300px]'>
                <img src={car} alt="" className='absolute lg:left-0 md:left-20 sm:left-10 left-0 z-10 md:w-[300px] w-[200px] ' />
                <img src={line} alt="" className='absolute  lg:right-2 md:right-48 right-16  z-0 md:w-auto sm:w-[370px] w-[250px]' />
                <div className='p-4 md:w-24 md:h-24 w-16 h-16 bg-white flex justify-center items-center rounded-lg absolute  lg:right-0 md:right-26 sm:right-16 right-0'>
                    <img src={buss} alt="" />
                </div>
            </div>
        </div>
    );
}

export default BusPlan;