import { busMove } from "./imgs/index";

const Cards = () => {
  return (
    <div className="flex justify-center items-start">
      <div className="w-[1100px] flex flex-col">
        <h1>
          How are we improving <br />
          the transport landscape
        </h1>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div>
          <img src={busMove} alt="busImg" />
        </div>
      </div>
    </div>
  )
}

export default Cards