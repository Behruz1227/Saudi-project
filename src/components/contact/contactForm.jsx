import React from 'react'
import { answer, call, message } from '../../assets'

const ContactForm = () => {
  return (
    <div className='flex'>
      <div className='my-3 contactForm'>
        <div className='mb-3 contactForm1'>
          <input type="text" placeholder='Email*' required className='InputForm' />
        </div>
        <div className='contactForm2' >
          <textarea className='contactTextarea' placeholder='Type your message here' rows={14} cols={78} />
        </div>
      </div>
      <div className='contactAfisha'>
        <div className='w-full flex bg-[#FFFFFF] rounded-[0.8rem] ml-5 my-3'>
          <div className='p-8'>
            <img src={call} alt="call image"  />
          </div>
          <div className='pt-9 items-center'>
            <p className='text-sm font-medium'>Call Us:</p>
            <p className='mt-2 font-semibold text-[#6FD44F] text-xs'>Customer Care 19933</p>
          </div>
        </div>
        <div className='w-full flex bg-[#FFFFFF] rounded-[0.8rem] ml-5 my-4'>
          <div className='p-8'>
            <img src={message} alt="call image"  />
          </div>
          <div className='pt-9 items-center'>
            <p className='text-sm font-medium'>Email Us:</p>
            <p className='mt-2 font-semibold text-[#6FD44F] text-xs'>customercare@riyadhbus.sa</p>
          </div>
        </div>
        <div className='w-full flex bg-[#FFFFFF] rounded-[0.8rem] ml-5 my-3'>
          <div className='p-8'>
            <img src={answer} alt="call image"  />
          </div>
          <div className='pt-9 items-center'>
            <p className='text-sm font-medium'>FAQs:</p>
            <p className='mt-2 font-semibold text-[#6FD44F] text-xs'>Have a question?</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContactForm