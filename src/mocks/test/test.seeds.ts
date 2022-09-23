import moment from 'moment';

import type { Test } from '../../types';

export const intialValues: Test = {
  displayed: 0,
  completedWith: undefined,
  updatedAt: '',
  createdAt: moment('2022-09-19 20:00').format('YYYY-MM-DD HH:mm'),
};
