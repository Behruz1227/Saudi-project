import { headBus } from './imgs/index';

const AboutOnePage = () => {
  return (
    <div className={`flex justify-center items-center w-full`}>
      <div className='about-one-page max-w-[1450px] h-[75vh]'>
        <img src={headBus} alt="img" className='w-full h-full rounded-3xl object-cover relative' />
        <p className='absolute top-[40%] left-[10%] text-white text-[3.5rem] tracking-wider'>
          <span className='opacity-70'>About </span><span className='font-bold'>Riyadh Bus</span></p>
      </div>
    </div>
  )
}

export default AboutOnePage