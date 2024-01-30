import { kvadrat } from "../../../assets"


const Information = () => {
    return (
      <div className='w-full flex justify-between items-start about-information-main '>
        <div className='w-1/2 flex justify-between about-information-box1'>
        <div className='w-1/2 hidden sm:inline-block'>
          <img className='mt-14' src={kvadrat} alt="" />
        </div>
          <div className='w-full px-[3rem] sm:pl-5'>
            <p className='text-[1.2rem] tracking-wide font-medium' style={{ color: "#00CF00" }}>OVERVIEW</p>
            <h1 className='mt-10 text-[1.5rem]sm:text-[2rem] font-bold tracking-wide heading-tags-color'>
            Different types<br className="information_br1"/> 
            of tickets are<br/>
             available
            
            </h1>
          </div>
        </div>
        <div className='w-1/2 pr-14 lg:pr-36 leading-7 tracking-wide text-black opacity-95 text-[1rem] about-information-box2'>
          <p className='mt-14'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat metus at purus blandit tincidunt pharetra vel lorem. Maecenas massa ante, iaculis a ipsum at, ornare dictum sapien.
          </p>
         
        </div>
      </div>
    )
  }
  
  export default Information