import { render } from '@testing-library/react-native';
import React from 'react';

import App from './App';

describe('App', () => {
  it('Should render sucessfully', async () => {
    const { getByTestId, getByText } = render(<App />);

    expect(getByTestId('app.screen.home')).toBeTruthy();
    expect(getByText('Hello Husky')).toBeTruthy();
  });
});
