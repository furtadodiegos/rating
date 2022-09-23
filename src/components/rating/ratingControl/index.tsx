import React, { useCallback, useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import type { FC } from 'react';
import type { TapRatingProps } from 'react-native-ratings';

import AppButton from '../../button';
import styles from './ratingControl.styles';
import type { ActionProps } from '../../../contexts';
import type { ControlStateProps } from '../../../types';

interface RatingControlProps extends TapRatingProps {
  displayed: number;
  onAction: (data: ControlStateProps) => void;
  action: ActionProps;
}

const RatingControl: FC<RatingControlProps> = ({ onAction, displayed, action, ...props }) => {
  const [value, setValue] = useState(0);
  const [feedback, setFeedback] = useState('');

  const onSubmit = useCallback(() => {
    onAction({ value, action: value ? action : undefined, feedback, displayed });
  }, [action, feedback, onAction, value, displayed]);

  useEffect(() => {
    if (value >= 4) onSubmit();
  }, [value, onSubmit]);

  return (
    <View>
      <Text style={[styles.align, styles.title]}>Enjoying RacketPal?</Text>

      <AirbnbRating defaultRating={value} onFinishRating={setValue} {...props} />

      {value && value < 4 ? (
        <View style={styles.formContainer}>
          <Text style={styles.feedbackText}>Any feedback for us</Text>

          <TextInput
            testID="app.ratingcontrol.textinput"
            value={feedback}
            style={styles.feedbackInput}
            multiline
            numberOfLines={3}
            onChangeText={setFeedback}
          />

          <AppButton onPress={onSubmit} style={styles.feedbackSubmit}>
            <Text style={[styles.align, styles.feedbackSubmitText]}>Submit</Text>
          </AppButton>
        </View>
      ) : (
        <AppButton onPress={onSubmit} testID="app.ratingcontrol.remind.submit">
          <Text style={[styles.align, styles.remindText]}>Remind me later</Text>
        </AppButton>
      )}
    </View>
  );
};

export default RatingControl;
