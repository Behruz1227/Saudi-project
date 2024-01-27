const Statistics = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center w-[1100px]">
        <div className="w-1/3">
          <h1 className="text-[2.1rem] font-bold text-green-400 tracking-wider"><span>1900</span>+ km</h1>
          <p className="text-[.9rem] tracking-wide font-medium leading-4 opacity-90 ml-1">of integrated bus <br /> network</p>
        </div>
        <div className="w-1/3 text-center">
          <h1 className="text-[2.1rem] font-bold text-green-400 tracking-wider">800+</h1>
          <p className="text-[.9rem] tracking-wide font-medium leading-4 opacity-90 mr-11">Buses</p>
        </div>
        <div className="w-1/3 text-end">
          <h1 className="text-[2.1rem] font-bold text-green-400 tracking-wider">2,900+</h1>
          <p className="text-[.9rem] tracking-wide font-medium leading-4 opacity-90 mr-9">Bus Stations</p>
        </div>
      </div>
    </div>
  )
}

export default Statistics;