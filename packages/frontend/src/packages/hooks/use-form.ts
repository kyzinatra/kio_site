import { ChangeEvent, useMemo, useState } from 'react';

type TForm = { [key: string]: string | boolean | number };

type IResult<T extends TForm> = {
<<<<<<< HEAD:packages/frontend/src/hooks/use-form.ts
  form: {
    [key in keyof T]?: {
      value: string;
      onChange: (e: ChangeEvent | boolean | string | number) => void;
    };
  };
  _clear: () => void;
=======
  [key in keyof T]?: {
    value: string;
    onChange: (e: ChangeEvent | boolean | string | number) => void;
  };
>>>>>>> 8c3752ee0872598c6800f9799b2fd3e86227c1e0:packages/frontend/src/packages/hooks/use-form.ts
};

export function useForm<T extends TForm>(defaultValue: T) {
  const [valuesState, setValuesState] = useState(defaultValue);

  return useMemo(() => {
<<<<<<< HEAD:packages/frontend/src/hooks/use-form.ts
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
=======
    const result: IResult<T> = {};

    for (let key in valuesState) {
      result[key] = {
>>>>>>> 8c3752ee0872598c6800f9799b2fd3e86227c1e0:packages/frontend/src/packages/hooks/use-form.ts
        value: String(valuesState[key]),

        onChange(e: ChangeEvent | boolean | string | number) {
          if (typeof e !== 'object') {
            setValuesState(lastState => ({ ...lastState, [key]: e }));
<<<<<<< HEAD:packages/frontend/src/hooks/use-form.ts
=======
            this.value = String(e);
>>>>>>> 8c3752ee0872598c6800f9799b2fd3e86227c1e0:packages/frontend/src/packages/hooks/use-form.ts
            return;
          }
          const el = e.target;
          if (el instanceof HTMLInputElement) {
            setValuesState(lastState => ({ ...lastState, [key]: el.value }));
<<<<<<< HEAD:packages/frontend/src/hooks/use-form.ts
=======
            this.value = String(el.value);
>>>>>>> 8c3752ee0872598c6800f9799b2fd3e86227c1e0:packages/frontend/src/packages/hooks/use-form.ts
          }
        }
      };
    }

    return result;
<<<<<<< HEAD:packages/frontend/src/hooks/use-form.ts
  }, [valuesState]);
=======
  }, []);
>>>>>>> 8c3752ee0872598c6800f9799b2fd3e86227c1e0:packages/frontend/src/packages/hooks/use-form.ts
}
