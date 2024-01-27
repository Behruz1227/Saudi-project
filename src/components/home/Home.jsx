import React from 'react'
import logo from "../../assets/home-page/logo.png"
import logosecond from "../../assets/home-page/logosecond.png"
import vektor from "../../assets/home-page/Vector.png"
import phone from "../../assets/home-page/phone.png"
import "./style.css"

function Home() {
  const firstButtonClass = "font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-3xl text-white mx-2";
  const secondButtonClass = "font-bold py-2 px-4 focus:outline-none focus:shadow-outline rounded-3xl text-white border  ";



  return (
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
              {/* 'i' elementini ma'noli bir narsa bilan almashtirish kerak */}
              <p>8:30 | Al Olaya Station 301</p>
            </button>
          </div>

          {/* O'rtadagi nuqta */}
          <i className="fa-solid fa-circle text-black"></i>

          {/* Qolgan qismi ... Har bir 'bus' elementi uchun takrorlanadi */}
          <div className='flex-shrink-0'>
            <button className={`${firstButtonClass} bg-red-400`}>Bus 592</button>
            <button className={`${secondButtonClass} text-black`}>
              {/* 'i' elementini ma'noli bir narsa bilan almashtirish kerak */}
              <p>8:35 | Abi Ayoub Asari 301</p>
            </button>
          </div>

          {/* O'rtadagi nuqta */}
          <i className="fa-solid fa-circle text-black"></i>

          <div className='flex-shrink-0'>
            <button className={`${firstButtonClass} bg-green-400`}>Bus 401</button>
            <button className={`${secondButtonClass} text-black`}>
              {/* 'i' elementini ma'noli bir narsa bilan almashtirish kerak */}
              <p>8:40 | Abdulaziz Al Olayan</p>
            </button>
          </div>

          {/* O'rtadagi nuqta */}
          <i className="fa-solid fa-circle text-black"></i>
          <div className='flex-shrink-0'>
            <button className={`${firstButtonClass} bg-green-400`}>Bus 401</button>
            <button className={`${secondButtonClass} text-black`}>
              {/* 'i' elementini ma'noli bir narsa bilan almashtirish kerak */}
              <p>8:40 | Abdulaziz Al Olayan</p>
            </button>
          </div>
          {/* Ko'proq 'bus' elementlari qo'shilishi mumkin */}
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
                  <a href="/plan" className="px-4 py-2 hover:bg-green-600 transition-colors">Plan</a>
                  <a href="/routes" className=" px-4 py-2 hover:bg-green-600 transition-colors">Routes</a>
                  <a href="/tickets" className=" px-4 py-2 hover:bg-green-600 transition-colors">Tickets</a>
                  <a href="/about" className=" px-4 py-2 hover:bg-green-600 transition-colors">About</a>
                  <a href="/contact" className=" px-4 py-2 hover:bg-green-600 transition-colors">Contact</a>
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
            <h1 className='text-9xl'>Riyadh Bus</h1>
          </div>
        </div>

        <div className='w-full h-[650px] py-32 flex flex-wrap'>
          <div className='w-full h-6/12 flex items-center relative'>
            <div className='w-5/12 h-full flex items-center bg-gray-200'>
              <div><img src={vektor} alt="" /></div>
              <div><h1 className='px-10'>New look, more routes, more stations.</h1></div>
            </div>
            <div className='w-3/12 h-full relative bg-gray-200'>
              <div><img src={phone} alt="" className='absolute bottom-0 w-80 ' /></div>
            </div>
            <div className='w-5/12 h-full flex items-center bg-gray-200'>
              <div class="bg-black text-white p-6 rounded-lg flex flex-col items-center justify-center">
                <div class="flex items-center mb-4">
                  {/* <!-- Bu yerga sizning logotipingizning tasvirini qo'ying --> */}
                  <img src="/path-to-your-logo.png" alt="Riyadh Bus Logo" class="w-12 h-12 mr-3" />
                </div>
                <p class="text-lg mb-4">Download the Riyadh Bus app today.</p>
                <div class="flex">
                  <a href="#appstore-link" class="mr-4">
                    <img src="/path-to-appstore-logo.png" alt="Download on the App Store" />
                  </a>
                  <a href="#googleplay-link">
                    <img src="/path-to-googleplay-logo.png" alt="Get it on Google Play" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className='w-full h-6/12 flex items-center relative'>
            <div className='w-4/12 flex items-center bg-gray-200'>
              <div><img src={vektor} alt="" /></div>
              <div><h1 className='px-10'>New look, more routes, more stations.</h1></div>
            </div>
            <div className='w-8/12 flex items-center bg-gray-200'>
              <div><img src={vektor} alt="" /></div>
              <div><h1 className='px-10'>New look, more routes, more stations.</h1></div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home