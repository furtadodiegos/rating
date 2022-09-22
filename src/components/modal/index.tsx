import React from 'react';
import { Keyboard, View } from 'react-native';
import Modal from 'react-native-modal';
import type { FC } from 'react';

import { useModal } from '../../contexts';
import styles from './modal.styles';

const AppModal: FC = () => {
  const { content } = useModal();

  return (
    <Modal isVisible={!!content} animationOutTiming={600} onTouchStart={() => Keyboard.dismiss()}>
      <View style={styles.content}>{content}</View>
    </Modal>
  );
};

export default AppModal;
