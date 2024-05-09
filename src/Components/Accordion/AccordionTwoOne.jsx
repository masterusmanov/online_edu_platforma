// eslint-disable-next-line no-unused-vars
import React from 'react';
import AccordionTwo from './AccordionTwo';

const AccordionTwoOne = () => {
  const panels = [
    {
      title: 'Panel 1',
    }
  ]
  return (
    <div className="app">
      <h1>Accordion Example</h1>
      <AccordionTwo panels={panels} />
    </div>
  );
};

export default AccordionTwoOne;
