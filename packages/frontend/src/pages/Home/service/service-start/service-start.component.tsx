import React, { ForwardRefRenderFunction, forwardRef, useImperativeHandle } from 'react';
import { useRef } from 'react';

import css from './service-start.module.css';

import type { TServiceRefProps, IServiceStart } from './service-start';
import { Trace } from '../../../../components/ui-kit/trace/trace.component';

const ServiceStartComponent: ForwardRefRenderFunction<TServiceRefProps, IServiceStart> = (
  {},
  forwardedRef
) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(
    forwardedRef,
    () => ({
      scrollIntoView() {
        componentRef.current?.scrollIntoView({ behavior: 'smooth' });
      }
    }),
    []
  );

  return (
    <div ref={componentRef} className={css.start}>
      <Trace theme="red">Конструируй</Trace>
    </div>
  );
};

export const ServiceStart = forwardRef(ServiceStartComponent);
