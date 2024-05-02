import React, { useState, useEffect } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    const viewedVideoId = localStorage.getItem('videotime');

    if (viewedVideoId !== null) {
      setIsViewed(true);
    } else {
      setIsViewed(false);
    }
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="border-b">
          <div
            className="flex justify-between items-center cursor-pointer p-4 "
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="font-medium text-[14px]">{item.id}-mavzu: {item.title}</h2>
            <span className='text-[14px] text-[#77BF44]'>{activeIndex === index ? '▲' : '▼'}</span>
          </div>
          {activeIndex === index && (
            <div className="p-4 flex items-center gap-4">
                {isViewed ? (
                    <p role="img" aria-label="viewed" style={{ fontSize: '16px' }}><i className='bx bx-check bg-[#77BF44] p-1 rounded-full text-white'></i></p>
                ) : (
                    <p role="img" aria-label="not-viewed" style={{ fontSize: '16px' }}><i className='bx bx-play-circle bg-gray-200 p-1 rounded-full'></i></p>
                )}
              <span className='text-[14px]'>{item.content}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
