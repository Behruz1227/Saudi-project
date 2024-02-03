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
    axios
      .get(`${url}ticket/list`)
      .then((res) => {
        setTickets(res.data.body); // `getTicket` dan `setTickets` ga o'zgartirildi, nomlanish standartlariga muvofiqroq
      })
      .catch(() => {
        console.error("Xato: Ma'lumot olishda muammo yuz berdi");
      });
  }

  return (
    <div className="flex md:justify-around justify-center w-full flex-wrap lg:px-56">
      {/* Tashqi divlarni takrorlash o'rniga, tickets map qilinishi va har bir ticket uchun alohida card yaratilishi mumkin */}
      {tickets.slice(0,4).map((ticket, index) => (
        <div key={index} className="flex justify-center  px-4 gap-5 cardTicket mt-5">
          <div className="bg-white rounded-xl flex w-[300px] p-10 flex-col items-center">
            <img src={frame} alt="Frame" />
            {/* Mavjud bo'lsa, ticket ma'lumotlarini ko'rsatish */}
            {ticket && (
              <>
                <h1 className="text-green-600 text-xl font-bold mt-3">{ticket.price} {ticket.currency}</h1>
                <p className="mt-2 text-gray-500">{ticket.pass}</p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
