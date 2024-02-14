import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../../api";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TripplanFirs() {
  const [trips, getTrip] = useState(null);
  const firstButtonClass =
    "font-bold py-2 px-10 focus:outline-none focus:shadow-outline rounded-3xl text-white mx-2";
  const secondButtonClass =
    "font-bold py-2 px-7 focus:outline-none focus:shadow-outline rounded-3xl text-white border  ";

  useEffect(() => {
    getTrips();
  }, []);
  function getTrips() {
    axios
      .get(`${url}route/list`)
      .then((res) => {
        getTrip(res.data.body);
        console.log(res.data + "slaom");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="md:p-0 p-2">
      <div className="home-header flex justify-between items-center md:flex-row flex-col 2xl:h-[850px] md:h-[650px] w-full rounded-3xl">
        <div className="w-50 lg:p-20 md:p-10 sm:p-5">
          <div className="md:w-[500px] sm:w-[300px] h-92 bg-white rounded-2xl p-10 ">
            <p className="text-4xl mb-5">
              Your next ride is just a finger tip away
            </p>
            <p className="mb-5">
              We're committed to create a safe environment for our users.
            </p>
            <Link to='/plan'>
              <button className="bg-lime-500 rounded-3xl md:py-3 py-2 md:px-10 px-5 mb-5">
                Plan your trip
              </button>
            </Link>
            <p className=" border-b w-max pb-1 hover:border-black transition-all">Learn more about Riyadh bus transportation </p>
          </div>
        </div>
        <div className="lg:w-50 lg:block hidden"></div>
      </div>
      <div className="mt-10 flex justify-start overflow-x-auto">
        {trips ?
          trips.map((item, index) => (
            <div key={index} className="flex justify-start items-center flex-shrink-0">
              <div className="">
                <button className={`${firstButtonClass} bg-blue-400 `}>
                  Bus {item.name}
                </button>
                <button className={`${secondButtonClass} mx-3`}>
                  <p className="text-gray-500">8:30 | {item.fromLocation}</p>
                </button>
              </div>

              {/* O'rtadagi nuqta */}
              <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" /></svg>
            </div>
          )) : ""}
      </div>
    </div>
  );
}

export default TripplanFirs;
