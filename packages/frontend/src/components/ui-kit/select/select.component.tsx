import React, { FC, PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';
import { Popup } from '../popup/popup.component';
import { ISelect } from './select';
import { Badge } from '../badge/badge.component';
import { PopupActions } from 'reactjs-popup/dist/types';

export const Select: FC<ISelect> = ({ children, isInPopup, onChange, value }) => {
  const [selected, setSelected] = useState<string>(value);
  const popupRef = useRef<PopupActions>(null);

  useEffect(() => {
    if (selected !== value) setSelected(value);
  }, [value]);

  function onSelect(name: string) {
    setSelected(name);
    onChange?.(name);
    popupRef.current?.close();
  }

  const selectedTitle = useMemo(() => {
    let result = '';
    React.Children.forEach(children, child => {
      if (child.props.name === selected) result = String(child.props.title || child.props.children);
    });
    return result;
  }, [selected]);

  return (
    <Popup
      ref={popupRef}
      trigger={<Badge src={'./select-icon.svg'}>{selectedTitle}</Badge>}
      nested={isInPopup}
      arrow={false}
    >
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          ...child.props,
          _onSelect: onSelect,
          _isNowSelected: selected === child.props.name
        });
      })}
    </Popup>
  );
};
