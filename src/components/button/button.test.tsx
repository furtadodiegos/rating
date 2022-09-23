import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import AppButton from '.';

describe('Components - Button', () => {
  it('Should render sucessfully', async () => {
    const onPress = jest.fn();

    const { getByTestId, getByText } = render(
      <AppButton testID="app.button" onPress={onPress}>
        <Text>Button</Text>
      </AppButton>,
    );

    expect(getByTestId('app.button')).toBeTruthy();
    expect(getByText('Button')).toBeTruthy();

    await waitFor(() => {
      fireEvent.press(getByTestId('app.button'));

      expect(onPress).toHaveBeenCalled();
    });
  });
});
