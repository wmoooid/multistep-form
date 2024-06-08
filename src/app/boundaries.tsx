import { Layout } from './layout';
import { AppStoreProvider } from './store';

export const AppBoundaries = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppStoreProvider>
      <Layout>{children}</Layout>
    </AppStoreProvider>
  );
};
