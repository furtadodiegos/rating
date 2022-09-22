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
