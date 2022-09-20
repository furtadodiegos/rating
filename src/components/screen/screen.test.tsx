import { render } from '@testing-library/react-native';
import React from 'react';
import { Text, View } from 'react-native';

import AppScreen from '.';

describe('Components - Screen', () => {
  it('Should render sucessfully', async () => {
    const { getByTestId } = render(<AppScreen testid="home" />);

    expect(getByTestId('app.screen.home')).toBeTruthy();
    expect(getByTestId('app.screen.content')).toBeTruthy();

    expect(getByTestId('app.screen.content')).toHaveStyle({ flex: 1 });
  });

  it('Should render correctly the children', async () => {
    const { getByText } = render(
      <AppScreen testid="home">
        <View>
          <Text>Hello</Text>
        </View>
      </AppScreen>,
    );

    expect(getByText('Hello')).toBeTruthy();
  });
});
