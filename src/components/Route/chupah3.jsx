import { useState } from "react"

const Chupah3 = ({ landmarks }) => {
    console.log(landmarks);
    const [active, Setactive] = useState(false)
    const activeToggle = () => Setactive(!active);
    let landmarAvto,landmarkAvtoArr=[];
    for (let i = 3; i < landmarks.length - 1; i++) landmarkAvtoArr.push(landmarks[i])
    for (let i = 0; i < landmarks.length; i++) {
        if (landmarks.length - 1 === i) landmarAvto = landmarks[i];
    }

    return (
        <div className="">
            <ul  >
                <li className="text-xs">
                    {landmarks[2]}
                </li>
                {/* <li onClick={activeToggle} >
                    <ul className="close">
                        {landmarkAvtoArr.map((item) =>
                            <li className="list-circlesW ">{item}</li>
                        )}
                    </ul>
                </li> */}
                <li className=" mb-6 text-xs ">
                    {landmarAvto}
                </li>
            </ul >
        </div>

    )
}

export default Chupah3
