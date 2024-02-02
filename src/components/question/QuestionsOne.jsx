import { useState } from "react";
import { bus, kvadrat } from "../../assets";
import busVedio from "../../assets/vedio-bus.mp4";
import Accordion from "./accardion";
import axios from "axios";
import { url } from "../api";

function QuestionsOne() {
    const [faq, setFaq] = useState([]);

    const getFaq = () => {
        axios.get(`${url}`)
    }

    return (
        <>
            <div className="w-full flex justify-between items-start mt-20">
                <div className=" flex justify-between">
                    <div>
                        <img className="mt-14 w-48" src={kvadrat} alt="img" />
                    </div>
                    <div className="w-full pl-6 pr-[13.5rem]">
                        <p
                            className="text-[1.2rem] tracking-wide font-medium"
                            style={{ color: "#00CF00" }}>
                            FREQUENTLY ASK QUESTIONS
                        </p>
                        <h1 className="mt-5 text-[3rem] font-bold tracking-wide heading-tags-color w-full">
                            Have a question?
                        </h1>
                        <hr className="w-full h-[2px] text-gray-900 my-10" />

                        <div className="w-full">
                            <Accordion title="Accordion 1" content="Content for Accordion 1" />
                        </div>

                        <div className="w-full justify-center items-center mt-20 text-center">
                            <h3 className="text-3xl font-bold">We're here to show the <br />
                                <span style={{ color: "#00CF00" }}>way.</span>
                            </h3>
                        </div>
                        <div className="mt-20">
                            <video src={busVedio} loop autoPlay className="w-full"></video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default QuestionsOne;
