import { useState } from "react"

const Chupah2 = ({ stops }) => {
    const [active, Setactive] = useState(false)
    const activeToggle = () => Setactive(!active);

    let transAvto, FromtransArr = [];
    for (let i = 1; i < stops.length - 1; i++) FromtransArr.push(stops[i])
    for (let i = 0; i < stops.length; i++) {
        if (stops.length - 1 === i) transAvto = stops[i];
    }

    return (
        <div className="">
            <ul className="stop-list ">
                <li className="list-circle ">
                    {stops[0]}
                </li>
                <li onClick={activeToggle} className={`${active ? "openClose" : ""} list-circles`}>
                    <span className="spanchart">show {stops.length-2} Stop</span>
                    <ul className="close">
                        { FromtransArr.map((res) =>
                            <li className="list-circlesW ">{res}</li>
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
