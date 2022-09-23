import { render, waitFor } from '@testing-library/react-native';
import React from 'react';

import App from './App';

describe('App', () => {
  it('Should render sucessfully', async () => {
    const { getByTestId } = render(<App />);

    await waitFor(() => {
      expect(getByTestId('app.screen.control')).toBeTruthy();
    });
  });
});
