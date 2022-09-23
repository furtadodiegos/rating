import React, { useCallback, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import type { FC } from 'react';
import type { TapRatingProps } from 'react-native-ratings';

import AppButton from '../../button';
import styles from './ratingTest.styles';
import type { Test } from '../../../types';

interface RatingTestProps extends TapRatingProps {
  onSubmit: (completedWith: Test['completedWith']) => void;
}

const RatingTest: FC<RatingTestProps> = ({ onSubmit }) => {
  const [isLoading, setisLoading] = useState(false);

  const onAction = useCallback(
    (completedWith: Test['completedWith']) => {
      setisLoading(true);

      onSubmit(completedWith);
    },
    [onSubmit],
  );

  return (
    <View>
      <View style={styles.container}>
        <View>{isLoading && <ActivityIndicator />}</View>

        <AppButton onPress={() => onAction('CLOSE')} style={styles.closeButton} testID="app.ratingtest.button.close">
          <Text style={styles.closeText}>X</Text>
        </AppButton>
      </View>

      <AirbnbRating defaultRating={5} isDisabled />

      <Text style={styles.title}>Enjoying RacketPal?</Text>

      <Text style={styles.text}>
        Your App store review gratly helps spread the word and grow the racket sports community!
      </Text>

      <AppButton onPress={() => onAction('RATE')} style={styles.rateButton} testID="app.ratingtest.button.rate">
        <Text style={styles.rateText}>Rate us</Text>
      </AppButton>

      <AppButton
        onPress={() => onAction('FEEDBACK')}
        style={styles.feedbackButton}
        testID="app.ratingtest.button.feedback">
        <Text style={styles.feedbackText}>Not yet? Give us feedback</Text>
      </AppButton>
    </View>
  );
};

export default RatingTest;
