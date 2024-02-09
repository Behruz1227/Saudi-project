import { useState } from "react"

const Chupah = ({ rote }) => {
    const [active, Setactive] = useState(false)
    const activeToggle = () => Setactive(!active);
    // let arr = [], routerAvto;
    //     for (let i = 1; i < rote.stops.length - 1; i++) {
    //         arr.push(rote.stops[i])
    //     }
    //     // ---------------------
    //     for (let i = 0; i < rote.stops.length; i++) {
    //         if (rote.stops.length - 1 === i) {
    //             routerAvto = rote.stops[i]
    //         }
    //     }
    //   console.log(rote.stops[0]); 


    return (
        <div className="">
            <ul className={`stop-list`} >
                <li className="list-circle ">
                </li>
                <li onClick={activeToggle} className={`${active ? "openClose" : ""} list-circles`}>
                    <span className="spanchart">show  Stop</span>
                    <ul className="close">
                    <li className="list-circlesW" ></li>
                    </ul>
                </li>
                <li className="list-circless mb-6 ">
                </li>
            </ul >
        </div>

    )
}

export default Chupah
