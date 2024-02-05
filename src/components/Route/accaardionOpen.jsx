import { accardion1, accardion3 } from '../../assets'
import Chupah from './chupah'

const AccardionOpen = () => {
  return (
    <div className='w-100%  mx-auto  h-[20rem]  overflow-y-auto scroll-style mediaAccardion gap-10   '>
      <div className='acardion-flex  '>
        <div className='flex w-100% mb-5'>
          <img src={accardion1} alt="accardion image  " className='mx-3' />
          <div className='block w-100%'>
            <h3 className='font-semibold accardionH3 ' >Transportation center</h3>
            <p className='text-xs accardionP font-normal w-[13rem] text-[#737373]'>Transportation center to - King
              Saud University
            </p>
          </div>
        </div>
        <div className='list-map'>
          <Chupah />
        </div>
      </div>
      <div className='acardion-flex  '>
        <div className='flex w-100% mb-5'>
          <img src={accardion1} alt="accardion image  " className='mx-3' />
          <div className='block w-100%'>
            <h3 className='font-semibold accardionH3 ' >Transportation center</h3>
            <p className='text-xs accardionP font-normal w-[13rem] text-[#737373]'>Transportation center to - King
              Saud University
            </p>
          </div>
        </div>
        <div className='list-map'>
          <Chupah />
        </div>
      </div>
      <div className='acardion-flex  '>
        <div className='flex w-100% mb-5'>
          <img src={accardion3} alt="accardion image  " className='mx-3' />
          <div className='block w-100%'>
            <h3 className='font-semibold accardionH3 ' >Transportation center</h3>
            <p className='text-xs accardionP font-normal w-[13rem] text-[#737373]'>Transportation center to - King
              Saud University
            </p>
          </div>
        </div>
        <div className='list-map'>
          <Chupah />
        </div>
      </div>
     
    </div>
  )
}

export default AccardionOpen
