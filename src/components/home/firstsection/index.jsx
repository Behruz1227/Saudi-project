
function TripplanFirs() {
    const firstButtonClass = "font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-3xl text-white mx-2";
    const secondButtonClass = "font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-3xl text-white border  ";
    return (

        <div className="md:p-0 p-2">
            <div className="home-header flex justify-between items-center md:flex-row flex-col 2xl:h-[850px] md:h-[650px] w-full rounded-3xl">
                <div className="w-50 lg:p-20 md:p-10 sm:p-5">
                    <div className='md:w-[500px] sm:w-[300px] h-92 bg-white rounded-2xl p-10 '>
                        <p className='text-4xl mb-5'>Your next ride is just a finger tip away</p>
                        <p className='mb-5'>We're committed to create a safe environment for our users.</p>
                        <button className='bg-lime-500 rounded-3xl md:py-3 py-2 md:px-10 px-5 mb-5'>Plan your trip</button>
                        <p>Learn more about Riyadh bus transportation </p>
                    </div>
                </div>
                <div className='lg:w-50 lg:block hidden'></div>
            </div>

            <div className='max-w-full pt-10 overflow-x-auto scroll-x'>
                <div className='flex items-center space-x-6'>
                    <div className='flex-shrink-0'>
                        <button className={`${firstButtonClass} bg-blue-400`}>Bus 151</button>
                        <button className={`${secondButtonClass}`}>
                            <p className="text-gray-500">8:30 | Al Olaya Station 301</p>
                        </button>
                    </div>

                    {/* O'rtadagi nuqta */}
                    <i className="fa-solid fa-circle text-black"></i>

                    <div className='flex-shrink-0'>
                        <button className={`${firstButtonClass} bg-red-400`}>Bus 592</button>
                        <button className={`${secondButtonClass} text-gray-`}>
                            <p className="text-gray-500">8:35 | Abi Ayoub Asari 301</p>
                        </button>
                    </div>
                    {/* O'rtadagi nuqta */}
                    <i className="fa-solid fa-circle text-black"></i>
                    <div className='flex-shrink-0'>
                        <button className={`${firstButtonClass} bg-green-400`}>Bus 401</button>
                        <button className={`${secondButtonClass} `}>
                            <p className="text-gray-500">8:40 | Abdulaziz Al Olayan</p>
                        </button>
                    </div>
                    {/* O'rtadagi nuqta */}
                    <i className="fa-solid fa-circle text-black"></i>
                    <div className='flex-shrink-0'>
                        <button className={`${firstButtonClass} bg-green-400`}>Bus 401</button>
                        <button className={`${secondButtonClass}`}>
                            <p className="text-gray-500">8:40 | Abdulaziz Al Olayan</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TripplanFirs;