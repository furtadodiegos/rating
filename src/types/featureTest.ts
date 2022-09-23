export interface Test {
  displayed: number;
  completedWith?: 'FEEDBACK' | 'RATE' | 'CLOSE';
  updatedAt?: string;
  createdAt: string;
}
