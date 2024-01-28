import { appleimg, logoimage, navbarlo, navbarlo1, navbarlo2 } from "../assets";
import { navigationLink } from "./constanta";
import { styles } from "./style";

const Navbar = () => {
  return (
    <>
      <div className="w-full">
        <nav className="">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobilne menuyu button */}
                <button
                  type="button"
                  className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false'
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>
                
                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-8 w-auto" src={logoimage} alt="" />
                </div>
                <div className="h-8 w-auto ">
                  <div className=" space-x-4 flex flex-row-reverse">
                    <a href="" className=" text-black px-10 py-2 text-sm font-">Plan</a>
                    <a href="" className=" text-black px-10 py-2 text-sm font-">Routes</a>
                    <a href="" className=" text-black px-10 py-2 text-sm font-">Tickets</a>
                    <a href="" className=" text-black px-10 py-2 text-sm font-">About</a>
                    <a href="" className=" text-black px-10 py-2 text-sm font-">Contact</a>
          
                  </div>
      
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
              </div>

            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
