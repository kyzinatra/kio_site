export interface IToast {
    title: string;
    theme?: 'error' | 'info' | 'success' | 'warning';
    timeout?: string | number;
}