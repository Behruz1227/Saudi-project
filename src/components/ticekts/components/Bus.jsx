import { bus, card, card1, mobile, round } from "../../../assets";
import './payment.css'

function Bus(){
    return(
        <div className="justify-center items-center px-28 flex">
        <div className="container w-full px-6 py-6 flex justify-around  rounded-3xl ">
           <div className="rounded mt-3">
              <img src={bus} alt="" />
           </div>
      </div>
      </div>
    );
} export default Bus