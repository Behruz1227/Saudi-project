import { useState } from 'react';
import { Link } from 'react-router-dom';

const DropDown = ({ openDropDown, isOpenDrop }) => {
    const [dropVal, setDropVal] = useState('');
    return (
        <>
            <button
                onClick={openDropDown}
                className="text-black font-bold rounded-lg text-[1.2rem] text-center inline-flex items-center 
                tracking-widest hover:opacity-70 duration-300">
                {dropVal ? dropVal : 'العربية'}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>
            <div
                className={`z-10 ${isOpenDrop ? 'inline-block' : 'hidden'} bg-white divide-y divide-gray-100 
                rounded-lg shadow-lg w-40 absolute top-[4.2rem] right-3`}>
                <ul className="py-2 text-sm text-gray-700">
                    <li>
                        <Link
                            onClick={() => {
                                openDropDown();
                                setDropVal('العربية');
                            }}
                            className="block px-4 py-2 hover:bg-gray-100">العربية</Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => {
                                openDropDown();
                                setDropVal('En');
                            }}
                            className="block px-4 py-2 hover:bg-gray-100">En</Link>
                    </li>
                   
                </ul>
            </div>
        </>
    )
}

export default DropDown