import React from 'react'
import logo from "../../assets/home-page/logo.png"
import logosecond from "../../assets/home-page/logosecond.png"
import vektor from "../../assets/home-page/Vector.png"
import phone from "../../assets/home-page/phone.png"
import uber from "../../assets/home-page/uber.png"
import circle from "../../assets/home-page/Ellipse.png"
import car from "../../assets/home-page/car.png"
import line from "../../assets/home-page/Line.png"
import buss from "../../assets/home-page/buss.png"
import layerfamely from "../../assets/home-page/Layerfamely.png"
import layer from "../../assets/home-page/Layer-first.png"
import "./style.css"

function Home() {
  const firstButtonClass = "font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-3xl text-white mx-2";
  const secondButtonClass = "font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-3xl text-white border  ";



  return (
    <>
      <div className='w-full px-20 py-10'>
        {/* first part */}
        <div className="home-header flex justify-between items-center 2xl:h-[850px] h-[700px] w-full rounded-3xl">
          <div className="w-50 p-20">
            <div className='w-[500px] h-92 bg-white rounded-2xl p-10 '>
              <p className='text-4xl mb-5'>Your next ride is just a finger tip away</p>
              <p className='mb-5'>We're committed to create a safe environment for our users.</p>
              <button className='bg-lime-500 rounded-3xl py-3 px-10 mb-5'>Plan your trip</button>
              <p>Learn more about Riyadh bus transportation </p>
            </div>
          </div>
          <div className='w-50'></div>
        </div>

        <div className='max-w-full pt-10 overflow-x-auto scroll-x'>
          <div className='flex items-center space-x-6'>
            <div className='flex-shrink-0'>
              <button className={`${firstButtonClass} bg-blue-400`}>Bus 151</button>
              <button className={`${secondButtonClass} text-black`}>
                <p>8:30 | Al Olaya Station 301</p>
              </button>
            </div>

            {/* O'rtadagi nuqta */}
            <i className="fa-solid fa-circle text-black"></i>

            <div className='flex-shrink-0'>
              <button className={`${firstButtonClass} bg-red-400`}>Bus 592</button>
              <button className={`${secondButtonClass} text-gray-`}>
                <p>8:35 | Abi Ayoub Asari 301</p>
              </button>
            </div>
            {/* O'rtadagi nuqta */}
            <i className="fa-solid fa-circle text-black"></i>
            <div className='flex-shrink-0'>
              <button className={`${firstButtonClass} bg-green-400`}>Bus 401</button>
              <button className={`${secondButtonClass} text-black`}>
                <p>8:40 | Abdulaziz Al Olayan</p>
              </button>
            </div>
            {/* O'rtadagi nuqta */}
            <i className="fa-solid fa-circle text-black"></i>
            <div className='flex-shrink-0'>
              <button className={`${firstButtonClass} bg-green-400`}>Bus 401</button>
              <button className={`${secondButtonClass} text-black`}>
                <p>8:40 | Abdulaziz Al Olayan</p>
              </button>
            </div>
          </div>
        </div>


        {/* second part */}
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

        <div className='p-20 w-full h-max'>
          <div className='plan-trip w-full h-full rounded-3xl'>
            <div className='p-12 w-6/12'>
              <p className='text-white'>PLAN Your Trip</p>
              <h2 className='text-lime-500 text-6xl mt-10 '>Find the best route in seconds.</h2>
              <h2 className='text-white mt-14 text-3xl w-8/12'>Turn on your GPS and find the fastest bus route to reach your destination.</h2>
              <button className='py-3 px-7 bg-white text-black rounded-3xl mt-5'>Plan your trip </button>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>

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

      <div>
        <div className="bg-gray-100 py-20 h-max px-20">
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
    </>

  )
}

export default Home