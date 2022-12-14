import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import type { FC } from 'react';
import type { FlatListProps } from 'react-native';

import styles from './list.styles';
import type { ActionProps } from '../../contexts';

interface AppListProps extends FlatListProps<ActionProps> {
  isLoading: boolean;
}

const AppList: FC<AppListProps> = ({ isLoading, ...props }) => {
  return (
    <FlatList
      ListFooterComponent={isLoading ? <ActivityIndicator testID="app.list.activityIndicator" /> : <View />}
      contentContainerStyle={styles.list}
      {...props}
    />
  );
};

export default AppList;
