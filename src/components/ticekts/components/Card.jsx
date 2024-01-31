import { frame } from "../../../assets"


function Card(){
    return(
        <div className=" flex justify-center w-full">
        <div className="flex justify-center px-4 gap-5 cradTicekt">
          <div className="flex justify-center gap-4 w-full flex-col xl:flex-row">

          <div class=" bg-white rounded-xl flex w-[300px] p-10">
            <div class="flex flex-col items-center w-full">
                <img src={frame} alt="" srcset="" />
                <h1 className="text-green-600 text-xl font-bold mt-3 ">4 SAR</h1>
                <p class="mt-2 text-gray-500">2 Hours Pass</p>
            </div>
          </div>
          <div class="p-10 bg-white rounded-xl w-[300px] flex">
            <div class="flex flex-col items-center w-full">
                <img src={frame} alt="" srcset="" />
                <h1 className="text-green-600 text-xl font-bold mt-3 ">20 SAR</h1>
                <p class="mt-2 text-gray-500">3-Day Pass</p>
            </div>
          </div>
          </div>
          <div className="flex justify-center gap-4 w-full flex-col xl:flex-row">
          <div class="p-10 bg-white rounded-xl w-[300px] flex">
            <div class="flex flex-col items-center w-full">
                <img src={frame} alt="" srcset="" />
                <h1 className="text-green-600 text-xl font-bold  mt-3">40 SAR</h1>
                <p class="mt-2 text-gray-500">7-Day Pass</p>
            </div>
          </div>
          <div class="p-10 bg-white rounded-xl w-[300px] flex">
            <div class="flex flex-col items-center w-full">
                <img src={frame} alt="" srcset="" />
                <h1 className="text-green-600 text-xl font-bold mt-3">140 SAR</h1>
                <p class="mt-2 text-gray-500">30-Day Pass</p>
            </div>
          </div>
          </div>
        </div>
        
      </div>
      
    )
}
export default Card