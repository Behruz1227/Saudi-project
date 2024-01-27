import { frame } from "../../../assets"


function Card(){
    return(
        <div className="flex justify-center gap-4">
        <div className="flex  justify-center px-4 gap-20">
          <div class=" bg-white rounded-xl flex p-10">
            <div class="flex flex-col items-center">
                <img src={frame} alt="" srcset="" />
                <h1 className="text-green-600 text-xl ">4 SAR</h1>
                <p class="mt-2 text-gray-500">2 Hours Pass</p>
            </div>
          </div>
          <div class="p-10 bg-white rounded-xl flex">
            <div class="flex flex-col items-center">
                <img src={frame} alt="" srcset="" />
                <h1 className="text-green-600 text-xl ">4 SAR</h1>
                <p class="mt-2 text-gray-500">2 Hours Pass</p>
            </div>
          </div>
          <div class="p-10 bg-white rounded-xl flex">
            <div class="flex flex-col items-center">
                <img src={frame} alt="" srcset="" />
                <h1 className="text-green-600 text-xl ">4 SAR</h1>
                <p class="mt-2 text-gray-500">2 Hours Pass</p>
            </div>
          </div>
          <div class="p-10 bg-white rounded-xl flex">
            <div class="flex flex-col items-center">
                <img src={frame} alt="" srcset="" />
                <h1 className="text-green-600 text-xl ">4 SAR</h1>
                <p class="mt-2 text-gray-500">2 Hours Pass</p>
            </div>
          </div>
        </div>
        
      </div>
      
    )
}
export default Card