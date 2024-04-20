import React, { useState } from 'react';
import { AccordionWrapper, AccordionItem, AccordionHeader, AccordionContent } from './List.styled';

const List = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <AccordionWrapper>
      {data.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => handleAccordionClick(index)}>
            {item.title}
          </AccordionHeader>
          {activeIndex === index && (
            <AccordionContent>{item.content}</AccordionContent>
          )}
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
};

export default List;