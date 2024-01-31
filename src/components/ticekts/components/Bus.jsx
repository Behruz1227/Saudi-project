import { bus} from "../../../assets";
import './payment.css'

function Bus(){
    return(
        <div className="justify-center items-center flex">
        <div className="container w-full px-6 py-6 flex">
           <div className=" mt-3">
              <img src={bus} alt="" />
           </div>
      </div>
      </div>
    );
} export default Bus