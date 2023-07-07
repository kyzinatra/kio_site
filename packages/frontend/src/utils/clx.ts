/**
 * @description
 * this function is used to join class names together. It can take any number of arguments and will join them together with a space.
 * If you pass an object, it will only add the keys that have a truthy value. You can also pass arrays, which will be joined together.
 * @example
 * clx('foo', 'bar', 'baz') // => 'foo bar baz'
 * clx('foo', { bar: true, baz: false }) // => 'foo bar'
 * clx({ foo: true, bar: true }, { baz: true }) // => 'foo bar baz'
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
