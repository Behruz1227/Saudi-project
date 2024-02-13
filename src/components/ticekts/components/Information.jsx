import { kvadrat } from "../../../assets"


const Information = () => {
  return (
    <div className='w-full flex lg:justify-between md:justify-center  items-start about-information-main '>
      <div className='w-1/2 flex  justify-between '>
        <div className='w-1/2 hidden sm:inline-block'>
          <img className='mt-14' src={kvadrat} alt="" />
        </div>
        <div className='w-full lg:px-[3rem] sm:pl-5'>
          <p className='text-[1.2rem] tracking-wide font-medium' style={{ color: "#00CF00" }}>OVERVIEW</p>
          <h1 className='mt-8 text-[1.5rem] sm:text-[2rem] font-bold tracking-wide heading-tags-color'>
            Different types<br className="information_br1" />
            of tickets are<br />
            available

          </h1>
        </div>
      </div>
      <div className='lg:w-1/2 md:w-2/3  lg:pr-36 leading-7 tracking-wide text-black opacity-95 text-[1rem] '>
        <p className='mt-[4.3rem]'>
          There are different ticket options available based on journey time. Children age six and under travel for free.
        </p>

      </div>
    </div>
  )
}

export default Information