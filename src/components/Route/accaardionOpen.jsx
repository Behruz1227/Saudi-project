import { useEffect, useState } from 'react';
import { accardion1, accardion3 } from '../../assets';
import Chupah from './chupah';
import Chupah2 from './chupah2';
import Chupah3 from './chupah3';

const AccardionOpen = ({ rote }) => {

  const styles = { pargStyle: 'text-xs accardionP font-normal w-[13rem] text-[#737373]' }

  return (
    <div className='w-100% mx-auto h-[20rem] overflow-y-auto scroll-style mediaAccardion gap-10'>
      <div className='acardion-flex'>
        <div className='flex w-100% mb-5'>
          <img src={accardion1} alt="accardion image" className='mx-3' />
          <div className='block w-100%'>
            <h3 className='font-semibold accardionH3'>{rote[0] && rote[0].fromLocation[0]}</h3>
            <p className={styles.pargStyle}>
              {rote[0] && rote[0].fromLocation[1]}
            </p>
          </div>
        </div>
        <div className='list-map'>
         {rote && <Chupah rote={rote[0]} />}
        </div>
      </div>
      <div className='acardion-flex'>
        <div className='flex w-100% mb-5'>
          <img src={accardion1} alt="accardion image" className='mx-3' />
          <div className='block w-100%'>
            <h3 className='font-semibold accardionH3'>{rote[0] && rote[0].toLocation[0]}</h3>
            <p className={styles.pargStyle}>
              {rote[0] && rote[0].toLocation[1]}
            </p>
          </div>
        </div>
        <div className='list-map'>
          {/* <Chupah2  /> */}
        </div>
      </div>
      <div className='acardion-flex'>
        <div className='flex w-100% mb-5'>
          <img src={accardion3} alt="accardion image" className='mx-3' />
          <div className='block w-100%'>
            <h3 className='font-semibold accardionH3'>
              {rote[0] && rote[0].landmarks[0]}
            </h3>
            <p className={styles.pargStyle}>
            {rote[0] && rote[0].landmarks[1]}
            {rote[0] && rote[0].landmarks[2]}
            </p>
          </div>
        </div>
        <div className='list-map'>
          {/* <Chupah3  /> */}
        </div>
      </div>

    </div>
  )
}

export default AccardionOpen
