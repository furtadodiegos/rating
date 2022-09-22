import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';

import AppButton from '../button';
import AppList from '.';

describe('Components - List', () => {
  it('Should render correctly', async () => {
    const setAction = jest.fn();

    const { getByTestId, queryAllByTestId, getByText } = render(
      <AppList
        testID="app.list"
        isLoading={false}
        data={['accepting', 'creating']}
        renderItem={({ item }) => (
          <AppButton testID="app.list.item.button" onPress={() => setAction(item)}>
            <Text testID="app.list.item.button.text">{item.toUpperCase()}</Text>
          </AppButton>
        )}
      />,
    );

    expect(getByTestId('app.list')).toBeTruthy();
    expect(queryAllByTestId('app.list.item.button')).toHaveLength(2);
    expect(queryAllByTestId('app.list.item.button.text')).toHaveLength(2);
    expect(getByText('ACCEPTING')).toBeTruthy();

    await waitFor(() => {
      fireEvent.press(queryAllByTestId('app.list.item.button')[0]);

      expect(setAction).toHaveBeenCalled();
      expect(setAction).toHaveBeenCalledWith('accepting');
    });
  });

  it('Should render the ActivityIndicator', async () => {
    const { getByTestId } = render(
      <AppList
        testID="app.list"
        isLoading
        data={['accepting', 'creating']}
        renderItem={({ item }) => (
          <AppButton testID="app.list.item.button" onPress={() => null}>
            <Text testID="app.list.item.button.text">{item.toUpperCase()}</Text>
          </AppButton>
        )}
      />,
    );

    expect(getByTestId('app.list.activityIndicator')).toBeTruthy();
  });
});
