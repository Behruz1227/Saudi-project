import { byId } from "../api"

const ContactRadio = () => {
  const contactRadioInput = () => {
    let feedback = byId('contact_1').value
    let inquiry = byId('contact_2').value
    let lostFound = byId('contact_3').value
    if (feedback === 'feedback') console.log(feedback);
    if (inquiry === 'inquiry') console.log(inquiry);
    if (lostFound === 'lostFound') console.log(lostFound);
  }

  return (
    <>
      {/* <div className='justify-between'> */}
        <input
          onChange={contactRadioInput}
          type="radio"
          id="contact_1"
          value='feedback'
          className='cursor-pointer inputform mr-2'
        />
        <span className="mr-8">Feedback</span>
        <input
          onChange={contactRadioInput}
          type="radio"
          id="contact_2"
          value='inquiry'
          className='cursor-pointer mr-2'
        />
        <span className="mr-8">Inquiry</span>
        <input
          onChange={contactRadioInput}
          type="radio"
          id="contact_3"
          value='lostFound'
          className='cursor-pointer mr-2'
        />
        <span className="mr-8">Last&Found</span>
      {/* </div> */}

    </>
  )
}

export default ContactRadio