import AboutOnePage from "./components/AboutOnePage";
import "./about.css";
import Information from "./components/Information";

const About = () => {
    return (
        <div className="about-main">
            {/*one page*/}
            <div className="mt-5">
                <AboutOnePage />
            </div>
            <div className="mt-20">
                <Information />
            </div>
        </div>
    )
}

export default About