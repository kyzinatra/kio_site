import { ChangeEvent, useMemo, useState } from 'react';

interface TForm {
  [key: string]: any;
}

type IResult<T extends TForm> = {
  form: {
    [key in keyof T]?: {
      value: string;
      onChange: (e: ChangeEvent | boolean | string | number) => void;
    };
  };
  clear: () => void;
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

  const memoResult = useMemo(() => {
    const result: IResult<T> = {
      form: {},
      clear() {
        setValuesState(lastValue => {
          for (let key in lastValue) {
            lastValue[key] = defaultValue[key];
          }
          return lastValue;
        });
        for (let key in result.form) {
          const field = this.form[key[0]];
          if (field?.value) {
            field.value = defaultValue[key[0]];
          }
        }
      }
    };

    for (let key in valuesState) {
      const currentField = {
        value: String(valuesState[key]),

        onChange(e: ChangeEvent | boolean | string | number) {
          if (typeof e !== 'object') {
            currentField.value = String(e);
            setValuesState(lastState => ({ ...lastState, [key]: e }));
            return;
          }
          const el = e.target;
          if (el instanceof HTMLInputElement) {
            currentField.value = String(el.value);
            setValuesState(lastState => ({ ...lastState, [key]: el.value }));
          }
        }
      };
      result.form[key] = currentField;
    }

    return result;
  }, []);

  return memoResult;
}
