import { location } from '../../assets'
const RouterBtn = () => {
  return (
    <div className='py-5 routerBtn rounded-3xl flex w-3/4 background justify-between px-10 items-center'>
      <div className="flex gap-5 justify-between">
        <div className='sm:block hidden' >
          <img src={location} alt="Location" className=' sm:w-20 sm:h-20 sm:mx-5 md:block  items-center' />
        </div>
        <div className='h-30 w-[0.5px] bg-slate-400 sm:block hidden'>
        </div>
        <div className={`routerP flex items-center text routerThird `}>
          <p>Buses operate from 5 AM till 12 AM</p>
        </div>
      </div>
      <div className='routerForth'>
        <button type='button' className='btn1 sm:flex-col flex-row'>Download the map</button>
      </div>
    </div>

  )
}

export default RouterBtn