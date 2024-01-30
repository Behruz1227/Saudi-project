import { routeimg, } from '../../assets'
import { brandingElement } from '../about/components/imgs'
import Footer from '../footer/Footer'
import { styles } from '../style'
import RouterBottom from './routerBottom'
import RouterBtn from './routerBtn'
import RouterRow from './routerRow'

const Routerr = () => {
  return (
    <>
      <div className={` ${styles.flexCenter} container-top containerr`} >
          <img src={routeimg} alt="route" className='relative z-[-1]' />
          <h1 className=' head absolute top-[27%] left-[10%] text-[65px] text-white '>Route</h1>
      </div>
      <div className='w-full flex justify-between items-start sm:py-10  py-5 text-top'>
        <div className='w-1/2 flex justify-between text-top-container'>
          <div className='w-1/2  text-top-img'>
            <img className='mt-14' src={brandingElement} alt="brandingElementImg" />
          </div>
          <div className='headingDiv w-full pl-5'>
            <p className='text-[1.2rem] tracking-wide font-medium' style={{ color: "#00CF00" }}>OVERVIEW</p>
            <h1 className='sm:mt-10 md:mt-10  text-[2rem] font-bold heading-tags-colors'>
              Quickly access <br />
              your favorite <br />
              destinations <br />
            </h1>
          </div>
        </div>
        <div className='w-3/4 pr-36 leading-7 tracking-wide text-bottom  text-black opacity-95 text-[1rem]'>
          <p className='sm:mt-14 textbottomp1  w-full'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean placerat metus at purus blandit tincidunt pharetra vel lorem. Maecenas massa ante, iaculis a ipsum at, ornare dictum sapien.
          </p>
          <p className='mt-6'>
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
        <RouterRow id="1"/>
        <RouterRow id="2"/>
        <RouterRow id="3"/>
      </div>
      <Footer/>

    </>

  )
}

export default Routerr