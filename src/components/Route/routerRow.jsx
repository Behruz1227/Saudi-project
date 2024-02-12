import { useState } from 'react'
import { busAcardion, } from '../../assets'
import '../Route/routerRow.css'
import AccardionOpen from './accaardionOpen'
import axios from 'axios'
import { url } from '../api'

const RouterRow = ({ id, item }) => {
  const [rote, setRote] = useState([])
  const [roteid, setRoteId] = useState([])
  const [stops, setStops] = useState([])
  const [backstops, setBackStops] = useState([])
  const [landmarks, setLandmarks]=useState([])
  
  const getRouteDetail = () => {
    axios.get(`${url}route/detail?id=${roteid}`)
      .then((res) => {
        setStops(res.data.body[0].toGoStops);
        setBackStops(res.data.body[0].backToStops);
        setRote(res.data.body);
        setLandmarks(res.data.body[0].landmarks)
      })
      .catch((err) => console.log(err))
  } 

    return (
      <>
        <div onClick={async () => {
          await setRoteId(id)
          await getRouteDetail()
        }} className='rounded-xl flex md:w-3/4 w-full justify-center items-center mb-3'>
          <div class="collapsible-accordion w-full">
            <div class="collapsible-item">
              <input className='router-input' type="checkbox" id={id} />
              <label class="collapsible-item-label" for={id}>
                <div className='collapsible-div'>
                  <img src={busAcardion} alt="ddd" />
                  <button
                    type='button'
                    className='rounded-3xl py-3 w-[120px] bg-[#6FD44F] text-white font-normal'>
                    {item.number}
                  </button>
                  <p className='font-normal collapsible-p'>
                    {item.fromLocation}-{item.toLocation}
                  </p>
                </div>
              </label>
              <div class="collapsible-item-content">
                {rote && <AccardionOpen rote={rote} stops={stops} backstops={backstops} landmarks={landmarks} />}
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default RouterRow