import { Linking, Platform } from 'react-native';

import { settings } from '../services';

export const goToStore = () => {
  Platform.select({
    ios: Linking.openURL(settings.storesLink.ios),
    default: Linking.openURL(settings.storesLink.android),
  });
};
