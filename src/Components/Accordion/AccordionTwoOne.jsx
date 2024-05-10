// eslint-disable-next-line no-unused-vars
import React from 'react';
import AccordionTwo from './AccordionTwo';

const AccordionTwoOne = () => {
    const lesson = localStorage.getItem("lesson")
  const panels = [
    {
        id: 1,
        title: 'Kompyuter savodxonligi darslari',
        lesson: lesson
    }
  ]
  return (
    <div className="app">
      
      <AccordionTwo panels={panels} />
    </div>
  );
};

export default AccordionTwoOne;
