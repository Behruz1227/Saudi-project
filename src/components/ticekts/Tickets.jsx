import React from "react";

import Card from "./components/Card";
import AboutFirst from "./components/AboutFirst";
import Information from "./components/Information";
import Pur from "./components/Pur";
import MobileCard from "./components/MobileCard";
import Text from "./components/Text";
import Bus from "./components/Bus";

function Tickets() {
  return (
    <div className="w-full px-10">
      <div className="pt-10 ">
        <AboutFirst />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="mt-20">
          <Information />
        </div>
        <div className="mt-20 ">
          <Card />
        </div>
        <div className="mt-20">
          <Pur />
        </div>
        <div className="mt-12">
          <MobileCard />
        </div>
      </div>
        <div className="mt-12">
          <Text />
        </div>
        <div className="mt-20">
          <Bus />
        </div>
    </div>
  );
}
export default Tickets;
