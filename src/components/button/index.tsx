import React from 'react';
import { TouchableOpacity } from 'react-native';
import type { FC, PropsWithChildren } from 'react';
import type { TouchableOpacityProps } from 'react-native';

import styles from './styles';

const AppButton: FC<PropsWithChildren<TouchableOpacityProps>> = ({ children, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default AppButton;
