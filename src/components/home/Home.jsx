import React from 'react'
import "./style.css"
import TripplanFirs from './firstsection'
import MobilApp from './mobileApp'
import Tripplan from './tripplan'
import BusPlan from './busplan'
import MaterSafety from './safityMatter'
import Galery from './gallery'

function Home() {




  return (
    <>
      <div className='w-full px-20 py-10'>
        {/* <TripplanFirs/> */}
        {/* <MobilApp/> */}
        {/* <Tripplan/> */}
      </div>
      {/* <BusPlan/> */}

      <MaterSafety/>

      {/* <Galery/> */}

    </>

  )
}

export default Home