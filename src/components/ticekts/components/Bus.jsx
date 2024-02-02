import "./payment.css";
import video from "../../../assets/vedio-bus.mp4"

function Bus() {
  return (
    <div className="justify-center items-center flex">
      <div className="md:container w-full md:px-6 py-6 flex">
        <div className="mt-20">
          <video src={video} loop autoPlay className="w-full"></video>
        </div>
      </div>
    </div>
  );
}
export default Bus;
