import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';

import RatingControl from '.';

describe('Components - RatingControl', () => {
  it('Should render correctly', async () => {
    const onAction = jest.fn();

    const { getByTestId, getByText, queryByText, queryByTestId } = render(
      <RatingControl onAction={onAction} action="accepting" displayed={1} />,
    );

    expect(getByText('Enjoying RacketPal?')).toBeTruthy();
    expect(getByText('Remind me later')).toBeTruthy();

    expect(queryByTestId('app.ratingcontrol.textinput"')).not.toBeTruthy();
    expect(queryByText('Any feedback for us')).not.toBeTruthy();

    await waitFor(() => {
      fireEvent.press(getByTestId('app.ratingcontrol.remind.submit'));

      expect(onAction).toHaveBeenCalled();
    });
  });

  it.todo('pick 1 start to show the feedback field');
  it.todo('pick 5 starts to call onAction');
});
