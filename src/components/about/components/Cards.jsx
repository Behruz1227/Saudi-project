import { busMove, icon1, icon2, icon3 } from "./imgs/index";

const Cards = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="w-[1100px] flex flex-col">
        <h1 className="text-[2rem] leading-9 tracking-wider font-bold" style={{ color: "#113108" }}>
          How are we improving <br />
          the transport landscape
        </h1>
        <div className="flex justify-between items-start mt-10">
          <div className="aboutCard1 rounded-2xl px-6 py-7 w-1/3 h-96 mx-4 relative ml-0">
            <img src={icon1} alt="icon1" className="w-10" />
            <p className="absolute bottom-10 font-bold text-[1.5rem] leading-7 tracking-wide">
              Environment <br /> friendly <br /> sustainable <br /> buses
            </p>
          </div>
          <div className="aboutCard2 rounded-2xl px-6 py-7 w-1/3 h-96 mx-2 relative">
            <img src={icon2} alt="icon2" className="w-10" />
            <p className="absolute bottom-10 font-bold text-[1.5rem] leading-7 tracking-wide">
              Multiple <br /> payment <br /> options for daily <br /> commuters
            </p>
          </div>
          <div className="aboutCard3 rounded-2xl px-6 py-7 w-1/3 h-96 mx-4 relative mr-0">
            <img src={icon3} alt="icon3" className="w-10" />
            <p className="absolute bottom-10 font-bold text-[1.5rem] leading-7 tracking-wide">
              Integrated bus <br /> network across <br /> Riyadh
            </p>
          </div>
        </div>
        <div className="mt-16">
          <img src={busMove} alt="busImg" className="w-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Cards