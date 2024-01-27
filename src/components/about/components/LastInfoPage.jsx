import { p, fBuss, next } from "./imgs/index";

const LastInfoPage = () => {
    return (
        <div className="w-[1100px] flex justify-between items-start">
            <div className="w-1/3 h-[290px] p-5 hover:shadow-lg duration-200 mr-4">
                <img className="w-12 hover:scale-110 duration-200 hover:cursor-pointer" src={fBuss} alt="fbuss" />
                <h3 className="mt-7 font-bold text-[1.2rem] tracking-wide leading-5">
                    State of the art <br /> buses
                </h3>
                <p className="mt-8 leading-7 text-[.95rem] tracking-wide text-black opacity-80">
                    Embark on a journey of excellence with our state-of-the-art buses, where cutting-edge
                    technology meets comfort.
                </p>
            </div>
            <div className="w-1/3 h-[290px] p-5 hover:shadow-lg duration-200 mx-2">
                <img className="w-12 hover:scale-110 duration-200 hover:cursor-pointer" src={p} alt="p" />
                <h3 className="mt-7 font-bold text-[1.2rem] tracking-wide leading-5">
                    World class safety <br /> standards
                </h3>
                <p className="mt-8 leading-7 text-[.95rem] tracking-wide text-black opacity-80">
                    At the heart of our service is a commitment to world-class safety standards.
                </p>
            </div>
            <div className="w-1/3 h-[290px] p-5 hover:shadow-lg duration-200 ml-4">
                <img className="w-12 hover:scale-110 duration-200 hover:cursor-pointer" src={next} alt="next" />
                <h3 className="mt-7 font-bold text-[1.2rem] tracking-wide leading-5">
                    Reducing traffic <br /> congestion
                </h3>
                <p className="mt-8 leading-7 text-[.95rem] tracking-wide text-black opacity-80">
                    Contributing to smoother urban flow, we are dedicated to reducing traffic congestion
                    through efficient and sustainable transportation solutions.
                </p>
            </div>
        </div>
    )
}

export default LastInfoPage