import React, { FC, Children, useMemo } from 'react';
import { ISwapper } from './swapper';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { BASE_ANIMATION_TIME } from '@constants/layout';

import './swapper.animation.css';
import css from './swapper.module.css';

/**
 * @description Swapper component for switching between components with animation
 * @example
 * <Swapper view={currentView}>
 *  <Component1 />
 *  <Component2 />
 * </Swapper>
 */

const Swapper: FC<ISwapper> = ({ children, view }) => {
  const refs = useMemo(() => {
    return Array.from({ length: children.length }).map(() => React.createRef<HTMLDivElement>());
  }, [children.length]);

  return (
    <SwitchTransition>
      <CSSTransition classNames="swapper" timeout={BASE_ANIMATION_TIME} key={view} nodeRef={refs[view]}>
        <div ref={refs[view]} className={css.swapper__container}>
          {children[view]}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Swapper;
