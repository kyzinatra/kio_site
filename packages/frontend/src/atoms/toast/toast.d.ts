export interface IToastItem {
  title: string;
  theme?: 'error' | 'info' | 'success' | 'warning';
  timeout?: string | number;
  nodeRef?: React.RefObject<HTMLDivElement>;
  id: string;
}
