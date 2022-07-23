import { Head } from '@src/modules/components/Head';
import { Box, Card, Container, Typography } from '@mui/material';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { transition } from '@src/lib/transition';
import { cartPage } from '@translations/cartPage';
import { NextPageWithLayout } from '@shared/types/page';
import { MainLayout } from '@src/layouts/MainLayout';
import { useUser } from '@src/hooks/useUser';
import { Cart } from '@components/Cart/Cart';
import dynamic from 'next/dynamic';

const Checkout: NextPageWithLayout = () => {
    const theme = useTheme();
    const { locale } = useRouter();
    const t = transition(cartPage, locale);

    const user = useUser();
    const userCart = user?.cart;

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
                        <Typography variant={'h1'} mb={{ xs: 1, md: 3 }} style={{ wordBreak: 'break-word' }}>
                            {t.title}
                        </Typography>
                        {userCart?.items.length > 0 && <Cart />}
                    </Card>
                </Container>
            </Box>
        </MainLayout>
    );
};

export default dynamic(() => Promise.resolve(Checkout), {
    ssr: false
});
