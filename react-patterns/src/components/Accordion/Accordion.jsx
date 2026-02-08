import { useState } from 'react';
import { AccordionContext } from './accordion-context';

function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();
  function openItem(id) {
    setOpenItemId(id);
  }
  function closeItem() {
    setOpenItemId(null);
  }

  const contextValue = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

export default Accordion;
