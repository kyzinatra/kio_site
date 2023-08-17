import { useEffect, useRef, useState } from 'react';

/**
 * @description Creates an html element in the body for the react portal. It is deleted automatically
 * @example
 * const elem = useElement("section");
 *
 * if (!elem) return null
 *
 * return createPortal(<></>, elem)
 */

export function useElement(type: string = 'div') {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.createElement(type);
    setElement(el);
    document.body.appendChild(el);
    return () => {
      el.remove();
      setElement(null);
    };
  }, []);

  return element;
}
