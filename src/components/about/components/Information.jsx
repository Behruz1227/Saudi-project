import { brandingElement } from './imgs/index';

const Information = () => {
  return (
    <div className='w-full flex justify-between items-start'>
      <div className='w-1/2 flex justify-between'>
        <div className='w-1/2'>
          <img className='mt-14' src={brandingElement} alt="brandingElementImg" />
        </div>
        <div className='w-full pl-5'>
          <p className='text-[1.2rem] tracking-wide font-medium' style={{ color: "#00CF00" }}>OVERVIEW</p>
          <h1 className='mt-10 text-[2rem] font-bold tracking-wide heading-tags-color'>
            Planning for <br />
            Riyadh’s <br />
            future mobility <br />
            needs
          </h1>
        </div>
      </div>
      <div className='w-1/2 pr-36 leading-7 tracking-wide text-black opacity-95 text-[1rem]'>
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