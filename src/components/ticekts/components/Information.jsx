import { kvadrat } from "../../../assets"


const Information = () => {
    return (
      <div className='w-full flex justify-between items-start'>
        <div className='w-1/2 flex justify-between'>
        <div className='w-1/2'>
          <img className='mt-14' src={kvadrat} alt="" />
        </div>
          <div className='w-full pl-5'>
            <p className='text-[1.2rem] tracking-wide font-medium' style={{ color: "#00CF00" }}>OVERVIEW</p>
            <h1 className='mt-10 text-[2rem] font-bold tracking-wide heading-tags-color'>
            Different types<br/> 
            of tickets are<br/>
             available
            
            </h1>
          </div>
        </div>
        <div className='w-1/2 pr-36 leading-7 tracking-wide text-black opacity-95 text-[1rem]'>
          <p className='mt-14'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat metus at purus blandit tincidunt pharetra vel lorem. Maecenas massa ante, iaculis a ipsum at, ornare dictum sapien.
          </p>
         
        </div>
      </div>
    )
  }
  
  export default Information