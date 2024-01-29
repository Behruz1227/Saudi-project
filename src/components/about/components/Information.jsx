import { brandingElement } from './imgs/index';

const Information = () => {
  return (
    <div className='w-full flex justify-between items-start about-information-main'>
      <div className='w-1/2 flex justify-between about-information-box1'>
        <div className='w-1/2 hidden sm:inline-block'>
          <img className='mt-14' src={brandingElement} alt="brandingElementImg" />
        </div>
        <div className='w-full px-[3rem] sm:pl-5'>
          <p className='text-[1.2rem] tracking-wide font-medium' style={{ color: "#00CF00" }}>OVERVIEW</p>
          <h1 className='mt-10 text-[1.5rem] sm:text-[2rem] font-bold tracking-wide heading-tags-color'>
            Planning for <br className='information_br1' />
            Riyadh’s <br />
            future mobility <br />
            needs
          </h1>
        </div>
      </div>
      <div className='w-1/2 pr-14 lg:pr-36 leading-7 tracking-wide text-black opacity-95 text-[1rem] about-information-box2'>
        <p className='mt-14'>
          The Royal Commission for Riyadh City launched the "Riyadh Bus" service, part of King Abdulaziz
          Project for Riyadh Public Transport, in five stages to serve the transportation needs for the city
          of Riyadh.
        </p>
        <p className='mt-6'>
          The first three stages of the “Riyadh Bus” service were launched in March, June, and August of
          this year and witnessing key announcements and service additions that included the introduction
          of the dedicated bus lanes. On the 19th of October Stage 4 was launched expanding the overall network
          to serve 40 routes through 614 buses covering more than 1632 stations and stops.
        </p>
      </div>
    </div>
  )
}

export default Information