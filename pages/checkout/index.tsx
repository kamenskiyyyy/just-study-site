import { Head } from '@src/modules/components/Head';
import { Alert, AlertTitle, Box, Card, Container } from '@mui/material';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { cartPage } from '@translations/cartPage';
import { MainLayout } from '@src/layouts/MainLayout';
import { useUser } from '@src/hooks/useUser';
import { Cart } from '@components/Cart/Cart';
import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { SpinnerWrapper } from '@shared/ui/SpinnerWrapper';
import { gql, useQuery } from '@apollo/client';
import { IOrders, Orders } from '@components/Orders/Orders';

export const QUERY_ACTIVE_ORDERS = gql`
    query ($userId: ID!) {
        orders(where: { status: { equals: created }, student: { id: { equals: $userId } } }) {
            id
            label
            amount
            nextPayment
            quantityPayments
        }
    }
`;

const Checkout: NextPage = () => {
    const theme = useTheme();
    const { locale } = useRouter();
    const t = transition(cartPage, locale);

    const { user, loading } = useUser();
    const userCart = user?.cart;

    const { data } = useQuery<IOrders>(QUERY_ACTIVE_ORDERS, {
        variables: { userId: user?.id },
        fetchPolicy: 'network-only'
    });

    return (
        <MainLayout>
            <Head title={t.title} />
            <Box bgcolor={theme.palette.primary.main} px={{ xs: 0.5, md: 6 }} py={{ xs: 2, md: 6 }}>
                <Container maxWidth={'md'} sx={{ p: 0 }}>
                    <Card
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            py: { xs: 3, md: 6 },
                            px: { xs: 2, md: 6 }
                        }}>
                        <SpinnerWrapper loading={loading}>
                            {user === null && (
                                <Alert severity="error">
                                    <AlertTitle>Вы не авторизованы 😢</AlertTitle>
                                    Для оплаты заказа вам необходимо авторизоваться
                                </Alert>
                            )}
                            {data?.orders && data?.orders?.length > 0 && <Orders orders={data.orders} />}
                            {userCart?.items.length > 0 && <Cart />}
                        </SpinnerWrapper>
                    </Card>
                </Container>
            </Box>
        </MainLayout>
    );
};

export default dynamic(() => Promise.resolve(Checkout), {
    ssr: false
});
