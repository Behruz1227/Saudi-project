import { useState } from "react"

const Chupah2 = ({ fromTransBus }) => {
    const [active, Setactive] = useState(false)
    const activeToggle = () => Setactive(!active);

    let transAvto, FromtransArr = [];
    for (let i = 4; i < fromTransBus.length - 1; i++) FromtransArr.push(fromTransBus[i])
    for (let i = 0; i < fromTransBus.length; i++) {
        if (fromTransBus.length - 1 === i) transAvto = fromTransBus[i];
    }

    return (
        <div className="">
            <ul className="stop-list ">
                <li className="list-circle ">
                    {fromTransBus[3]}
                </li>
                <li onClick={activeToggle} className={`${active ? "openClose" : ""} list-circles`}>
                    <span className="spanchart">show {fromTransBus.length-5} Stop</span>
                    <ul className="close">
                        { FromtransArr.map((item) =>
                            <li className="list-circlesW ">{item}</li>
                        )}
                    </ul>
                </li>
                <li className="list-circless mb-6 ">
                    {transAvto}
                </li>
            </ul >
        </div>

    )
}

export default Chupah2
