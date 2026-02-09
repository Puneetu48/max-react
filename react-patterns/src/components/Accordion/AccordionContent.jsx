import { useAccordionContext } from './accordion-context';
import { useAccordionItemContext } from './accordion-item-context';

function AccordionContent({ className, children }) {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItemContext();

  const isOpen = openItemId === id;
  return (
    <div
      className={
        isOpen ? `${className ?? ''} open` : `${className ?? ''} close`
      }>
      {children}
    </div>
  );
}

export default AccordionContent;
