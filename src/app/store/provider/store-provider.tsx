import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '../config/store';

interface AppStoreProviderProps {
  children: ReactNode;
}

export const AppStoreProvider: React.FC<AppStoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
