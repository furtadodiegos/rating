import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import type { FC } from 'react';
import type { FlatListProps } from 'react-native';

import type { ActionProps } from '../../contexts';

interface AppListProps extends FlatListProps<ActionProps> {
  isLoading: boolean;
}

const AppList: FC<AppListProps> = ({ isLoading, ...props }) => {
  return (
    <FlatList
      ListFooterComponent={isLoading ? <ActivityIndicator /> : <View />}
      ListEmptyComponent={ActivityIndicator}
      {...props}
    />
  );
};

export default AppList;
