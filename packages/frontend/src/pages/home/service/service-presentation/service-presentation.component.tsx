import { ForwardRefRenderFunction, forwardRef, useImperativeHandle } from 'react';
import { useRef } from 'react';

import css from './service-presentation.module.css';

import type { TServiceRefProps, IServicePresentation } from './service-presentation';
import { Trace } from '@components/ui-kit/trace/trace.component';
import { PRESENTATION_CONTENT } from './constants';

const ServicePresentationComponent: ForwardRefRenderFunction<TServiceRefProps, IServicePresentation> = (
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
    <section ref={componentRef} className={css.presentation}>
      {PRESENTATION_CONTENT.map(({ title, description, subTitle }, i) => (
        <div className={css.presentation__item} key={i}>
          <Trace theme={`color-${i + 1}` as 'color-1'}>{title}</Trace>
          <h1 className={css['presentation__sub-title']}>{subTitle}</h1>
          <p className={css.presentation__description}>{description}</p>
        </div>
      ))}
    </section>
  );
};

export const ServicePresentation = forwardRef(ServicePresentationComponent);
