import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';

import { AppProviders } from '../../App';
import { AppModal } from '../../components';
import ControlScreen from '.';

describe('Screens - Control', () => {
  it('Should render correctly', async () => {
    const { getByTestId, queryAllByTestId } = render(
      <AppProviders>
        <ControlScreen />

        <AppModal />
      </AppProviders>,
    );

    await waitFor(() => {
      expect(getByTestId('app.screen.control')).toBeTruthy();
      expect(queryAllByTestId('screen.control.list.item.button')).toHaveLength(4);
    });

    await act(() => {
      fireEvent.press(queryAllByTestId('screen.control.list.item.button')[0]);
    });

    expect(getByTestId('app.modal.content')).toBeTruthy();
  });
});
