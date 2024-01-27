import { card, card1, carta, group3, mobile, payment, round } from "../../../assets"

function MobileCard(){
    return(
        <div className="justify-center px-28">
             <div className="container w-full px-6 py-6 flex justify-around bg-green-950 rounded-3xl ">
                <div className="rounded">
                   <img src={round} alt="" />
                </div>
                <div className=" px-10 pt-16 pl-2 py-8 text-4xl text-green-500">
                    <h1>Buy monthly, weekly and <br/> daily passes on Riyadh<br/> Bus app</h1>
                    <div className="text-white tracking-wide">
                         <p className="text-xl mt-10 ">Buy your choice of pass and scan the<br/> 
                         digital QR code for your next ride.</p>
                    </div>
                   
                </div>
             
            <div className="">
            
           <img src={mobile} alt="" />

         </div>
        </div>
        <div className="container w-full mt-10 py-6 flex justify-center bg-lime-500 rounded-3xl  ">
                <div className="rounded">
                   <img src={card1} alt="" />
                </div>
                <div className=" px-10 pt-16 pl-2 py-8 text-4xl text-black font-bold ">
                    <h1>Purchase a Darb Card </h1>
                    <div className="text-black-100">
                         <p className="text-xl mt-10 tracking-wide font-light">
                            Use on premises Ticket Vending <br/>
                            Machines to purchase a preloaded Darb <br/>
                            card for any transactions.</p>
                    </div>
                   
                </div>
             
            <div className="">
            
           <img src={card} alt="" />

         </div>
        </div>
        <div className="container w-full mt-10 py-6 flex justify-center bg-white-500 rounded-3xl  ">
                <div className="rounded">
                   <img src={group3} alt="" />
                </div>
                <div className=" px-10 pt-16 pl-2 py-8 text-4xl text-black font-bold ">
                    <h1>Purchase a Darb Card </h1>
                    <div className="text-black-100">
                         <p className="text-xl mt-10 tracking-wide font-light">
                            Use on premises Ticket Vending <br/>
                            Machines to purchase a preloaded Darb <br/>
                            card for any transactions.</p>
                    </div>
                   
                </div>
             
            <div className="payment1">
            
        
           <div className="px-12 mt-40">
            <img src={payment} alt="" />
           </div>
           

         </div>
        </div>
        </div>
       
       
    )
}
export default MobileCard