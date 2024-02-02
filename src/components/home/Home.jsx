import React from 'react'
import "./style.css"
import TripplanFirs from './firstsection'
import MobilApp from './mobileApp'
import Tripplan from './tripplan'
import BusPlan from './busplan'
import MaterSafety from './safityMatter'
import Galery from './gallery'
import Footer from '../footer/Footer'

function Home() {




  return (
    <>
      <div className='w-full md:px-20 sm:px-5 px-0 lg:py-10 py-5'>
        <TripplanFirs />
      </div>
      <MobilApp />
      <div className='w-full md:px-20 sm:px-5 px-0 lg:py-10 py-5'>
        <Tripplan />
      </div>
      <BusPlan />
      <MaterSafety />
      <Galery />
      <div className='mt-20'>
        <Footer />
      </div>
    </>
  )
}

export default Home