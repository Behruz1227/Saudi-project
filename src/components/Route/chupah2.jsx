import { useState } from "react"

const Chupah2 = ({ fromTransBus }) => {
    const [active, Setactive] = useState(false)
    const activeToggle = () => Setactive(!active);

    const a = [
        {
            tittle: "Sardorbek"
        },
        {
            tittle: "Aktambek"
        },
        {
            tittle: "sdnaskd"
        },
        {
            tittle: "Sardadwekdhwwiuorbek"
        },
        {
            tittle: "Sarddasdadasorbek"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "adsd"
        },
        {
            tittle: "Sardoadaddarbek"
        }
    ]

    return (
        <div className="">
            <ul className="stop-list ">
                <li className="list-circle ">
                    Transportation Center
                </li>
                <li onClick={activeToggle} className={`${active ? "openClose" : ""} list-circles`}>
                    <span className="spanchart">show {a.length} Stop</span>
                    <ul className="close">
                        {a.map((item) =>
                            <li className="list-circlesW ">{item.tittle}</li>
                        )}
                    </ul>
                </li>
                <li className="list-circless mb-6 ">
                    Transportation Center
                </li>
            </ul >
        </div>

    )
}

export default Chupah2
