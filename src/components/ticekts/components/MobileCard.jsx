import {
  card,
  card1,
  group3,
  mobile,
  payment,
  round,
} from "../../../assets";

function MobileCard() {
  return (
    <div className="justify-center my-8 mobileCard">
      <div className="container w-full px-4 py-3 md:w-full flex flex-col lg:flex-row justify-around items-center bg-green-950 rounded-3xl mt-4 mobileCard">
        <div className="rounded ">
          <img src={round} alt="" className="" />
        </div>
        <div className=" px-10 pt-16 pl-2 py-8 text-4xl text-green-500">
          <h1 className="buyText">
            Buy monthly, weekly and <br /> daily passes on Riyadh
            <br /> Bus app
          </h1>
          <div className="text-white tracking-wide BytextDiv">
            <p className="text-xl mt-10 text-by ">
              Buy your choice of pass and scan the
              <br />
              digital QR code for your next ride.
            </p>
          </div>
        </div>

        <div className="mobile">
          <img src={mobile} alt="" />
        </div>
      </div>
      <div className="container w-full mt-10 py-6 flex flex-col lg:flex-row gap-8 px-5 items-center justify-center bg-lime-500 rounded-3xl pt-10 ">
        <div className="rounded">
          <img src={card1} alt="" />
        </div>
        <div className=" px-10 pt-16 pl-2 py-8 text-4xl text-black font-bold ">
          <h1>Purchase a Darb Card </h1>
          <div className="text-black-100">
            <p className="text-xl mt-10 tracking-wide font-light">
              Use on premises Ticket Vending <br />
              Machines to purchase a preloaded Darb <br />
              card for any transactions.
            </p>
          </div>
        </div>

        <div className="">
          <img src={card} alt="" />
        </div>
      </div>
      <div className="container w-full mt-20 py-6 flex flex-col lg:flex-row items-center gap-8 px-5 justify-center  bg-white-500 rounded-3xl  ">
        <div className="rounded  ">
          <img src={group3} alt="" />
        </div>
        <div className=" px-10 pt-16 pl-2 py-8 text-4xl text-black font-bold ">
          <h1>Purchase a Darb Card </h1>
          <div className="text-black-100">
            <p className="text-xl mt-10 tracking-wide font-light">
              Use on premises Ticket Vending <br />
              Machines to purchase a preloaded Darb <br />
              card for any transactions.
            </p>
          </div>
        </div>

        <div className="payment1">
          <div className="px-12 mt-40">
            <img src={payment} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MobileCard;
