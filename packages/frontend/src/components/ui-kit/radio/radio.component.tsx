import React, { FC, PropsWithChildren, useState } from 'react';
import { IRadio } from './radio';

export const Radio: FC<PropsWithChildren<IRadio>> = ({ checked, children, title, onChange }) => {
  const [valueState, setValueState] = useState(checked);

  function changeHandler() {}

  return (
    <label>
      <div className="">
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <input type="radio" checked={valueState} />
    </label>
  );
};
