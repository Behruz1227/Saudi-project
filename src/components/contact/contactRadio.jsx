const ContactRadio = () => {
  return (
    <>
      <div className='justify-between'>
        <label className='mr-5 labelForm'>
          <input type="radio" name='gander' id="" value='feedback' className='cursor-pointer inputform mr-2 ' />
          Feedback
          <pan></pan>s
        </label>
        <label className='mr-5'>
          <input type="radio" name='gander' id="" value='inquiry' className='cursor-pointer mr-2' />
          <span></span>
          Inquiry
        </label>
        <input type="radio" name='gander' id="" value='lostFound' className='cursor-pointer mr-2' />
        <label>
          <span></span>
          Last&Found
        </label>
      </div>

    </>
  )
}

export default ContactRadio