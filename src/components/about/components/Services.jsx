import { images, googleIcon, appleIcon, mobile } from "./imgs/index";

const Services = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <h1 className="heading-tags-color text-[1.5rem] sm:text-[2rem] font-bold tracking-wide text-center leading-10">
        Providing commuters with enhanced <br className="services_br" />
        mobility services
      </h1>
      <p className="text-center text-black opacity-80 px-[1.5rem] font-medium tracking-wide leading-5 text-[.9rem] mt-8">
        Elevating the commuting experience by delivering enhanced mobility <br className="services_br" />
        services, we are dedicated to making every journey seamless, efficient, <br className="services_br" />
        and tailored to the needs of our valued commuters.
      </p>
      <div className="mt-20 bg-black mx-[3rem] rounded-3xl shadow-xl flex flex-col md:hidden">
        <div className="mx-auto mt-12 text-center">
          <p className="text-white text-[1.2rem] tracking-wider leading-6">Our journey to <br />enhance mobility</p>
        </div>
        <div className="mx-auto flex justify-center items-start mt-10">
          <img src={appleIcon} alt="img" className="services_buttons w-1/2 h-10 mx-2 hover:cursor-pointer active:scale-95 duration-200" />
          <img src={googleIcon} alt="img" className="services_buttons w-1/2 h-10 mx-2 hover:cursor-pointer active:scale-95 duration-200" />
        </div>
        <div className="mx-auto mt-12 w-2/4">
          <img src={mobile} alt="img" className="w-full" />
        </div>
      </div>
      <div className="mt-20 relative about-services-box hidden md:inline-block">
        <img src={images} alt="images" className="w-full shadow-lg hover:shadow-2xl duration-200 rounded-3xl" />
        <p className="absolute text-white top-[48%] left-[7%] text-[1.2rem] tracking-wider leading-6">Our journey to <br />enhance mobility</p>
        <div className="absolute right-[7%] top-[46.7%] flex">
          <img src={googleIcon} alt="google img" className="w-36 cursor-pointer" />
          <img src={appleIcon} alt="apple img" className="w-[127px] ml-3 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Services;