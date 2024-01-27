const Statistics = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="w-1/3 text-center">
        <h1 className="text-[2.1rem] font-bold text-green-400 tracking-wider"><span>1900</span>+ km</h1>
        <p className="text-[.9rem] tracking-wide font-medium leading-4 opacity-90">of integrated bus network</p>
      </div>
      <div className="w-1/3 text-center">
        <h1 className="text-[2.1rem] font-bold text-green-400 tracking-wider">800+</h1>
        <p className="text-[.9rem] tracking-wide font-medium leading-4 opacity-90">Buses</p>
      </div>
      <div className="w-1/3 text-center">
        <h1 className="text-[2.1rem] font-bold text-green-400 tracking-wider">2,900+</h1>
        <p className="text-[.9rem] tracking-wide font-medium leading-4 opacity-90">Bus Stations</p>
      </div>
    </div>
  )
}

export default Statistics;