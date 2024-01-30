import { kvadrat } from "../../assets";
import bus from './img/bus road move 1.png'

function QuestionsOne() {
  return (
    <>
      <div className="w-full flex justify-between items-start mt-20">
        <div className=" flex justify-between">
          <div className="">
            <img className="mt-14" src={kvadrat} alt="" />
          </div>
          <div className="w-full pl-5">
            <p
              className="text-[1.2rem] tracking-wide font-medium"
              style={{ color: "#00CF00" }}
            >
              FREQUENTLY ASK QUESTIONS
            </p>
            <h1 className="mt-5 text-[3rem] font-bold tracking-wide heading-tags-color w-full">
              Have a question?
            </h1>
            <div className="  mt-20 h-4">
              <hr className=" flex w-600 h-0.5 bg-black" />
            </div>
            <div className="wrapper grid place-items-center h-[20vh] w-5/6">
                <div className="tab bg-white px-5 py-3 shadow-lg rounded-md relative"
                    style={{borderRadius:'20px'}}
                    >
                    <input type="radio" name="faq" id="faq1" className="apperance-none peer" />
                    <label for="faq1" className="flex items-center text-lg font-semibold
                    after:absolute after:content-['+'] after:right-5 after:text-2xl
                    after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45">
                        <h2 className="mr-2">1</h2>
                    <h3>Where can I get more information?</h3>
                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum id corporis sit blanditiis ducimus dolor quae, alias, aliquam atque modi, eius voluptate dignissimos similique! Error veniam at cupiditate deserunt?</p>
                    </div>
                    
                </div>
                <div className="tab bg-white px-5 py-3 shadow-lg rounded-md relative mt-3" style={{borderRadius:'20px'}}    >
                    <input type="radio" name="faq" id="faq2" className="apperance-none peer" />
                    <label for="faq2" className="flex items-center text-lg font-semibold
                    after:absolute after:content-['+'] after:right-5 after:text-2xl
                    after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45">
                        <h2 className="mr-2">1</h2>
                    <h3>How do I pay for the bus fare?</h3>
                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum id corporis sit blanditiis ducimus dolor quae, alias, aliquam atque modi, eius voluptate dignissimos similique! Error veniam at cupiditate deserunt?</p>
                    </div>
                    
                </div>
                <div className="tab bg-white px-5 py-3 shadow-lg rounded-md relative mt-3" style={{borderRadius:'20px'}}>
                    <input type="radio" name="faq" id="faq3" className="apperance-none peer" />
                    <label for="faq3" className="flex items-center text-lg font-semibold
                    after:absolute after:content-['+'] after:right-5 after:text-2xl
                    after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45">
                        <h2 className="mr-2">1</h2>
                    <h3>What is the ticket price?</h3>
                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum id corporis sit blanditiis ducimus dolor quae, alias, aliquam atque modi, eius voluptate dignissimos similique! Error veniam at cupiditate deserunt?</p>
                    </div>
                    
                </div>
                <div className="tab bg-white px-5 py-3 shadow-lg rounded-md relative mt-3" style={{borderRadius:'20px'}}>
                    <input type="radio" name="faq" id="faq4" className="apperance-none peer" />
                    <label for="faq4" className="flex items-center text-lg font-semibold
                    after:absolute after:content-['+'] after:right-5 after:text-2xl
                    after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45">
                        <h2 className="mr-2">1</h2>
                    <h3>How can I find a bus route to my destination?</h3>
                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum id corporis sit blanditiis ducimus dolor quae, alias, aliquam atque modi, eius voluptate dignissimos similique! Error veniam at cupiditate deserunt?</p>
                    </div>
                    
                </div>
                <div className="tab bg-white px-5 py-3 shadow-lg rounded-md relative mt-3" style={{borderRadius:'20px'}}>
                    <input type="radio" name="faq" id="faq5" className="apperance-none peer" />
                    <label for="faq5" className="flex items-center text-lg font-semibold
                    after:absolute after:content-['+'] after:right-5 after:text-2xl
                    after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45">
                        <h2 className="mr-2">1</h2>
                    <h3>Where can I find information about the bus routes?</h3>
                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum id corporis sit blanditiis ducimus dolor quae, alias, aliquam atque modi, eius voluptate dignissimos similique! Error veniam at cupiditate deserunt?</p>
                    </div>
                    
                </div>
                <div className="tab bg-white px-5 py-3 shadow-lg rounded-md relative mt-3" style={{borderRadius:'20px'}}>
                    <input type="radio" name="faq" id="faq6" className="apperance-none peer" />
                    <label for="faq6" className="flex items-center text-lg font-semibold
                    after:absolute after:content-['+'] after:right-5 after:text-2xl
                    after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45">
                        <h2 className="mr-2">1</h2>
                    <h3>How can I track the bus arrival time?</h3>
                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum id corporis sit blanditiis ducimus dolor quae, alias, aliquam atque modi, eius voluptate dignissimos similique! Error veniam at cupiditate deserunt?</p>
                    </div>
                    
                </div>
                <div className="tab bg-white px-5 py-3 shadow-lg rounded-md relative mt-3" style={{borderRadius:'20px'}}>
                    <input type="radio" name="faq" id="faq7" className="apperance-none peer" />
                    <label for="faq7" className="flex items-center text-lg font-semibold
                    after:absolute after:content-['+'] after:right-5 after:text-2xl
                    after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45">
                        <h2 className="mr-2">1</h2>
                    <h3>Can I eat or drink on the bus?</h3>
                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum id corporis sit blanditiis ducimus dolor quae, alias, aliquam atque modi, eius voluptate dignissimos similique! Error veniam at cupiditate deserunt?</p>
                    </div>
                    
                </div>
                <div className="tab bg-white px-5 py-3 shadow-lg rounded-md relative mt-3" style={{borderRadius:'20px'}}>
                    <input type="radio" name="faq" id="faq8" className="apperance-none peer" />
                    <label for="faq8" className="flex items-center text-lg font-semibold
                    after:absolute after:content-['+'] after:right-5 after:text-2xl
                    after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45">
                        <h2 className="mr-2">1</h2>
                    <h3>How do I pay for the bus fare?</h3>
                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum id corporis sit blanditiis ducimus dolor quae, alias, aliquam atque modi, eius voluptate dignissimos similique! Error veniam at cupiditate deserunt?</p>
                    </div>
                    
                </div>
                <div className="tab bg-white px-5 py-3 shadow-lg rounded-md relative mt-3" style={{borderRadius:'20px'}}>
                    <input type="radio" name="faq" id="faq9" className="apperance-none peer" />
                    <label for="faq9" className="flex items-center text-lg font-semibold
                    after:absolute after:content-['+'] after:right-5 after:text-2xl
                    after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45">
                        <h2 className="mr-2">1</h2>
                    <h3>How do I pay for the bus fare?</h3>
                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum id corporis sit blanditiis ducimus dolor quae, alias, aliquam atque modi, eius voluptate dignissimos similique! Error veniam at cupiditate deserunt?</p>
                    </div>
                    
                </div>
                <div className="tab bg-white px-5 py-3 shadow-lg rounded-md relative mt-3"style={{borderRadius:'20px'}}>
                    <input type="radio" name="faq" id="faq10" className="apperance-none peer" />
                    <label for="faq10" className="flex items-center text-lg font-semibold
                    after:absolute after:content-['+'] after:right-5 after:text-2xl
                    after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45">
                        <h2 className="mr-2">1</h2>
                    <h3>How do I pay for the bus fare?</h3>
                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum id corporis sit blanditiis ducimus dolor quae, alias, aliquam atque modi, eius voluptate dignissimos similique! Error veniam at cupiditate deserunt?</p>
                    </div>
                    
                </div>
                <div className="tab bg-white px-5 py-3 shadow-lg rounded-md relative mt-3" style={{borderRadius:'20px'}}>
                    <input type="radio" name="faq" id="faq11" className="apperance-none peer" />
                    <label for="faq11" className="flex items-center text-lg font-semibold
                    after:absolute after:content-['+'] after:right-5 after:text-2xl
                    after:text-gray-400 hover:after:text-gray-900 peer-checked:after:transform peer-checked:after:rotate-45">
                        <h2 className="mr-2">1</h2>
                    <h3>How do I pay for the bus fare?</h3>
                    </label>
                    <div className="answer mt-5 h-0 overflow-hidden transition ease-in-out duration-500 peer-checked:h-full">
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum id corporis sit blanditiis ducimus dolor quae, alias, aliquam atque modi, eius voluptate dignissimos similique! Error veniam at cupiditate deserunt?</p>
                    </div>
                   
                </div>
                 <div className="w-full justify-center items-center mt-20">
                        <h3 className="justify-center align-items-center text-3xl ml-48 ">We're here to show the <br/>
                        <span className="justify-center ml-28"
                         style={{ color: "#00CF00" }}
                          >way.</span> </h3>
                    </div>
                <div className="justify-center">
                    <img src= {{bus}} alt="Rasm yuq" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default QuestionsOne;
