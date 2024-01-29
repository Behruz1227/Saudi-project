function Tripplan() {
    return ( 
        <>
        <div className='lg:p-20 px-0 w-full h-max '>
          <div className='plan-trip w-full h-full rounded-3xl flex lg:flex-row flex-col'>
            <div className='lg:p-12 lg:w-6/12 w-full md:p-10 p-5'>
              <p className='text-white'>PLAN Your Trip</p>
              <h2 className='text-lime-500 lg:text-6xl text-3xl mt-10 '>Find the best route in seconds.</h2>
              <h2 className='text-white lg:mt-14 mt-5 lg:text-3xl text-xl w-8/12'>Turn on your GPS and find the fastest bus route to reach your destination.</h2>
              <button className='py-3 px-7 bg-white text-black rounded-3xl mt-5'>Plan your trip </button>
            </div>
            <div>

            </div>
          </div>
        </div>
        </>
     );
}

export default Tripplan;