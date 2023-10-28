import { FC, useRef, useEffect } from 'react';
import { IOption } from './option';
import { Button } from '@components/ui-kit/button/button.component';

import css from './option.module.css';

export const Option: FC<IOption> = ({ children, title, _isNowSelected, _onSelect, name }) => {
  const optionRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    _isNowSelected && optionRef.current?.focus();
  }, [_isNowSelected, optionRef.current]);

  return (
    <Button
      stretch
      className={css.option}
      role="option"
      ref={optionRef}
      onClick={() => _onSelect?.(String(name))}
    >
      {children}
    </Button>
  );
};
