import { Box, Card, Container, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import successImage from './successPayment.png';

export const SuccessPayment: FC = () => {
    const theme = useTheme();

    return (
        <Box bgcolor={theme.palette.success.main} px={{ xs: 0.5, md: 6 }} py={{ xs: 2, md: 6 }}>
            <Container maxWidth={'md'} sx={{ p: 0 }}>
                <Card
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        py: { xs: 3, md: 6 },
                        px: { xs: 2, md: 6 },
                        alignItems: 'center'
                    }}>
                    <Stack gap={2}>
                        <Typography variant={'h1'}>Оплата прошла!</Typography>
                        <Typography variant={'h5'}>Поздравляем с успешным началом обучения ❤️</Typography>
                        <Box m={'auto'} maxWidth={{ xs: 200, md: 300, lg: 400 }}>
                            <Image src={successImage} loading={'lazy'} placeholder={'blur'} />
                        </Box>
                    </Stack>
                </Card>
            </Container>
        </Box>
    );
};
