export function propsAreEqual<T extends { [key: string]: any }>(props: T, nextProps: T): boolean {
  const propsKeys = Object.keys(props);
  if (propsKeys.length !== Object.keys(nextProps).length) return false;
  for (let key of propsKeys) {
    if (props[key as keyof typeof props] !== nextProps[key as keyof typeof props]) {
      return false;
    }
  }
  return true;
}
