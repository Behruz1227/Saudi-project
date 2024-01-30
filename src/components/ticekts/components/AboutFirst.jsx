import { chipta } from "../../../assets"

function AboutFirst(){
    return(
    <div className={`flex justify-center items-center w-full  rounded-3xl`}>
    <div className='max-w-[1450px] h-[50vh] lg:h-[75vh] sm:h-[55vh] md:h-[60vh] aboutOnePage-main relative '>
      <img src={chipta} alt="img" className='about-one-page duration-200 w-full h-full rounded-3xl 
          object-cover object-right sm:object-right xl:object-cover shadow-xl' />   
    </div>
  </div>
    )
}
export default AboutFirst