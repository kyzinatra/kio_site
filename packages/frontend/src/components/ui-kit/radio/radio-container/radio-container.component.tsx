import React, { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react';
import { IRadioContainer } from './radio-container';

import css from './radio-container.module.css';

const RadioContainer: FC<IRadioContainer> = ({ children, name, onChange, value }) => {
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    if (selectedValue !== value) setSelectedValue(value || '');
  }, [value]);

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
    onChange?.(event.target.value);
  }

  return (
    <div className={css.radio__container}>
      {React.Children.map(children, (child: ReactElement) => {
        return React.cloneElement(child, {
          name,
          ...child.props,
          onChange: changeHandler,
          checked: selectedValue === child.props.value
        });
      })}
    </div>
  );
};

export default RadioContainer;
