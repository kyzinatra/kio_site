import { ChangeEvent, useMemo, useState } from 'react';

type TForm = { [key: string]: string | boolean | number };

type IResult<T extends TForm> = {
  [key in keyof T]?: {
    value: string;
    onChange: (e: ChangeEvent | boolean | string | number) => void;
  };
};

export function useForm<T extends TForm>(defaultValue: T) {
  const [valuesState, setValuesState] = useState(defaultValue);

  return useMemo(() => {
    const result: IResult<T> = {};

    for (let key in valuesState) {
      result[key] = {
        value: String(valuesState[key]),

        onChange(e: ChangeEvent | boolean | string | number) {
          if (typeof e !== 'object') {
            setValuesState(lastState => ({ ...lastState, [key]: e }));
            this.value = String(e);
            return;
          }
          const el = e.target;
          if (el instanceof HTMLInputElement) {
            setValuesState(lastState => ({ ...lastState, [key]: el.value }));
            this.value = String(el.value);
          }
        }
      };
    }

    return result;
  }, []);
}
