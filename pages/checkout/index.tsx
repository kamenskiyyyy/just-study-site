import { Head } from '@src/modules/components/Head';
import { Box, Card, Container } from '@mui/material';
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
import { Orders } from '@components/Orders/Orders';

const Checkout: NextPage = () => {
    const theme = useTheme();
    const { locale } = useRouter();
    const t = transition(cartPage, locale);

    const { user, loading } = useUser();
    const userCart = user?.cart;

    console.log(user);

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
                            {user?.id && <Orders userId={user.id} />}
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
