import { busAcardion, } from '../../assets'
import '../Route/routerRow.css'

const RouterRow = ({id}) => {
  return (
    <>
    <div className='rounded-xl flex md:w-3/4 w-full justify-сenter  items-center'>
      <div class="collapsible-accordion w-full">
        <div class="collapsible-item">
          <input className='router-input' type="checkbox" id={id} />
          <label class="collapsible-item-label" for={id}>
            <img src={busAcardion} alt="ddd"  />
            <button type='button' className=' rounded-3xl sm:py-2 py-0 px-3 bg-[#6FD44F] text-white font-normal'>Bus 160</button>
            <p className='font-normal'>Khalid Bin Alwaled Road - Imam Shaflee</p>
          </label>
          <div class="collapsible-item-content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default RouterRow