import AppHeader from '@src/layouts/AppHeader';
import AppFooter from '@src/layouts/AppFooter';
import { FC, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};
export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <AppHeader />
            <main>{children}</main>
            <AppFooter />
        </>
    );
};
