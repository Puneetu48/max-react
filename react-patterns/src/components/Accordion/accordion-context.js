import { createContext, useContext } from 'react';

export const AccordionContext = createContext();

export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      'The accordion related components must be wrapped by <Accordion>',
    );
  }
  return ctx;
};
