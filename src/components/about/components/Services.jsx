import { images, googleIcon, appleIcon } from "./imgs/index";

const Services = () => {
  return (
    <div className="w-[1100px]">
      <h1 className="heading-tags-color text-[2rem] font-bold tracking-wide text-center leading-10">
        Providing commuters with enhanced <br />
        mobility services
      </h1>
      <p className="text-center text-black opacity-80 font-medium tracking-wide leading-5 text-[.9rem] mt-8">
        Elevating the commuting experience by delivering enhanced mobility <br />
        services, we are dedicated to making every journey seamless, efficient, <br />
        and tailored to the needs of our valued commuters.
      </p>
      <div className="mt-20 relative shadow-lg rounded-3xl overflow-hidden">
        <img src={images} alt="images" className="w-full" />
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