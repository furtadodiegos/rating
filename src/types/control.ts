import type { ActionProps } from '../contexts';

export interface Control {
  id: string;
  displayed: number;
  value: number;
  action?: ActionProps;
  feedback: string;
  updatedAt: string;
  createdAt: string;
}

export type ControlActionTypes =
  | 'GET_CONTROL'
  | 'GET_CONTROL_START'
  | 'GET_CONTROL_ERROR'
  | 'PATCH_CONTROL'
  | 'PATCH_CONTROL_START'
  | 'PATCH_CONTROL_ERROR';

export type ControlStateProps = Partial<Control>;

export type ControlProps = ControlStateProps & {
  isLoading: boolean;
  error?: any;
};
