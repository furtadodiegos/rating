import AxiosMockAdapter from 'axios-mock-adapter';

import { axios } from '../services';
import { controlMock } from './control';
import { testMock } from './test';

const mocks = (delay = 0) => {
  const mock = new AxiosMockAdapter(axios, { delayResponse: delay });

  controlMock(mock);
  testMock(mock);
};

export default mocks;
