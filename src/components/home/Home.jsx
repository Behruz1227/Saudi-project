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
      <div className='w-full md:px-20 sm:px-5 px-3 lg:py-10 py-5'>
        {/* <TripplanFirs/> */}
        {/* <MobilApp/> */}
        <Tripplan/>
      </div>
      <BusPlan/>
      <MaterSafety />
      <Galery />
    </>

  )
}

export default Home