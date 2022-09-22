import moment from 'moment';

import { uuidGenerate } from '../../utils';
import type { Control } from '../../types';

export const intialValues: Control = {
  id: uuidGenerate(),
  action: undefined,
  displayed: 0,
  value: 0,
  feedback: '',
  createdAt: moment('2022-09-19 20:00').format('YYYY-MM-DD HH:mm'),
  updatedAt: '',
};
