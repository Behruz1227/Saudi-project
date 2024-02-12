const Chupah3 = ({ landmarks }) => {
    let landmarAvto, landmarkAvtoArr = [];
    for (let i = 3; i < landmarks.length - 1; i++) landmarkAvtoArr.push(landmarks[i])
    for (let i = 0; i < landmarks.length; i++) {
        if (landmarks.length - 1 === i) landmarAvto = landmarks[i];
    }
    return (
        <div className="">
            <ul  >
                {landmarks.map((res) =>
                    <li className="text-xs">
                        {res}
                    </li>
                )}
            </ul >
        </div>
    )
}

export default Chupah3
