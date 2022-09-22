import moment from 'moment';
import type AxiosMockAdapter from 'axios-mock-adapter';

import { settings } from '../../services';
import { intialValues } from './control.seeds';
import type { MockResponseProps } from '../../services/axios';
import type { Control } from '../../types';

const value = intialValues;

const controlMock = (mock: AxiosMockAdapter) => {
  mock.onGet(`${settings.apiURL}/control`).reply((): MockResponseProps<Control> => {
    return [200, value];
  });

  mock.onPut(`${settings.apiURL}/control`).reply(({ data }): MockResponseProps<Control | { message: string }> => {
    const result: Control = { ...value, ...JSON.parse(data), updatedAt: moment().format('YYYY-MM-DD HH:mm') };

    return result.feedback !== 'error' ? [200, result] : [400, { message: 'Some randon error' }];
  });
};

export default controlMock;
