import gsap from "gsap";
import { useRef, useEffect } from "react";

const Statistics = () => {
  const numberRef = useRef(null);
  const numberRef2 = useRef(null);
  const numberRef3 = useRef(null);

  useEffect(() => {
    startAnimation();
    startAnimation2();
    startAnimation3();
  }, [])

  const startAnimation = () => {
    gsap.to(numberRef.current, {
      duration: 10,
      innerHTML: 1900,
      roundProps: 'innerHTML',
      ease: 'power1.out',
    });
  };
  const startAnimation2 = () => {
    gsap.to(numberRef2.current, {
      duration: 10,
      innerHTML: 800,
      roundProps: 'innerHTML',
      ease: 'power1.out',
    });
  };
  const startAnimation3 = () => {
    gsap.to(numberRef3.current, {
      duration: 10,
      innerHTML: 2900,
      roundProps: 'innerHTML',
      ease: 'power1.out',
    });
  };

  return (
    <>
      <div className="flex justify-between items-start max-w-[1100px] mx-auto about-statistics-main">
        <div className="w-1/3">
          <h1 className="text-[2.1rem] font-bold text-green-400 tracking-wider">
            <span ref={numberRef}>0</span>+ km</h1>
          <p className="text-[.9rem] tracking-wide font-medium leading-4 opacity-90 ml-1">of integrated bus <br /> network</p>
        </div>
        <div className="w-1/3 text-center">
          <h1 className="text-[2.1rem] font-bold text-green-400 tracking-wider">
            <span ref={numberRef2}>0</span>
            <span>+</span>
          </h1>
          <p className="text-[.9rem] tracking-wide font-medium leading-4 opacity-90 mr-11">Buses</p>
        </div>
        <div className="w-1/3 text-left sm:text-end">
          <h1 className="text-[2.1rem] font-bold text-green-400 tracking-wider">
            <span ref={numberRef3}>0</span>+
          </h1>
          <p className="text-[.9rem] tracking-wide font-medium leading-4 opacity-90 mr-6">Bus Stations</p>
        </div>
      </div>
    </>
  )
}

export default Statistics;