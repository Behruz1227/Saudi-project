import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './style.css';

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const { height, opacity } = useSpring({
        from: { height: 0, opacity: 0 },
        to: {
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
        },
    });

    return (
        <div className="accordion rounded-[2rem] w-full overflow-hidden">
            <div className="accordion-header py-4 px-10" onClick={() => setIsOpen(!isOpen)}>
                <h2 className="text-lg font-semibold">{title}</h2>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {content.map((item) => (
                <animated.div style={{ height, opacity }} className={`accordion-content ${isOpen ? 'px-10 py-3' : 'p-0'}`}>
                    {item}
                </animated.div>
            ))}
        </div>
    );
};

export default Accordion;
