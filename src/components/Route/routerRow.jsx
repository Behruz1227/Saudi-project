import { useState } from 'react'
import { busAcardion, } from '../../assets'
import '../Route/routerRow.css'
import AccardionOpen from './accaardionOpen'


const RouterRow = ({ id, item }) => {

  return (
    <>
      <div className='rounded-xl flex md:w-3/4 w-full justify-center items-center mb-3'>
        <div class="collapsible-accordion w-full">
          <div class="collapsible-item">
            <input className='router-input' type="checkbox" id={id} />
            <label class="collapsible-item-label" for={id}>
              <div className='collapsible-div'>
                <img src={busAcardion} alt="ddd" />
                <button type='button' className=' rounded-3xl py-3 w-[120px] bg-[#6FD44F] text-white font-normal'>{
                  item.number
                }</button>
                <p className='font-normal collapsible-p'>{
                  item.description
                }</p>
              </div>
            </label>
            <div class="collapsible-item-content">
              <AccardionOpen item={item} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RouterRow