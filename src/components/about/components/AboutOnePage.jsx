import { headBus } from './imgs/index';

const AboutOnePage = () => {
  return (
    <div className={`flex justify-center items-center w-full`}>
      <div className='max-w-[1450px] h-[50vh] lg:h-[75vh] sm:h-[55vh] md:h-[60vh] aboutOnePage-main relative'>
        <img src={headBus} alt="img"
          className='about-one-page duration-200 w-full h-full rounded-3xl 
          object-cover object-right sm:object-right xl:object-cover shadow-xl' />
        <p className='absolute top-[3%] sm:top-[40%] right-[15%] sm:left-[10%] text-white text-[1.7rem] sm:text-[2.5rem] lg:text-[3.5rem] tracking-wider'>
          <span className='opacity-70'>About </span><span className='font-bold'>Riyadh Bus</span></p>
      </div>
    </div>
  )
}

export default AboutOnePage;