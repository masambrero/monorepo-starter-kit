'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
  selector: string;
  container?: HTMLElement;
};

export const Portal = ({ children, selector, container }: PortalProps) => {
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    setPortalContainer(
      container || (document.querySelector(selector) as HTMLElement)
    );
  }, [container, selector]);

  return portalContainer ? createPortal(children, portalContainer) : null;
};
