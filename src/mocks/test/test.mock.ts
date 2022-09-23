import moment from 'moment';
import type AxiosMockAdapter from 'axios-mock-adapter';

import { settings } from '../../services';
import { intialValues } from './test.seeds';
import type { MockResponseProps } from '../../services/axios';
import type { Test } from '../../types';

let values = intialValues;

const testMock = (mock: AxiosMockAdapter) => {
  mock.onGet(`${settings.apiURL}/test`).reply((): MockResponseProps<Test> => {
    return [200, values];
  });

  mock.onPatch(`${settings.apiURL}/test`).reply(({ data }): MockResponseProps<Test> => {
    const payload = JSON.parse(data);

    values = {
      ...intialValues,
      ...payload,
      updatedAt: moment().format('YYYY-MM-DD HH:mm'),
      displayed: intialValues.displayed + 1,
    };

    return [200, values];
  });
};

export default testMock;
