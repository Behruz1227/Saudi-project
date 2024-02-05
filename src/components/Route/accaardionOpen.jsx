import { accardion1, accardion3 } from '../../assets';
import Chupah from './chupah';
import Chupah2 from './chupah2';
import Chupah3 from './chupah3';

const AccardionOpen = ({ landmarks, toTransBus, fromTransBus }) => {
  const styles = { pargStyle: 'text-xs accardionP font-normal w-[13rem] text-[#737373]' }

  let toTrans = [], fromTrans = [], landmark = [];
  for (let i = 0; i < 3; i++) toTrans.push(toTransBus[i])
  for (let i = 0; i < 3; i++) fromTrans.push(fromTransBus[i])
  for (let i = 0; i < 2; i++) landmark.push(landmarks[i])

  return (
    <div className='w-100% mx-auto h-[20rem] overflow-y-auto scroll-style mediaAccardion gap-10'>
      <div className='acardion-flex'>
        <div className='flex w-100% mb-5'>
          <img src={accardion1} alt="accardion image" className='mx-3' />
          <div className='block w-100%'>
            <h3 className='font-semibold accardionH3'>{toTrans[0]}</h3>
            <p className={styles.pargStyle}>
              {toTrans[1]} {toTrans[2]}
            </p>
          </div>
        </div>
        <div className='list-map'>
          <Chupah toTransBus={toTransBus} />
        </div>
      </div>
      <div className='acardion-flex'>
        <div className='flex w-100% mb-5'>
          <img src={accardion1} alt="accardion image" className='mx-3' />
          <div className='block w-100%'>
            <h3 className='font-semibold accardionH3'>{fromTrans[0]}</h3>
            <p className={styles.pargStyle}>
              {fromTrans[1]} {fromTrans[2]}
            </p>
          </div>
        </div>
        <div className='list-map'>
          <Chupah2 fromTransBus={fromTransBus} />
        </div>
      </div>
      <div className='acardion-flex'>
        <div className='flex w-100% mb-5'>
          <img src={accardion3} alt="accardion image" className='mx-3' />
          <div className='block w-100%'>
            <h3 className='font-semibold accardionH3'>{landmark[0]}</h3>
            <p className={styles.pargStyle}>
              {landmark[1]}
            </p>
          </div>
        </div>
        <div className='list-map'>
          <Chupah3 landmarks={landmarks} />
        </div>
      </div>

    </div>
  )
}

export default AccardionOpen
