import moment from 'moment';
import type AxiosMockAdapter from 'axios-mock-adapter';

import { settings } from '../../services';
import { intialValues } from './control.seeds';
import type { MockResponseProps } from '../../services/axios';
import type { Control } from '../../types';

let values = intialValues;

const controlMock = (mock: AxiosMockAdapter) => {
  mock.onGet(`${settings.apiURL}/control`).reply((): MockResponseProps<Control> => {
    return [200, values];
  });

  mock.onPut(`${settings.apiURL}/control`).reply(({ data }): MockResponseProps<Control | { message: string }> => {
    values = { ...values, ...JSON.parse(data), updatedAt: moment().format('YYYY-MM-DD HH:mm') };

    return values.feedback !== 'error' ? [200, values] : [400, { message: 'Some randon error' }];
  });
};

export default controlMock;
