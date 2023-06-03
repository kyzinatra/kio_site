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

/**
 * @description vue-like hook for creating forms with controlled inputs and checkboxes
 * @example
 * const { form, _clear } = useForm({ name: '', email: '', password: '' });
 * console.log(form.email) // { value: '', onChange: (e) => void }
 * ...
 * return (<input type="email" {...form.email} />)
 */
export function useForm<T extends TForm>(defaultValue: T): IResult<T> {
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
