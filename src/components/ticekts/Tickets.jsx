import React from "react";


import Card from "./components/Card";
import AboutFirst from "./components/AboutFirst";
import Information from "./components/Information";

function Tickets() {
  return (
    <div className="about-main">
        <div className="pt-10 ">
            <AboutFirst/>
        </div>
     
        <div className="mt-20">
            <Information/>
        </div>
       <div className="mt-20 w-full">
        <Card/>
       </div>

    </div>

  );
}
export default Tickets;
