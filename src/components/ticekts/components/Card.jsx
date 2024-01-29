import { frame } from "../../../assets"


function Card(){
    return(
        <div className="flex justify-center gap-4 md: w-full sm:w-full">
        <div className="flex  justify-center px-4 gap-20">
          <div class=" bg-white rounded-xl flex p-10">
            <div class="flex flex-col items-center">
                <img src={frame} alt="" srcset="" />
                <h1 className="text-green-600 text-xl font-bold mt-3 ">4 SAR</h1>
                <p class="mt-2 text-gray-500">2 Hours Pass</p>
            </div>
          </div>
          <div class="p-10 bg-white rounded-xl flex">
            <div class="flex flex-col items-center">
                <img src={frame} alt="" srcset="" />
                <h1 className="text-green-600 text-xl font-bold mt-3 ">20 SAR</h1>
                <p class="mt-2 text-gray-500">3-Day Pass</p>
            </div>
          </div>
          <div class="p-10 bg-white rounded-xl flex">
            <div class="flex flex-col items-center">
                <img src={frame} alt="" srcset="" />
                <h1 className="text-green-600 text-xl font-bold  mt-3">40 SAR</h1>
                <p class="mt-2 text-gray-500">7-Day Pass</p>
            </div>
          </div>
          <div class="p-10 bg-white rounded-xl flex">
            <div class="flex flex-col items-center">
                <img src={frame} alt="" srcset="" />
                <h1 className="text-green-600 text-xl font-bold mt-3">140 SAR</h1>
                <p class="mt-2 text-gray-500">30-Day Pass</p>
            </div>
          </div>
        </div>
        
      </div>
      
    )
}
export default Card