// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Accordion from './Accordion';

const items = [
    {
        id: 1, 
        title: 'Kirish',
        videos: [
            {
                id: 1,
                contentone: "Kirish",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 2,
                contentone: "Yuzaga kelishi mumkin bo'lgan muammolar",
                videotime: localStorage.getItem("videotime")
            }
        ]
    },
    {
        id: 2, 
        title: 'Kompyuter',
        videos: [
            {
                id: 1,
                contentone: "Kompyuter nimalardan iborat",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 2,
                contentone: "Vazifalar paneli",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 3,
                contentone: "Ish stoli",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 4,
                contentone: '"Mening kompyuterim" bo`limi',
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 5,
                contentone: "Ilovalar",
                videotime: localStorage.getItem("videotime")
            }
        ]
    },
    {
        id: 3, 
        title: 'Brouzerdan samarali foydalanish',
        videos: [
            {
                id: 1,
                contentone: "Chrome brauzeri | Disk",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 2,
                contentone: "Brauzer qo'shimchalari",
                videotime: localStorage.getItem("videotime")
            },
        ]
    },
    {
        id: 4, 
        title: 'Ofice ilovalaridan foydalanish',
        videos: [
            {
                id: 1,
                contentone: "Google docs | matn tahrirchisi",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 2,
                contentone: "Jadavallar bilan ishlash: Google sheets [1-qism]",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 3,
                contentone: "Jadavallar bilan ishlash: Google sheets [2-qism]",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 4,
                contentone: "Jadavallar bilan ishlash: Google sheets [4-qism]",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 5,
                contentone: "Jadavallar bilan ishlash: Google sheets [5-qism]",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 6,
                contentone: "Google forms [1-qism]",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 7,
                contentone: "Google forms [2-qism]",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 8,
                contentone: "Google slides",
                videotime: localStorage.getItem("videotime")
            }
        ]
    },
    {
        id: 5, 
        title: 'Telegramdan samarali foydalanish',
        videos: [
            {
                id: 1,
                contentone: "Asosiy sozlamalar [1-qism]",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 2,
                contentone: "Asosiy sozlamalar [2-qism]",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 3,
                contentone: "Guruh bilan ishlash",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 4,
                contentone: "Muhim qoidalar",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 5,
                contentone: "Kanal bilan ishlash",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 6,
                contentone: "Layfhaklar",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 7,
                contentone: "Botlar bilan ishlash [1-qism]",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 8,
                contentone: "Botlar bilan ishlash [2-qism]",
                videotime: localStorage.getItem("videotime")
            }
        ]
    },
    {
        id: 6, 
        title: 'Foydali saytlar bilan ishlash',
        videos: [
            {
                id: 1,
                contentone: "Telegra.ph sayti bilan ishlash",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 2,
                contentone: "Canva.com sayti bilan ishlash",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 3,
                contentone: "Matnlar; tez yozish",
                videotime: localStorage.getItem("videotime")
            },
            {
                id: 4,
                contentone: "Rasmlar bilan ishlash",
                videotime: localStorage.getItem("videotime")
            }
        ]
    },
    {
        id: 7, 
        title: 'Tez kunda',
        videos: [
            {
                id: 1,
                contentone: "Darslar soni 0ta Mavzu vaqti",
                videotime: localStorage.getItem("videotime")
            }
        ]
    },
  ];


const AccordionTwo = ({ panels }) => {
    
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {panels.map((panel, index) => (
        <div key={index} className="accordion-item">
          <div
            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
            onClick={() => togglePanel(index)}
          >
            {panel.title}
          </div>
          {activeIndex === index && (
            <div className="accordion-content">
                <Accordion items={items} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionTwo;
