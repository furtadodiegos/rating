import { render } from '@testing-library/react-native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import type { FC, ReactElement } from 'react';

import { ModalProvider, useModal } from '../../contexts';
import AppModal from '.';
import styles from './modal.styles';

const WithProvider: FC<{ component?: ReactElement }> = ({ component }) => {
  const { setContent } = useModal();

  useEffect(() => {
    setContent(component);
  }, [setContent, component]);

  return <AppModal />;
};

describe('Components - Modal', () => {
  it('Should render sucessfully', async () => {
    const { getByTestId } = render(
      <ModalProvider>
        <WithProvider component={<View />} />
      </ModalProvider>,
    );

    expect(getByTestId('app.modal')).toBeTruthy();
    expect(getByTestId('app.modal.content')).toBeTruthy();

    expect(getByTestId('app.modal.content')).toHaveStyle(styles.content);
  });

  it('Should not render', async () => {
    const { queryByTestId } = render(
      <ModalProvider>
        <WithProvider component={undefined} />
      </ModalProvider>,
    );

    expect(queryByTestId('app.modal.content')).not.toBeTruthy();
  });
});
