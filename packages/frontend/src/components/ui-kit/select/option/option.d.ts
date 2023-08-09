export type IOption = {
  selected?: boolean;
  title?: string;
  children: string | React.ReactElement;
  _onSelect?: (title: string) => void;
  _isNowSelected?: boolean;
  name?: string;
};
