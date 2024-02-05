import React, { useState } from 'react'
import { answer, call, message } from '../../assets'
import { byId, url } from '../api';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [inputValue, setinputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const inputHanler = (e) => setinputValue(e.target.value);

  // add contact message
  const addContactMessage = () => {
    setIsLoading(true);
    let data = {
      id: 0,
      email: byId('email').value,
      message: byId('message').value,
      status: inputValue
    }
    axios.post(`${url}contact/add`, data, '')
      .then(() => {
        toast.success('Successfully saved!')
        byId('email').value = ''
        byId('message').value = ''
        setinputValue('')
        setIsLoading(false);
      })
      .catch(() => {
        toast.error('Error saving contact');
        setIsLoading(false);
      })
  }

  let style = {
    checkbox: "flex items-center",
    cardsStyle: 'w-full flex bg-[#FFFFFF] shadow-lg rounded-[0.8rem] my-3'
  }

  return (
    <>
      <div className='flex justify-start items-start'>
        <div className={style.checkbox}>
          <input
            onChange={inputHanler}
            type="radio"
            name='gander'
            value='feedback'
            className='cursor-pointer w-5 h-5 inputform mr-2'
          />
          <span className="mr-8">Feedback</span>
        </div>
        <div className={style.checkbox}>
          <input
            onChange={inputHanler}
            type="radio"
            name='gander'
            value='inquiry'
            className='cursor-pointer w-5 h-5 mr-2'
          />
          <span className="mr-8">Inquiry</span>
        </div>
        <div className={style.checkbox}>
          <input
            onChange={inputHanler}
            type="radio"
            name='gander'
            value='lostFound'
            className='cursor-pointer w-5 h-5 mr-2'
          />
          <span className="mr-8">Last&Found</span>
        </div>
      </div>

      <div className='flex contaktform gap-7'>
        <div className='my-5 contactForm'>
          <div className='mb-3 contactForm1'>
            <input type="text" id='email' placeholder='Email*' required className='InputForm shadow-lg' />
          </div>
          <div className='contactForm2' >
            <textarea className='contactTextarea shadow-lg' id='message' placeholder='Type your message here' rows={13} cols={78} />
          </div>
          <button
            onClick={addContactMessage}
            className={`sendBtn ${isLoading ? 'cursor-not-allowed opacity-70' : ''} hover:bg-[#76e853]
            bg-[#6FD44F] py-4 px-10 rounded-[2rem] font-semibold mt-5 shadow-xl active:scale-95 duration-200`}
            disabled={isLoading}>
            {isLoading ?
              <>
                <svg aria-hidden="true" role="status" class="inline w-5 h-5 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2" />
                </svg>
                Loading...
              </>
              : "Send message"
            }
          </button>
        </div>
        <div className='contactAfisha'>
          <div className={style.cardsStyle}>
            <div className='p-8'>
              <img src={call} alt="call image" className='callImage' />
            </div>
            <div className='pt-9 items-center'>
              <p className='text-sm font-medium'>Call Us:</p>
              <p className='mt-2 font-semibold text-[#6FD44F] text-xs'>Customer Care 19933</p>
            </div>
          </div>
          <div className={style.cardsStyle}>
            <div className='p-8'>
              <img src={message} alt="call image" className='callImage2' />
            </div>
            <div className='pt-9 items-center'>
              <p className='text-sm font-medium'>Email Us:</p>
              <p className='mt-2 font-semibold text-[#6FD44F] text-xs'>customercare@riyadhbus.sa</p>
            </div>
          </div>
          <div className={style.cardsStyle}>
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