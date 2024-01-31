import { Link } from "react-router-dom"

const LocationSidebar = () => {
  const inputStyle = "w-full mt-4 rounded-3xl px-6 py-1.5 border placeholder:text-[.85rem] focus:outline-0 focus:border-green-400 focus:bg-green-50 duration-300"
  
  return (
    <>
      <div className="loc-sidebar-main w-full md:min-h-screen p-10">
        <div className="flex justify-between items-start">
          <p className="font-bold text-[1.2rem] tracking-wide">Where to?</p>
          <p
            className="bg-white border px-4 py-[.1rem] rounded-2xl hover:cursor-pointer text-green-300 
            hover:text-green-500 duration-300">
            <i
              className="fa-solid fa-sliders scale-110"></i>
          </p>
        </div>

        <div className="mt-4 relative">
          <input className={`${inputStyle}`} placeholder="From Departure Station" />
          <input className={`${inputStyle}`} placeholder="To Destination" />
          <i
            className="fa-solid fa-arrow-right-arrow-left rotate-90 p-3 text-green-300 bg-green-900 
            border-gray-300 rounded-full absolute right-4 top-9 hover:border-gray-400 duration-300
            active:text-green-100 active:bg-green-700 active:border-gray-300 border-4"></i>
          <p className="w-full mt-3 text-[.9rem] flex justify-start items-center font-medium tracking-wide">
            <i className="fa-solid fa-location-crosshairs mr-4 text-[1.2rem] hover:cursor-pointer hover:text-slate-700 duration-300"></i>
            Your pin location
          </p>
        </div>

        <div className="mt-10">
          <p className="leading-5 text-[.9rem] text-center font-medium">
            No routes found. For more results, consider increasing your maximum walking time in the
            <span className="ml-2 text-green-400 tracking-wide hover:underline hover:text-green-500 duration-300">
              <Link>filters</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default LocationSidebar