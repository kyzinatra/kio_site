import React, { FC, PropsWithChildren, useState } from 'react';
import { IRadio } from './radio';

export const Radio: FC<PropsWithChildren<IRadio>> = ({ value, children, title }) => {
  const [valueState, setValueState] = useState(value);

  return (
    <div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};
