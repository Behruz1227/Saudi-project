import axios from 'axios';
import { brandingElement } from '../about/components/imgs'
import Footer from '../footer/Footer'
import { styles } from '../style'
import RouterBottom from './routerBottom'
import RouterBtn from './routerBtn'
import RouterRow from './routerRow'
import { url } from '../api'
import { useEffect, useState } from 'react'

const Routerr = () => {
  const [route, setRoute] = useState([]);
  
  useEffect(() => {
    getBusses()
  }, [])

  const getBusses = () => {
    axios.get(`${url}route/list`)
      .then((res) => setRoute(res.data.body))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <div className={`flex justify-center items-center rounded-3xl overflow-hidden w-full px-10`}>
        <div className='max-w-[1450px] h-[40vh] rounded-3xl lg:h-[75vh] sm:h-[50vh] md:h-[60vh] w-full router-main'></div>
      </div>
      <div className='w-full flex justify-between items-start sm:py-10  py-5 text-top'>
        <div className='w-1/2 flex justify-between text-top-container'>
          <div className='w-1/2  text-top-img'>
            <img className='mt-14' src={brandingElement} alt="brandingElementImg" />
          </div>
          <div className='headingDiv w-full pl-5'>
            <p className='text-[1.2rem] tracking-wide font-medium' style={{ color: "#00CF00" }}>OVERVIEW</p>
            <h1 className='sm:mt-10 md:mt-10  text-[2rem] font-bold heading-tags-colors'>
              Quickly access
              your favorite
              destinations
            </h1>
          </div>
        </div>
        <div className='w-3/4 pr-36 leading-7 tracking-wide text-bottom  text-black opacity-95 text-[1rem]'>
          <p className='sm:mt-14 textbottomp1  w-full'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat metus at purus blandit tincidunt pharetra vel lorem. Maecenas massa ante, iaculis a ipsum at, ornare dictum sapien.
          </p>
          <p className='mt-6 textbottomp1'>
            Praesent ut felis vitae purus semper vehicula sed in massa. Fusce finibus dolor eget lectus viverra posuere. In non eleifend elit, et lacinia elit
          </p>
        </div>
      </div>
      <div className={` ${styles} w-full flex justify-center`}>
        <RouterBtn />
      </div>
      <div className={` ${styles} w-full flex justify-center`}>
        <RouterBottom />
      </div>
      <div className={` ${styles} w-full flex flex-col items-center justify-center`}>
        {route.length && route.map((item) => (
          <RouterRow id={item.id} item={item} />
        ))}
      </div>
      <Footer />

    </>

  )
}

export default Routerr