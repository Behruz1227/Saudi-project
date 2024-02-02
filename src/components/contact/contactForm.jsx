import React from 'react'
import { answer, call, message } from '../../assets'

const ContactForm = () => {

  // add contact message
  const addContactMessage = () => {

  }
  return (
    <>
      <input
        type="radio"
        name='gander'
        id="contact_1"
        value='feedback'
        className='cursor-pointer inputform mr-2'
      />
      <span className="mr-8">Feedback</span>
      <input
        type="radio"
        name='gander'
        id="contact_2"
        value='inquiry'
        className='cursor-pointer mr-2'
      />
      <span className="mr-8">Inquiry</span>
      <input
        type="radio"
        name='gander'
        id="contact_3"
        value='lostFound'
        className='cursor-pointer mr-2'
      />
      <span className="mr-8">Last&Found</span>
      
      <div className='flex contaktform gap-7'>
        <div className='my-3 contactForm'>
          <div className='mb-3 contactForm1'>
            <input type="text" placeholder='Email*' required className='InputForm' />
          </div>
          <div className='contactForm2' >
            <textarea className='contactTextarea' placeholder='Type your message here' rows={14} cols={78} />
          </div>
          <button className='sendBtn bg-[#6FD44F] w-[15rem] py-5 rounded-[2rem] font-semibold mt-5'>
            Send message
          </button>
        </div>
        <div className='contactAfisha'>
          <div className='w-full flex bg-[#FFFFFF] rounded-[0.8rem] my-3'>
            <div className='p-8'>
              <img src={call} alt="call image" className='callImage' />
            </div>
            <div className='pt-9 items-center'>
              <p className='text-sm font-medium'>Call Us:</p>
              <p className='mt-2 font-semibold text-[#6FD44F] text-xs'>Customer Care 19933</p>
            </div>
          </div>
          <div className='w-full flex bg-[#FFFFFF] rounded-[0.8rem] my-4'>
            <div className='p-8'>
              <img src={message} alt="call image" className='callImage2' />
            </div>
            <div className='pt-9 items-center'>
              <p className='text-sm font-medium'>Email Us:</p>
              <p className='mt-2 font-semibold text-[#6FD44F] text-xs'>customercare@riyadhbus.sa</p>
            </div>
          </div>
          <div className='w-full flex bg-[#FFFFFF] rounded-[0.8rem] my-3'>
            <div className='p-8'>
              <img src={answer} alt="call image" className='callImage' />
            </div>
            <div className='pt-9 items-center'>
              <p className='text-sm font-medium'>FAQs:</p>
              <p className='mt-2 font-semibold text-[#6FD44F] text-xs'>Have a question?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactForm