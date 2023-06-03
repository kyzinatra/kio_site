/**
 * @description
 */

export function clx(...args: { [key: string]: any }[] | any[]) {
  return (
    args
      .map(el => {
        if (Array.isArray(el)) {
          return el.map(String).filter(Boolean).join(' ').trim();
        }
        if (typeof el === 'object') {
          let result = '';
          for (let [key, value] of Object.entries(el)) {
            if (value) result += key + ' ';
          }
          return result.trim();
        }
        return el;
      })
      .filter(Boolean)
      .join(' ')
      .trim() || ''
  );
}
