import { act, fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import RatingTest from '.';
import styles from './ratingTest.styles';

describe('Components - RatingTest', () => {
  it('Should render correctly', async () => {
    const onSubmit = jest.fn();

    const { getByTestId, getByText } = render(<RatingTest onSubmit={onSubmit} />);

    expect(getByText('Enjoying RacketPal?')).toBeTruthy();

    expect(getByTestId('app.ratingtest.button.close')).toBeTruthy();
    expect(getByTestId('app.ratingtest.button.close')).toHaveStyle(styles.closeButton);

    expect(getByTestId('app.ratingtest.button.rate')).toBeTruthy();
    expect(getByTestId('app.ratingtest.button.rate')).toHaveStyle(styles.rateButton);

    expect(getByTestId('app.ratingtest.button.feedback')).toBeTruthy();
    expect(getByTestId('app.ratingtest.button.feedback')).toHaveStyle(styles.feedbackButton);

    await act(() => {
      fireEvent.press(getByTestId('app.ratingtest.button.close'));

      expect(onSubmit).toHaveBeenCalled();
      expect(onSubmit).toHaveBeenCalledWith('CLOSE');
    });

    await act(() => {
      fireEvent.press(getByTestId('app.ratingtest.button.rate'));

      expect(onSubmit).toHaveBeenCalledWith('RATE');
    });

    await act(() => {
      fireEvent.press(getByTestId('app.ratingtest.button.feedback'));

      expect(onSubmit).toHaveBeenCalledWith('FEEDBACK');
    });
  });
});
