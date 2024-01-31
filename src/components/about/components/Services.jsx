import { images, googleIcon, appleIcon, mobile } from "./imgs/index";
import servicesVideo from "../components/imgs/about-us.mp4";
import riyadhbusvideo from "../../../assets/home-page/video/riyadhbusvideo.mp4";

const Services = () => {
  const styles = {
    googleAndAlpple: "hover:cursor-pointer active:scale-95 duration-300",
    mobileGoogleApple: "services_buttons w-1/2 h-10 mx-2 hover:cursor-pointer active:scale-95 duration-200",
    pargrafStyle: "text-white text-[1.2rem] tracking-wider leading-6",
  }

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
          <p className={styles.pargrafStyle}>Our journey to <br />enhance mobility</p>
        </div>
        <div className="mx-auto flex justify-center items-start mt-10">
          <img src={appleIcon} alt="img" className={styles.mobileGoogleApple} />
          <img src={googleIcon} alt="img" className={styles.mobileGoogleApple} />
        </div>
        <div className="mx-auto mt-12 w-2/4">
          {/* <img src={mobile} alt="img" className="w-full" /> */}
          <video src={riyadhbusvideo} autoPlay loop className={`w-full`}></video>
        </div>
      </div>

      <div className="mt-20 relative about-services-box hidden md:inline-block">
        <video
          src={servicesVideo}
          className="w-full shadow-lg hover:shadow-2xl duration-200 rounded-3xl"
          autoPlay
          loop></video>
        {/* <img src={images} alt="images" className="w-full shadow-lg hover:shadow-2xl duration-200 rounded-3xl" /> */}
        <p className={`absolute top-[48%] left-[7%] ${styles.pargrafStyle}`}>Our journey to <br />enhance mobility</p>
        <div className="absolute right-[7%] top-[46.7%] flex">
          <img src={googleIcon} alt="google img" className={`w-36 ${styles.googleAndAlpple}`} />
          <img src={appleIcon} alt="apple img" className={`w-[127px] ml-3 ${styles.googleAndAlpple}`} />
        </div>
      </div>
    </div>
  )
}

export default Services;