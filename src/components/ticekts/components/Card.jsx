import { useEffect, useState } from "react";
import { frame } from "../../../assets";
import axios from "axios";
import { url } from "../../api";

function Card() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets();
  }, []);

  function getTickets() {
    axios.get(`${url}ticket/list`)
      .then((res) => setTickets(res.data.body))
      .catch(() => console.error("Xato: Ma'lumot olishda muammo yuz berdi"));
  }

  return (
    <div className={`max-w-[1230px] flex justify-evenly flex-wrap`}>
      {tickets && tickets.map((item) => (
      <div className={`w-full sm:w-[320px] md:w-[256px] lg:w-[256px] xl:w-[307.5px] px-3 py-4`} key={item.id}>
        <div className={`bg-slate-50 px-8 py-10 shadow-md rounded-3xl hover:shadow-lg text-green-700 hover:text-white hover:bg-[#76e853] border border-slate-300 duration-300`}>
          <img src={frame} alt="Frame" className="hover:scale-110 duration-200" />
          <h1 className={`text-[1.5rem] mt-2.5 font-bold tracking-wide uppercase`}>{item.price} {item.currency}</h1>
          <p className={`text-[.9rem] mt-2 font-sans font-medium text-slate-900 tracking-wider ms-.5`}>{item.pass}</p>
        </div>
      </div>
      ))}
    </div>
  );
}

export default Card;
