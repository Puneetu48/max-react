import { createContext, useContext } from 'react';

export const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);
  if (!ctx) {
    throw new Error(
      'The AccordionItem related components must be wrapped by <Accordion.item>',
    );
  }
  return ctx;
}
