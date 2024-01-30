import { brandingElement } from '../about/components/imgs'
import './contactForm.css'
import ContactForm from './contactForm'
import ContactRadio from './contactRadio'

const Contactus = () => {
  return (
    <>
      <div className='flex  my-10 main-contact-form '>
        <div >
          <img src={brandingElement} alt="branding element" className=' contact-image mr-5 mt-[2.8rem] w-[12rem] ' />
        </div>
        <div className='w-[70vw] mx-auto  contactForm'>
          <p className='firstP uppercase mb-5 text-[#00CF00] text-[12px] font-normal'>stay in touch</p>
          <h1 className='firsth1 w-[35%] font-semibold tracking-tight font text-[1.8rem]'>Reach out to us for any feedback or suggestions.</h1>
          <div className='contactLine h-[0.5px]  w-full bg-slate-400 mt-20 '>
          </div>
          <p className='font-normal tracking-tight my-5'>How we can help you?</p>
          <ContactRadio/>
          <ContactForm/>
        </div>
      </div>

    </>

  )
}

export default Contactus