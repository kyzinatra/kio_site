import { ChangeEvent, useMemo, useState } from 'react';

type TForm = { [key: string]: string | boolean | number };

type IResult<T extends TForm> = {
  form: {
    [key in keyof T]?: {
      value: string;
      onChange: (e: ChangeEvent | boolean | string | number) => void;
    };
  };
  _clear: () => void;
};

export function useForm<T extends TForm>(defaultValue: T) {
  const [valuesState, setValuesState] = useState(defaultValue);

  return useMemo(() => {
    const result: IResult<T> = {
      form: {},
      _clear() {
        setValuesState(lastValue => {
          for (let key in lastValue) {
            lastValue[key] = defaultValue[key];
          }
          return lastValue;
        });
      }
    };

    for (let key in valuesState) {
      result.form[key] = {
        value: String(valuesState[key]),

        onChange(e: ChangeEvent | boolean | string | number) {
          if (typeof e !== 'object') {
            setValuesState(lastState => ({ ...lastState, [key]: e }));
            return;
          }
          const el = e.target;
          if (el instanceof HTMLInputElement) {
            setValuesState(lastState => ({ ...lastState, [key]: el.value }));
          }
        }
      };
    }

    return result;
  }, [valuesState]);
}
