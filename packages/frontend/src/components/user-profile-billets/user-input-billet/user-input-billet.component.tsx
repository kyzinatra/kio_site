import { FC, useEffect, useState } from 'react';
import css from './user-input-billet.module.css';
import { IUserInputBillet } from './user-input-billet';
import { UserIninitalBillet } from '../user-initial-billet/user-initial-billet.component';
import { Input } from '@components/ui-kit/input/input.components';

export const UserInputBillet: FC<IUserInputBillet> = ({
  title,
  subtitle,
  footerText,
  btnText,
  value,
  validate,
  onSave
}) => {
  const [state, setState] = useState(value);
  const [isError, setIsError] = useState(false);

  const validationResult = validate?.(state);

  useEffect(() => {
    changeState(value);
  }, [value]);

  const changeState = (value: any) => {
    setState(value);

    validate && setIsError(validationResult !== true);
  };

  return (
    <UserIninitalBillet
      title={title}
      subtitle={subtitle}
      footerText={footerText}
      btnText={btnText}
      onSave={() => !isError && onSave.call(this, state)}
    >
      <div className={css['user-input-billet__main-info']}>
        <Input value={state} onChange={e => changeState(e.target.value)} isError={isError} />
        <div style={{ color: 'red' }}>
          {isError && typeof validationResult === 'string' && validationResult}
        </div>
      </div>
    </UserIninitalBillet>
  );
};
