import { useState } from "react"

const Chupah = ({ toTransBus }) => {
    const [active, Setactive] = useState(false)
    const activeToggle = () => Setactive(!active);

    let toTransBusLast, newArr = [];
    for (let i = 0; i < toTransBus.length; i++) {
        if (toTransBus.length - 1 === i) toTransBusLast = toTransBus[i];
    }
    for (let i = 4; i < toTransBus.length - 1; i++) newArr.push(toTransBus[i]);
    // =-=====-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    const [color,setcolor]=useState([])

    return (
        <div className="">
            <ul className={`stop-list`} >
                <li className="list-circle ">
                    {toTransBus[3]}
                </li>
                <li onClick={activeToggle} className={`${active ? "openClose" : ""} list-circles`}>
                    <span className="spanchart">show {toTransBus.length-5} Stop</span>
                    <ul className="close">
                        {newArr && newArr.map((item, i) =>
                            <li className="list-circlesW" key={i}>{item}</li>
                        )}
                    </ul>
                </li>
                <li className="list-circless mb-6 ">
                    {toTransBusLast}
                </li>
            </ul >
        </div>

    )
}

export default Chupah
