import LocationSidebar from "./components/LocationSidebar";
import YandexMaps from "./components/YandexMaps";
import "./location.css";

const Location = () => {
    return (
        <div className="location-main w-full flex justify-between items-start">
            <div className="w-1/4">
                <LocationSidebar />
            </div>
            <div className="w-3/4">
                <YandexMaps />
            </div>
        </div>
    )
}

export default Location