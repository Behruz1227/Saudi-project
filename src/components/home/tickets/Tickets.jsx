import React from "react";
import { chipta, frame, group, kvadrat } from "../../../assets";

function Tickets (){
    return (
        <div className="w-full h-screen py-6">
          <div className="px-8 pb-6">
            <img src={chipta} alt="" />
          </div>
          <div className="flex">

           <div className=" py-24">
                    <img src={kvadrat} alt="" />
            </div> 
            <div className="w-full px-4 py-10 w-1/2 " style = {{color:"#00cf00"}}>
                <p>OVERVIEW</p>
                <h1 className="text-black text-5xl py-8 ">Different types <br></br> of tickets are <br></br> available</h1>
                
            </div>
            <div className="px-4 py-24">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
             Aenean placerat metus at purus blandit tincidunt pharetra<br/>   
              vel lorem. Maecenas massa ante, iaculis a ipsum at, ornare<br/> dictum sapien.</p>
            </div>    
          </div> 
    <div className="flex  justify-center px-4 gap-4">    
     <div class="w-1/5 h-1/4 bg-white rounded-xl flex">
       <div class="md:flex">
        <div class="justify-center">
           <img src={frame} alt="" srcset="" />
        </div>
        <div class="p-8 flex">
            
            <h1 className="text-green-600 text-xl ">4 SAR</h1>
            <p class="mt-2 text-gray-500">2 Hours Pass</p>
        </div>
     </div>

</div>
<div class="w-1/5 h-1/4 bg-white rounded-xl flex">
       <div class="md:flex">
        <div class="justify-center">
           <img src={frame} alt="" srcset="" />
        </div>
        <div class="p-8">
            
            <h1 className="text-green-600 text-xl ">4 SAR</h1>
            <p class="mt-2 text-gray-500">2 Hours Pass</p>
        </div>
     </div>

</div>
<div class="w-1/5 h-1/4 bg-white rounded-xl flex">
       <div class="md:flex">
        <div class="justify-center">
           <img src={frame} alt="" srcset="" />
        </div>
        <div class="p-8">
            
            <h1 className="text-green-600 text-xl ">4 SAR</h1>
            <p class="mt-2 text-gray-500">2 Hours Pass</p>
        </div>
     </div>

</div>
<div class="w-1/5 h-1/4 bg-white rounded-xl flex">
       <div class="md:flex">
        <div class="justify-center">
           <img src={frame} alt="" srcset="" />
        </div>
        <div class="p-8">
            
            <h1 className="text-green-600 text-xl ">4 SAR</h1>
            <p class="mt-2 text-gray-500">2 Hours Pass</p>
        </div>
     </div>
 </div>
</div> 
    <div className="flex container mx-auto py-4 px-20">
        <h1 className="text-black text-5xl py-8">Purchase your ticket through <br/> one of the following options</h1>
     </div> 

     <div className="flex justify-center ">
        <img src={group} alt="" srcset="" />
     </div>
  </div>
        
           
         
            
          
         
       
    )
}
export default Tickets