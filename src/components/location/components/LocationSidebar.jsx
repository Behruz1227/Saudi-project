import { Link } from "react-router-dom"

const LocationSidebar = () => {
  const inputStyle = "w-full mt-4 rounded-3xl px-6 py-1.5 border placeholder:text-[.85rem] focus:outline-0 focus:border-green-400 focus:bg-green-50 duration-300"

  return (
    <>
      <div className="loc-sidebar-main w-full md:min-h-screen p-10">
        <div className="flex justify-between items-start">
          <p className="font-bold text-[1.2rem] tracking-wide">Where to?</p>
          <img src={require('../../../assets/filter.png')} className="hover:cursor-pointer" alt="img" />
        </div>

        <div className="mt-4 relative">
          <input className={`${inputStyle}`} placeholder="From Departure Station" />
          <input className={`${inputStyle}`} placeholder="To Destination" />
          <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90 p-3 w-12 h-12 text-green-300 bg-green-900 
            border-gray-300 rounded-full absolute right-4 top-9 hover:border-gray-400 duration-300
            active:text-green-100 active:bg-green-700 active:border-gray-300 border-4" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4" /></svg>
          <p className="w-full mt-3 text-[.9rem] flex justify-start items-center font-medium tracking-wide">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-4 w-6 h-6 text-[1.2rem] hover:cursor-pointer hover:text-slate-700 duration-300" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M8 1.018V0H7v1.018a6.5 6.5 0 0 0-5.981 5.977H0v1h1.019A6.508 6.508 0 0 0 7 13.981V15h1v-1.019a6.508 6.508 0 0 0 5.981-5.986H15v-1h-1.019A6.5 6.5 0 0 0 8 1.018M8 3v3.995h4v1H8V12H7V7.995H3v-1h4V3z" clip-rule="evenodd" /></svg>
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