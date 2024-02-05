import { useEffect, useState } from "react";

const Statistics = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 15);

    setTimeout(() => { clearInterval(interval); }, 12000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="flex justify-between items-start max-w-[1100px] mx-auto about-statistics-main">
        <div className="w-1/3">
          <h1 className="text-[2.1rem] font-bold text-green-400 tracking-wider"><span>1900</span>+ km</h1>
          <p className="text-[.9rem] tracking-wide font-medium leading-4 opacity-90 ml-1">of integrated bus <br /> network</p>
        </div>
        <div className="w-1/3 text-center">
          <h1 className="text-[2.1rem] font-bold text-green-400 tracking-wider">{counter}+</h1>
          <p className="text-[.9rem] tracking-wide font-medium leading-4 opacity-90 mr-11">Buses</p>
        </div>
        <div className="w-1/3 text-left sm:text-end">
          <h1 className="text-[2.1rem] font-bold text-green-400 tracking-wider">2,900+</h1>
          <p className="text-[.9rem] tracking-wide font-medium leading-4 opacity-90 mr-9">Bus Stations</p>
        </div>
      </div>
    </>
  )
}

export default Statistics;