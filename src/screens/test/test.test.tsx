import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';

import { AppProviders } from '../../App';
import { AppModal } from '../../components';
import TestScreen from '.';

describe('Screens - Test', () => {
  it('Should render correctly', async () => {
    jest.setTimeout(15000);

    const { getByTestId, queryAllByTestId } = render(
      <AppProviders>
        <TestScreen />

        <AppModal />
      </AppProviders>,
    );

    await waitFor(() => {
      expect(getByTestId('app.screen.test')).toBeTruthy();
      expect(queryAllByTestId('screen.test.list.item.button')).toHaveLength(4);
    });

    await act(async () => {
      fireEvent.press(queryAllByTestId('screen.test.list.item.button')[0]);

      await new Promise((res) => {
        setTimeout(() => res({}), 12000);
      });
    });

    expect(getByTestId('app.modal.content')).toBeTruthy();
  });
});
