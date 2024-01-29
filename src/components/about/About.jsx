import "./about.css";
import AboutOnePage from "./components/AboutOnePage";
import Information from "./components/Information";
import Statistics from "./components/Statistics";
import Cards from "./components/Cards";
import Services from "./components/Services";
import LastInfoPage from "./components/LastInfoPage";
import Footer from "../footer/Footer";

const About = () => {
    return (
        <div className="about-main">
            {/*one page*/}
            <div className="pt-10">
                <AboutOnePage />
            </div>
            <div className="mt-20">
                <Information />
            </div>
            <div className="flex flex-col">
                <div className="mt-24">
                    <Statistics />
                </div>
                <div className="mt-20">
                    <Cards />
                </div>
                <div className="mt-20">
                    <Services />
                </div>
                <div className="mt-20">
                    <LastInfoPage />
                </div>
            </div>
            <div className="mt-40">
                <Footer />
            </div>
        </div>
    )
}

export default About