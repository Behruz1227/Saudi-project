import { useState } from "react";
import LocationSidebar from "./components/LocationSidebar";
import YandexMaps from "./components/YandexMaps";
import "./location.css";

const Location = () => {
    const [fixedBar, getFixedbar] = useState(false)
    const classcha = "h-0"
    function setFixedBar() {
        getFixedbar(!fixedBar)
    }
    return (
        <div className="location-main w-full flex justify-between md:flex-row flex-col-reverse items-start">
            <div className={`md:w-1/4 md:block md:relative fixed md:top-0 bottom-0 z-20 anim ${fixedBar ? "" : classcha} `}>
                <LocationSidebar />
                <button onClick={setFixedBar} className={`absolute -top-10 md:hidden   btn-bg rounded-t-full p-2 w-20 h-10 flex justify-center items-center bg-slate-500 `}>{fixedBar ? <i class="fa-solid fa-arrow-down"></i> :  <i class="fa-solid fa-arrow-up"></i>}</button>
            </div>
            <div className="md:w-3/4 w-full">
                <YandexMaps />
            </div>
        </div>
    )
}

export default Location