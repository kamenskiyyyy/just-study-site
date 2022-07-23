import * as React from 'react';
import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Card, Container, Stack, Typography } from '@mui/material';
import imageError from './errorPayment.png';
import Image from 'next/image';

export const ErrorPayment: FC<{ url: string }> = ({ url }) => {
    const theme = useTheme();

    return (
        <Box bgcolor={theme.palette.error.main} px={{ xs: 0.5, md: 6 }} py={{ xs: 2, md: 6 }}>
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
                        <Typography variant={'h1'}>Произошла ошибка 😢</Typography>
                        <Typography variant={'h5'}>Оплата не была произведена успешно</Typography>
                        <Box m={'auto'} maxWidth={{ xs: 200, md: 300, lg: 400 }}>
                            <Image src={imageError} loading={'lazy'} placeholder={'blur'} />
                        </Box>
                        {/*<Button variant={'contained'} sx={{ width: 200, alignSelf: 'center' }} href={url}>*/}
                        {/*    Повторить*/}
                        {/*</Button>*/}
                    </Stack>
                </Card>
            </Container>
        </Box>
    );
};
