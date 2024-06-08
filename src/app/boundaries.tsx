import { Layout } from './layout';

export const AppBoundaries = ({ children }: { children: React.ReactNode }) => {
    return <Layout>{children}</Layout>;
};
